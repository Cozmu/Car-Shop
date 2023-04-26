import { NextFunction, Request, Response } from 'express';
import MotorcyclesServices from '../Services/Motorcycles.service';

class MotorcyclesController {
  constructor(
    private motorcyclesService: MotorcyclesServices,
  ) {}

  async register(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const result = await this.motorcyclesService.register(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);      
    }
  }

  async listById(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const { id } = req.params;
      const result = await this.motorcyclesService.getById(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async listAll(_req:Request, res:Response):Promise<Response> {
    const result = await this.motorcyclesService.getAll(); 
    return res.status(200).json(result);
  }

  async updateCar(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const { id } = req.params;
      const result = await this.motorcyclesService.update(id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default MotorcyclesController;