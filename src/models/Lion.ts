import Animal from './abstract/Animal';

class Lion extends Animal {
  mane: boolean;

  constructor({ name, especie, sexo, age, weight, mane }: Lion) {
    super({ name, especie, sexo, age, weight });
    this.mane = mane;
  }
}

export default Lion;
