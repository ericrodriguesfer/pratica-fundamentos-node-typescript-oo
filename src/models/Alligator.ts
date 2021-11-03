import Animal from '../abstract/Animal';

class Alligator extends Animal {
  teethQuantity: number;

  constructor({ name, especie, sexo, age, weight, teethQuantity }: Alligator) {
    super({ name, especie, sexo, age, weight });
    this.teethQuantity = teethQuantity;
  }
}

export default Alligator;
