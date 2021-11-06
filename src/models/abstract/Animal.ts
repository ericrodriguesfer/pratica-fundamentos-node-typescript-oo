import ISexo from '../../interfaces/types/ISexo';

abstract class Animal {
  name: string;

  especie: 'Lion' | 'Alligator' | 'Leopard' | 'Fox';

  sexo: ISexo;

  age: number;

  weight: number;

  constructor({ name, especie, sexo, age, weight }: Animal) {
    this.name = name;
    this.especie = especie;
    this.sexo = sexo;
    this.age = age;
    this.weight = weight;
  }
}

export default Animal;
