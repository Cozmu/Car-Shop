import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  constructor(
    private carsODM: CarsODM,
  ) {}

  async register(newCar:ICar):Promise<Car> {
    const result = await this.carsODM.create(newCar);
    const x = new Car(result);
    return x;
  }
}
 
export default CarsService;