import { Router } from 'express';
import CarsControlller from '../Controllers/Cars.controller';
import validateRequiredFields from '../Middlewares/ValidateRequiredFields';
import CarsODM from '../Models/CarsODM';
import CarsService from '../Services/Cars.service';

const router = Router();

const carsODM = new CarsODM();
const carsService = new CarsService(carsODM);
const carsController = new CarsControlller(carsService);

router.post(
  '/', 
  validateRequiredFields('car'),
  carsController.register.bind(carsController),
);

export default router;