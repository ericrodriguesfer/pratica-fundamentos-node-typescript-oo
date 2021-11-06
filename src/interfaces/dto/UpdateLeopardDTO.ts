import ISexo from '../types/ISexo';

export default interface UpdateLeopardDTO {
  name: string;
  sexo: ISexo;
  age: number;
  weight: number;
  maxVelocity: number;
}
