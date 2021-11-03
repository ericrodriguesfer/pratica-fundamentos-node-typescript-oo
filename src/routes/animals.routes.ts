import { Router, Request, Response } from 'express';
import Animal from '../abstract/Animal';
import IQuantityForSpecie from '../interfaces/types/IQuantityForSpecie';
import Alligator from '../models/Alligator';
import Fox from '../models/Fox';
import Leopard from '../models/Leopard';
import Lion from '../models/Lion';

import AnimalsRepository from '../repositories/AnimalsRepository';
import CreateAlligatorService from '../services/CreateAlligatorService';
import CreateFoxService from '../services/CreateFoxService';
import CreateLeopardService from '../services/CreateLeopardService';
import CreateLionService from '../services/CreateLionService';
import ListAllAnimalsService from '../services/ListAllAnimalsService';
import QuantityAnimalForSpecieService from '../services/QuantityAnimalForSpecieService';

const animals: Router = Router();
const animalsRepository: AnimalsRepository = new AnimalsRepository();

animals.get('/', (request: Request, response: Response) => {
  try {
    const listAnimals: ListAllAnimalsService = new ListAllAnimalsService(
      animalsRepository,
    );

    const quantityAnimals: QuantityAnimalForSpecieService = new QuantityAnimalForSpecieService(
      animalsRepository,
    );

    const animalsList: Array<Animal> = listAnimals.execute();
    const quantity: IQuantityForSpecie = quantityAnimals.execute();

    return response.json({ animalsList, quantity });
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

animals.post('/alligator', (request: Request, response: Response) => {
  try {
    const { name, especie, sexo, age, weight, teethQuantity } = request.body;

    const createAlligator: CreateAlligatorService = new CreateAlligatorService(
      animalsRepository,
    );

    const alligator: Alligator = createAlligator.execute({
      name,
      especie,
      sexo,
      age,
      weight,
      teethQuantity,
    });

    return response.json(alligator);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

animals.post('/fox', (request: Request, response: Response) => {
  try {
    const { name, especie, sexo, age, weight, coat } = request.body;

    const createFox: CreateFoxService = new CreateFoxService(animalsRepository);

    const fox: Fox = createFox.execute({
      name,
      especie,
      sexo,
      age,
      weight,
      coat,
    });

    return response.json(fox);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

animals.post('/leopard', (request: Request, response: Response) => {
  try {
    const { name, especie, sexo, age, weight, maxVelocity } = request.body;

    const createLeopard: CreateLeopardService = new CreateLeopardService(
      animalsRepository,
    );

    const leopard: Leopard = createLeopard.execute({
      name,
      especie,
      sexo,
      age,
      weight,
      maxVelocity,
    });

    return response.json(leopard);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

animals.post('/lion', (request: Request, response: Response) => {
  try {
    const { name, especie, sexo, age, weight, mane } = request.body;

    const createLion: CreateLionService = new CreateLionService(
      animalsRepository,
    );

    const lion: Lion = createLion.execute({
      name,
      especie,
      sexo,
      age,
      weight,
      mane,
    });

    return response.json(lion);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

export default animals;
