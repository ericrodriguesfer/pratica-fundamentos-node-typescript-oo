import { Router } from 'express';

import AnimalController from '../controllers/AnimalController';

const animals: Router = Router();
const animalController: AnimalController = new AnimalController();

animals.get('/', animalController.listAll);
animals.post('/alligator', animalController.createAlligator);
animals.put('/alligator/:name', animalController.updateAlligator);
animals.post('/fox', animalController.createFox);
animals.put('/fox/:name', animalController.updateFox);
animals.post('/leopard', animalController.createLeopard);
animals.put('/leopard/:name', animalController.updateLeopard);
animals.post('/lion', animalController.createLion);
animals.put('/lion/:name', animalController.updateLion);
animals.delete('/:name', animalController.delete);

export default animals;
