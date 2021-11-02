import AnimalsRepository from '../repositories/AnimalsRepository';
import IQuantityForSpecie from '../interfaces/types/IQuantityForSpecie';

class QuantityAnimalForSpecieService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute(): IQuantityForSpecie {
    return this.animalsRepository.getQuantity();
  }
}

export default QuantityAnimalForSpecieService;
