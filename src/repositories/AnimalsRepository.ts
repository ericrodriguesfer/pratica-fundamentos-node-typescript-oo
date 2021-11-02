import Animal from '../abstract/Animal';
import Alligator from '../models/Alligator';
import Fox from '../models/Fox';
import Leopard from '../models/Leopard';
import Lion from '../models/Lion';
import createAlligatorDTO from '../interfaces/dto/createAlligatorDTO';
import createFoxDTO from '../interfaces/dto/createFoxDTO';
import createLeopardDTO from '../interfaces/dto/createLeopardDTO';
import createLionDTO from '../interfaces/dto/createLionDTO';
import IQuantityForSpecie from '../interfaces/types/IQuantityForSpecie';

class AnimalsRepository {
  private animals: Array<Animal>;

  constructor() {
    this.animals = [];
  }

  public listAll(): Array<Animal> {
    return this.animals;
  }

  public findByName(name: string): boolean {
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[i].name === name) {
        return true;
      }
    }

    return false;
  }

  public getQuantity(): IQuantityForSpecie {
    const quantity: IQuantityForSpecie = this.animals.reduce(
      (acomulator: IQuantityForSpecie, animal: Animal) => {
        switch (animal.especie) {
          case 'Alligator':
            {
              acomulator.alligator++;
              acomulator.total++;
            }
            break;
          case 'Fox':
            {
              acomulator.fox++;
              acomulator.total++;
            }
            break;
          case 'Leopard':
            {
              acomulator.leopard++;
              acomulator.total++;
            }
            break;
          case 'Lion':
            {
              acomulator.lions++;
              acomulator.total++;
            }
            break;
        }

        return acomulator;
      },
      {
        alligator: 0,
        fox: 0,
        leopard: 0,
        lions: 0,
        total: 0,
      },
    );

    return quantity;
  }

  public createAlligator({
    name,
    especie,
    sexo,
    age,
    weight,
    teeth_quantity,
  }: createAlligatorDTO): Alligator {
    const animal: Alligator = new Alligator({
      name,
      especie,
      sexo,
      age,
      weight,
      teeth_quantity,
    });

    this.animals.push(animal);

    return animal;
  }

  public createFox({
    name,
    especie,
    sexo,
    age,
    weight,
    coat,
  }: createFoxDTO): Fox {
    const animal: Fox = new Fox({
      name,
      especie,
      sexo,
      age,
      weight,
      coat,
    });

    this.animals.push(animal);

    return animal;
  }

  public createLeopard({
    name,
    especie,
    sexo,
    age,
    weight,
    max_velocity,
  }: createLeopardDTO): Leopard {
    const animal: Leopard = new Leopard({
      name,
      especie,
      sexo,
      age,
      weight,
      max_velocity,
    });

    this.animals.push(animal);

    return animal;
  }

  public createLion({
    name,
    especie,
    sexo,
    age,
    weight,
    mane,
  }: createLionDTO): Lion {
    const animal: Lion = new Lion({
      name,
      especie,
      sexo,
      age,
      weight,
      mane,
    });

    this.animals.push(animal);

    return animal;
  }
}

export default AnimalsRepository;
