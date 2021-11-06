import Animal from './abstract/Animal';

class Leopard extends Animal {
  maxVelocity: number;

  constructor({ name, especie, sexo, age, weight, maxVelocity }: Leopard) {
    super({ name, especie, sexo, age, weight });
    this.maxVelocity = maxVelocity;
  }
}

export default Leopard;
