import Car from '../Domains/Car';
import NotFoundError from '../errors/not-found-error';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

const CAR_NOT_FOUND = 'Car not found';

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
    if (request === null) throw new NotFoundError(CAR_NOT_FOUND);
    const result = new Car(request);
    return result;
  }

  async getAll():Promise<Car[]> {
    const request = await this.carsODM.getAll();
    const result = request.map((e) => new Car(e));
    return result;
  }

  async update(id:string, body:ICar):Promise<Car> {
    const request = await this.carsODM.update(id, body);
    if (request === null) throw new NotFoundError(CAR_NOT_FOUND);
    const result = new Car(request as ICar);
    return result; 
  }

  async delete(id:string):Promise<ICar> {
    const request = await this.carsODM.delete(id);
    if (request === null) throw new NotFoundError(CAR_NOT_FOUND);
    return request;
  }
}
 
export default CarsService;