import ISexo from '../types/ISexo';

export default interface UpdateLionDTO {
  name: string;
  sexo: ISexo;
  age: number;
  weight: number;
  mane: boolean;
}
