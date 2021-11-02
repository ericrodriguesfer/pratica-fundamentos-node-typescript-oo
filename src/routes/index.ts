import { Router } from 'express';
import animalsRouter from './animals.routes';

const routes: Router = Router();

routes.use('/animals', animalsRouter);

export default routes;
