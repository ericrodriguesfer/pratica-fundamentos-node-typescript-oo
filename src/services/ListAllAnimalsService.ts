import Animal from '../models/abstract/Animal';
import AnimalsRepository from '../repositories/AnimalsRepository';

class ListAllAnimalsService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(): Array<Animal> {
    return this.animalsRepository.listAll();
  }
}

export default ListAllAnimalsService;
