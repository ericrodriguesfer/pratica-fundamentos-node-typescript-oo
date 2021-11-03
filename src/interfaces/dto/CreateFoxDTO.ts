import CreateAnimalDTO from './CreateAnimalDTO';

export default interface CreateFoxDTO extends CreateAnimalDTO {
  coat: 'Blue' | 'Green' | 'Red' | 'Brown';
}
