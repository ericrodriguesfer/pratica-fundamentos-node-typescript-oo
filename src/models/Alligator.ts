import Animal from '../abstract/Animal';

class Alligator extends Animal {
  teeth_quantity: number;

  constructor({ name, especie, sexo, age, weight, teeth_quantity }: Alligator) {
    super({ name, especie, sexo, age, weight });
    this.teeth_quantity = teeth_quantity;
  }
}

export default Alligator;
