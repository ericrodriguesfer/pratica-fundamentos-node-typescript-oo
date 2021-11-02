import createAnimalDTO from './createAnimalDTO';

interface createLionDTO extends createAnimalDTO {
  mane: boolean;
}

export default createLionDTO;
