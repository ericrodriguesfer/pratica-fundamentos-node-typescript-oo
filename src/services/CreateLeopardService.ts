import createLeopardDTO from '../interfaces/dto/createLeopardDTO';
import Leopard from '../models/Leopard';
import AnimalsRepository from '../repositories/AnimalsRepository';

class CreateLeopardService {
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
    max_velocity,
  }: createLeopardDTO): Leopard {
    if (!['Leopard'].includes(especie)) {
      throw Error('This especie animal repassed not combine with leopard');
    }

    const nameLower: string = name.toLowerCase();

    const existsOtherAnimalByName: boolean = this.animalsRepository.findByName(
      nameLower,
    );

    if (existsOtherAnimalByName) {
      throw Error('Not permited register more than one animal with equal name');
    }

    const leopard: Leopard = this.animalsRepository.createLeopard({
      name: nameLower,
      especie,
      sexo,
      age,
      weight,
      max_velocity,
    });

    return leopard;
  }
}

export default CreateLeopardService;
