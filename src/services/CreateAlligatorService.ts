import createAlligatorDTO from '../interfaces/dto/createAlligatorDTO';
import Alligator from '../models/Alligator';
import AnimalsRepository from '../repositories/AnimalsRepository';

class CreateAlligatorService {
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
    teeth_quantity,
  }: createAlligatorDTO): Alligator {
    if (!['Alligator'].includes(especie)) {
      throw Error('This especie animal repassed not combine with alligator');
    }

    const nameLower: string = name.toLowerCase();

    const existsOtherAnimalByName: boolean = this.animalsRepository.findByName(
      nameLower,
    );

    if (existsOtherAnimalByName) {
      throw Error('Not permited register more than one animal with equal name');
    }

    const alligator: Alligator = this.animalsRepository.createAlligator({
      name: nameLower,
      especie,
      sexo,
      age,
      weight,
      teeth_quantity,
    });

    return alligator;
  }
}

export default CreateAlligatorService;
