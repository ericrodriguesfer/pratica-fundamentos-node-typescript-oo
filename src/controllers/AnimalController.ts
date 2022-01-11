import { Request, Response } from 'express';
import IQuantityForSpecie from '../interfaces/types/IQuantityForSpecie';
import Animal from '../models/abstract/Animal';
import Alligator from '../models/Alligator';
import Fox from '../models/Fox';
import Leopard from '../models/Leopard';
import Lion from '../models/Lion';

import AnimalsRepository from '../repositories/AnimalsRepository';
import CreateAlligatorService from '../services/CreateAlligatorService';
import CreateFoxService from '../services/CreateFoxService';
import CreateLeopardService from '../services/CreateLeopardService';
import CreateLionService from '../services/CreateLionService';
import DeleteAnimalService from '../services/DeleteAnimalService';
import ListAllAnimalsService from '../services/ListAllAnimalsService';
import QuantityAnimalForSpecieService from '../services/QuantityAnimalForSpecieService';
import UpdateAlligatorService from '../services/UpdateAlligatorService';
import UpdateFoxService from '../services/UpdateFoxService';
import UpdateLeopardService from '../services/UpdateLeopardService';
import UpdateLionService from '../services/UpdateLionService';

const animalsRepository: AnimalsRepository = new AnimalsRepository();

class AnimalController {
  async listAll(request: Request, response: Response) {
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
  }

  async createAlligator(request: Request, response: Response) {
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
  }

  async updateAlligator(request: Request, response: Response) {
    try {
      const nameAlligator: string = request.params.name;
      const { name, sexo, age, weight, teethQuantity } = request.body;

      const updateAlligator: UpdateAlligatorService = new UpdateAlligatorService(
        animalsRepository,
      );

      const alligatorUpdated: Alligator = updateAlligator.execute(
        {
          name,
          sexo,
          age,
          weight,
          teethQuantity,
        },
        nameAlligator,
      );

      return response.json(alligatorUpdated);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  }

  async createFox(request: Request, response: Response) {
    try {
      const { name, especie, sexo, age, weight, coat } = request.body;

      const createFox: CreateFoxService = new CreateFoxService(
        animalsRepository,
      );

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
  }

  async updateFox(request: Request, response: Response) {
    try {
      const nameFox: string = request.params.name;
      const { name, sexo, age, weight, coat } = request.body;

      const updateFox: UpdateFoxService = new UpdateFoxService(
        animalsRepository,
      );

      const foxUpdated: Fox = updateFox.execute(
        {
          name,
          sexo,
          age,
          weight,
          coat,
        },
        nameFox,
      );

      return response.json(foxUpdated);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  }

  async createLeopard(request: Request, response: Response) {
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
  }

  async updateLeopard(request: Request, response: Response) {
    try {
      const nameLeopard: string = request.params.name;
      const { name, sexo, age, weight, maxVelocity } = request.body;

      const updateLeopard: UpdateLeopardService = new UpdateLeopardService(
        animalsRepository,
      );

      const leopardUpdated: Leopard = updateLeopard.execute(
        {
          name,
          sexo,
          age,
          weight,
          maxVelocity,
        },
        nameLeopard,
      );

      return response.json(leopardUpdated);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  }

  async createLion(request: Request, response: Response) {
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
  }

  async updateLion(request: Request, response: Response) {
    try {
      const nameLion: string = request.params.name;
      const { name, sexo, age, weight, mane } = request.body;

      const updateLion: UpdateLionService = new UpdateLionService(
        animalsRepository,
      );

      const lionUpdated: Lion = updateLion.execute(
        {
          name,
          sexo,
          age,
          weight,
          mane,
        },
        nameLion,
      );

      return response.json(lionUpdated);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const name: string = request.params.name;

      const deleteAnimal: DeleteAnimalService = new DeleteAnimalService(
        animalsRepository,
      );

      const result: boolean = deleteAnimal.execute({ name });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  }
}

export default AnimalController;
