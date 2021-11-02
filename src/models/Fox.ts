import Animal from '../abstract/Animal';

class Fox extends Animal {
  coat: 'Blue' | 'Green' | 'Red' | 'Brown';

  constructor({ name, especie, sexo, age, weight, coat }: Fox) {
    super({ name, especie, sexo, age, weight });
    this.coat = coat;
  }
}

export default Fox;
