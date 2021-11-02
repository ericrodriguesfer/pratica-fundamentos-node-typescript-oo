import createAnimalDTO from './createAnimalDTO';

interface createLeopardDTO extends createAnimalDTO {
  max_velocity: number;
}

export default createLeopardDTO;
