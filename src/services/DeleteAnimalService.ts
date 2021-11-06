import DeleteAnimalNameDTO from '../interfaces/dto/DeleteAnimalNameDTO';
import AnimalsRepository from '../repositories/AnimalsRepository';

class DeleteAnimalService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute({ name }: DeleteAnimalNameDTO): boolean {
    const nameLower: string = name.toLowerCase();

    const existsAnimalByName: boolean = this.animalsRepository.findByName(
      nameLower,
    );

    if (!existsAnimalByName) {
      throw Error(
        'Not permited delete, because not exists animal with this name',
      );
    }

    const indexAnimalDelete: number = this.animalsRepository.getIndexAnimalByName(
      nameLower,
    );

    const result: boolean = this.animalsRepository.delelte({
      index: indexAnimalDelete,
    });

    return result;
  }
}

export default DeleteAnimalService;
