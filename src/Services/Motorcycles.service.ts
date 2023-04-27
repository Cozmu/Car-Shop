import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../errors/not-found-error';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import ValidateCategoryMotorcycle from '../validations/ValidateCategoryMotorcycle';

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found'; 

class MotorcyclesServices {
  constructor(
    private validateCategoryMotorcycle:ValidateCategoryMotorcycle,
    private motorcyclesODM:MotorcyclesODM,
  ) {}

  async register(newMotorcycle:IMotorcycle):Promise<Motorcycle> {
    this.validateCategoryMotorcycle.checkCategory(newMotorcycle.category);
    const request = await this.motorcyclesODM.create(newMotorcycle);
    const result = new Motorcycle(request);
    return result;
  }

  async getById(id:string):Promise<Motorcycle> {
    const request = await this.motorcyclesODM.getById(id);
    if (request === null) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    const result = new Motorcycle(request);
    return result;
  }

  async getAll():Promise<Motorcycle[]> {
    const request = await this.motorcyclesODM.getAll();
    const result = request.map((e) => new Motorcycle(e));
    return result;
  }

  async update(id:string, body:IMotorcycle):Promise<Motorcycle> {
    const request = await this.motorcyclesODM.update(id, body);
    if (request === null) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    const result = new Motorcycle(request as IMotorcycle);
    return result; 
  }

  async delete(id:string):Promise<IMotorcycle> {
    const request = await this.motorcyclesODM.delete(id);
    if (request === null) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    return request;
  }
}

export default MotorcyclesServices;