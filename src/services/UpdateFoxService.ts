import UpdateFoxDTO from '../interfaces/dto/UpdateFoxDTO';
import Fox from '../models/Fox';
import AnimalsRepository from '../repositories/AnimalsRepository';

class UpdateFoxService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(
    { name, sexo, age, weight, coat }: UpdateFoxDTO,
    nameFox: string,
  ): Fox {
    if (!['Blue', 'Green', 'Red', 'Brown'].includes(coat)) {
      throw Error(
        'This coat repassed not combine with Blue, Green, Red, Brown',
      );
    }

    const nameLower: string = name.toLowerCase();
    const nameFoxLower: string = nameFox.toLowerCase();

    const existsFoxByName: boolean = this.animalsRepository.findByName(
      nameFoxLower,
    );

    if (!existsFoxByName) {
      throw Error(
        'Not permited updater, because not exists alligator with this name',
      );
    }

    const indexFoxUpdate: number = this.animalsRepository.getIndexAnimalByName(
      nameFoxLower,
    );

    if (indexFoxUpdate === -1 || indexFoxUpdate < 0) {
      throw Error('Not permited updater, because not found fox with this name');
    }

    const fox: Fox = this.animalsRepository.updateFox(
      {
        name: nameLower,
        sexo,
        age,
        weight,
        coat,
      },
      indexFoxUpdate,
    );

    return fox;
  }
}

export default UpdateFoxService;
