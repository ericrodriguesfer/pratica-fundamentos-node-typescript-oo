import Sexo from '../types/ISexo';

export default interface UpdateAlligatorDTO {
  name: string;
  sexo: Sexo;
  age: number;
  weight: number;
  teethQuantity: number;
}
