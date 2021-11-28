import Animal from '../models/abstract/Animal';
import Alligator from '../models/Alligator';
import Fox from '../models/Fox';
import Leopard from '../models/Leopard';
import Lion from '../models/Lion';
import CreateAlligatorDTO from '../interfaces/dto/CreateAlligatorDTO';
import CreateFoxDTO from '../interfaces/dto/CreateFoxDTO';
import CreateLeopardDTO from '../interfaces/dto/CreateLeopardDTO';
import CreateLionDTO from '../interfaces/dto/CreateLionDTO';
import IQuantityForSpecie from '../interfaces/types/IQuantityForSpecie';
import UpdateAlligatorDTO from '../interfaces/dto/UpdateAlligatorDTO';
import UpdateFoxDTO from '../interfaces/dto/UpdateFoxDTO';
import UpdateLeopardDTO from '../interfaces/dto/UpdateLeopardDTO';
import UpdateLionDTO from '../interfaces/dto/UpdateLionDTO';
import DeleteAnimalIndexDTO from '../interfaces/dto/DeleteAnimalIndexDTO';

class AnimalsRepository {
  private animals: Array<Animal>;

  constructor() {
    this.animals = [];
  }

  public listAll(): Array<Animal> {
    return this.animals;
  }

  public findByName(name: string): boolean {
    let find: boolean = false;

    this.animals.forEach(animal => {
      if (animal.name === name) {
        find = true;
      }
    });

    return find;
  }

  public getIndexAnimalByName(name: string): number {
    let indexAnimal: number = -1;

    this.animals.forEach((animal, index) => {
      if (animal.name === name) {
        indexAnimal = index;
      }
    });

    return indexAnimal;
  }

  public getQuantity(): IQuantityForSpecie {
    const quantity: IQuantityForSpecie = this.animals.reduce(
      (acomulator: IQuantityForSpecie, animal: Animal) => {
        switch (animal.especie) {
          case 'Alligator':
            acomulator.alligator++;
            acomulator.total++;

            break;
          case 'Fox':
            acomulator.fox++;
            acomulator.total++;

            break;
          case 'Leopard':
            acomulator.leopard++;
            acomulator.total++;

            break;
          case 'Lion':
            acomulator.lions++;
            acomulator.total++;

            break;
          default:
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
    teethQuantity,
  }: CreateAlligatorDTO): Alligator {
    const animal: Alligator = new Alligator({
      name,
      especie,
      sexo,
      age,
      weight,
      teethQuantity,
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
  }: CreateFoxDTO): Fox {
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
    maxVelocity,
  }: CreateLeopardDTO): Leopard {
    const animal: Leopard = new Leopard({
      name,
      especie,
      sexo,
      age,
      weight,
      maxVelocity,
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
  }: CreateLionDTO): Lion {
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

  public updateAlligator(
    { name, sexo, age, weight, teethQuantity }: UpdateAlligatorDTO,
    index: number,
  ): Alligator {
    this.animals[index] = {
      name: name,
      especie: this.animals[index].especie,
      sexo: sexo,
      age: age,
      weight: weight,
      teethQuantity: teethQuantity,
    } as Alligator;

    return this.animals[index] as Alligator;
  }

  public updateFox(
    { name, sexo, age, weight, coat }: UpdateFoxDTO,
    index: number,
  ): Fox {
    this.animals[index] = {
      name: name,
      especie: this.animals[index].especie,
      sexo: sexo,
      age: age,
      weight: weight,
      coat: coat,
    } as Fox;

    return this.animals[index] as Fox;
  }

  public updateLeopard(
    { name, sexo, age, weight, maxVelocity }: UpdateLeopardDTO,
    index: number,
  ): Leopard {
    this.animals[index] = {
      name: name,
      especie: this.animals[index].especie,
      sexo: sexo,
      age: age,
      weight: weight,
      maxVelocity: maxVelocity,
    } as Leopard;

    return this.animals[index] as Leopard;
  }

  public updateLion(
    { name, sexo, age, weight, mane }: UpdateLionDTO,
    index: number,
  ): Lion {
    this.animals[index] = {
      name: name,
      especie: this.animals[index].especie,
      sexo: sexo,
      age: age,
      weight: weight,
      mane,
    } as Lion;

    return this.animals[index] as Lion;
  }

  public delelte({ index }: DeleteAnimalIndexDTO): boolean {
    try {
      this.animals.splice(index, 1);

      return true;
    } catch (err) {
      return false;
    }
  }
}

export default AnimalsRepository;
