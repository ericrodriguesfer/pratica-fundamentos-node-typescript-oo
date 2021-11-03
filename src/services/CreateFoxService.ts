import CreateFoxDTO from '../interfaces/dto/CreateFoxDTO';
import Fox from '../models/Fox';
import AnimalsRepository from '../repositories/AnimalsRepository';

class CreateFoxService {
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
    coat,
  }: CreateFoxDTO): Fox {
    if (!['Fox'].includes(especie)) {
      throw Error('This especie animal repassed not combine with fox');
    }

    if (!['Blue', 'Green', 'Red', 'Brown'].includes(coat)) {
      throw Error(
        'This coat repassed not combine with Blue, Green, Red, Brown',
      );
    }

    const nameLower: string = name.toLowerCase();

    const existsOtherAnimalByName: boolean = this.animalsRepository.findByName(
      nameLower,
    );

    if (existsOtherAnimalByName) {
      throw Error('Not permited register more than one animal with equal name');
    }

    const fox: Fox = this.animalsRepository.createFox({
      name: nameLower,
      especie,
      sexo,
      age,
      weight,
      coat,
    });

    return fox;
  }
}

export default CreateFoxService;
