import createAnimalDTO from './createAnimalDTO';

interface createFoxDTO extends createAnimalDTO {
  coat: 'Blue' | 'Green' | 'Red' | 'Brown';
}

export default createFoxDTO;
