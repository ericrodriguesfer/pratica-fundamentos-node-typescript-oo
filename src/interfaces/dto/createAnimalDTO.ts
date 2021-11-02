import ISexo from '../types/ISexo';

interface createAnimalDTO {
  name: string;
  especie: 'Lion' | 'Alligator' | 'Leopard' | 'Fox';
  sexo: ISexo;
  age: number;
  weight: number;
}

export default createAnimalDTO;
