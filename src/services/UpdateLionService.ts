import CreateLionDTO from '../interfaces/dto/CreateLionDTO';
import UpdateLionDTO from '../interfaces/dto/UpdateLionDTO';
import Lion from '../models/Lion';
import AnimalsRepository from '../repositories/AnimalsRepository';

class UpdateLionService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(
    { name, sexo, age, weight, mane }: UpdateLionDTO,
    lionName: string,
  ): Lion {
    const nameLower: string = name.toLowerCase();
    const nameLionLower: string = lionName.toLowerCase();

    const existsLionByName: boolean = this.animalsRepository.findByName(
      nameLionLower,
    );

    if (!existsLionByName) {
      throw Error(
        'Not permited updater, because not exists lion with this name',
      );
    }

    const indexLionUpdate: number = this.animalsRepository.getIndexAnimalByName(
      nameLionLower,
    );

    if (indexLionUpdate === -1 || indexLionUpdate < 0) {
      throw Error(
        'Not permited updater, because not found lion with this name',
      );
    }

    const lion: Lion = this.animalsRepository.updateLion(
      {
        name: nameLower,
        sexo,
        age,
        weight,
        mane,
      },
      indexLionUpdate,
    );

    return lion;
  }
}

export default UpdateLionService;
