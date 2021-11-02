import Animal from '../abstract/Animal';

class Leopard extends Animal {
  max_velocity: number;

  constructor({ name, especie, sexo, age, weight, max_velocity }: Leopard) {
    super({ name, especie, sexo, age, weight });
    this.max_velocity = max_velocity;
  }
}

export default Leopard;
