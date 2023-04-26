import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  constructor(
    private carsODM: CarsODM,
  ) {}

  async register(newCar:ICar):Promise<Car> {
    const request = await this.carsODM.create(newCar);
    const result = new Car(request);
    return result;
  }

  async getById(id:string):Promise<Car> {
    const request = await this.carsODM.getById(id);
    const result = new Car(request);
    return result;
  }

  async getAll():Promise<Car[]> {
    const request = await this.carsODM.getAll();
    const result = request.map((e) => new Car(e));
    return result;
  }
}
 
export default CarsService;