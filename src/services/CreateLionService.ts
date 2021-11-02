import createLionDTO from '../interfaces/dto/createLionDTO';
import Lion from '../models/Lion';
import AnimalsRepository from '../repositories/AnimalsRepository';

class CreateLionService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute({
    name,
    especie,
    sexo,
    age,
    weight,
    mane,
  }: createLionDTO): Lion {
    if (!['Lion'].includes(especie)) {
      throw Error('This especie animal repassed not combine with lion');
    }

    const nameLower: string = name.toLowerCase();

    const existsOtherAnimalByName: boolean = this.animalsRepository.findByName(
      nameLower,
    );

    if (existsOtherAnimalByName) {
      throw Error('Not permited register more than one animal with equal name');
    }

    const lion: Lion = this.animalsRepository.createLion({
      name: nameLower,
      especie,
      sexo,
      age,
      weight,
      mane,
    });

    return lion;
  }
}

export default CreateLionService;
