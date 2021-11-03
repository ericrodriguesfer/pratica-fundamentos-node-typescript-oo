import ISexo from '../types/ISexo';

export default interface CreateAnimalDTO {
  name: string;
  especie: 'Lion' | 'Alligator' | 'Leopard' | 'Fox';
  sexo: ISexo;
  age: number;
  weight: number;
}
