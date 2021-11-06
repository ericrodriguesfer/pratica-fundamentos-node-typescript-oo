import Sexo from '../types/ISexo';

export default interface UpdateFoxDTO {
  name: string;
  sexo: Sexo;
  age: number;
  weight: number;
  coat: 'Blue' | 'Green' | 'Red' | 'Brown';
}
