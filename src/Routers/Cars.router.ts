import { Router } from 'express';
import validateRequiredFields from '../validations/ValidateRequiredFields';
import CarsControlller from '../Controllers/Cars.controller';
import CarsODM from '../Models/CarsODM';
import CarsService from '../Services/Cars.service';

const router = Router();

const carsODM = new CarsODM();
const carsService = new CarsService(carsODM);
const carsController = new CarsControlller(carsService);

router.get('/:id', carsController.listById.bind(carsController));
router.get('/', carsController.listAll.bind(carsController));
router.post(
  '/', 
  validateRequiredFields('car'),
  carsController.register.bind(carsController),
);
router.put('/:id', carsController.updateCar.bind(carsController));
router.delete('/:id', carsController.deleteCar.bind(carsController));

export default router;