import CreateLeopardDTO from '../interfaces/dto/CreateLeopardDTO';
import UpdateLeopardDTO from '../interfaces/dto/UpdateLeopardDTO';
import Leopard from '../models/Leopard';
import AnimalsRepository from '../repositories/AnimalsRepository';

class UpdateLeopardService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(
    { name, sexo, age, weight, maxVelocity }: UpdateLeopardDTO,
    nameLeopard: string,
  ): Leopard {
    const nameLower: string = name.toLowerCase();
    const nameLeopardLowe: string = nameLeopard.toLowerCase();

    const existsLeopardByName: boolean = this.animalsRepository.findByName(
      nameLeopardLowe,
    );

    if (!existsLeopardByName) {
      throw Error(
        'Not permited updater, because not exists leopard with this name',
      );
    }

    const indexLeopardUpdate: number = this.animalsRepository.getIndexAnimalByName(
      nameLeopardLowe,
    );

    if (indexLeopardUpdate === -1 || indexLeopardUpdate < 0) {
      throw Error(
        'Not permited updater, because not found leopard with this name',
      );
    }

    const leopard: Leopard = this.animalsRepository.updateLeopard(
      {
        name: nameLower,
        sexo,
        age,
        weight,
        maxVelocity,
      },
      indexLeopardUpdate,
    );

    return leopard;
  }
}

export default UpdateLeopardService;
