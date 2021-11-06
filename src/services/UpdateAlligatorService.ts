import UpdateAlligatorDTO from '../interfaces/dto/UpdateAlligatorDTO';
import Alligator from '../models/Alligator';
import AnimalsRepository from '../repositories/AnimalsRepository';

class UpdateAlligatorService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(
    { name, sexo, age, weight, teethQuantity }: UpdateAlligatorDTO,
    nameAlligator: string,
  ): Alligator {
    const nameLower: string = name.toLowerCase();
    const nameAlligatorLower: string = nameAlligator.toLowerCase();

    const existsAlligatorByName: boolean = this.animalsRepository.findByName(
      nameAlligatorLower,
    );

    if (!existsAlligatorByName) {
      throw Error(
        'Not permited updater, because not exists alligator with this name',
      );
    }

    const indexAlligatorUpdate: number = this.animalsRepository.getIndexAnimalByName(
      nameAlligatorLower,
    );

    if (indexAlligatorUpdate === -1 || indexAlligatorUpdate < 0) {
      throw Error(
        'Not permited updater, because not found alligator with this name',
      );
    }

    const alligator: Alligator = this.animalsRepository.updateAlligator(
      {
        name: nameLower,
        sexo,
        age,
        weight,
        teethQuantity,
      },
      indexAlligatorUpdate,
    );

    return alligator;
  }
}

export default UpdateAlligatorService;
