import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/Cars.service';

class CarsControlller {
  constructor(
    private carsService: CarsService,
  ) {}

  async register(req:Request, res:Response):Promise<Response> {
    const result = await this.carsService.register(req.body);
    return res.status(201).json(result);
  }

  async listById(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const { id } = req.params;
      const result = await this.carsService.getById(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async listAll(_req:Request, res:Response):Promise<Response> {
    const result = await this.carsService.getAll(); 
    return res.status(200).json(result);
  }

  async updateCar(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const { id } = req.params;
      const result = await this.carsService.update(id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async deleteCar(req:Request, res:Response, next:NextFunction):Promise<Response | undefined> {
    try {
      const { id } = req.params;
      await this.carsService.delete(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default CarsControlller;