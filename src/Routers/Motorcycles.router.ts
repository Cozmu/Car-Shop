import { Router } from 'express';
import MotorcyclesController from '../Controllers/Motorcycles.controller';
import validateRequiredFields from '../validations/ValidateRequiredFields';
import MotorcycleODM from '../Models/MotorcyclesODM';
import MotorcyclesServices from '../Services/Motorcycles.service';
import ValidateCategoryMotorcycle from '../validations/ValidateCategoryMotorcycle';

const router = Router();

const motorcyclesODM = new MotorcycleODM();
const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
const motorcyclesService = new MotorcyclesServices(validateCategoryMotorcycle, motorcyclesODM);
const motorcyclesController = new MotorcyclesController(motorcyclesService);

router.get('/:id', motorcyclesController.listById.bind(motorcyclesController));
router.get('/', motorcyclesController.listAll.bind(motorcyclesController));
router.post(
  '/',
  validateRequiredFields('motorcycle'),
  motorcyclesController.register.bind(motorcyclesController),
);
router.put('/:id', motorcyclesController.updateCar.bind(motorcyclesController));

export default router;
