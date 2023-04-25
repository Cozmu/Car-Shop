import { Request, Response } from 'express';
import CarsService from '../Services/Cars.service';

class CarsControlller {
  constructor(
    private carsService: CarsService,
  ) {}

  async register(req:Request, res:Response):Promise<Response> {
    const result = await this.carsService.register(req.body);
    return res.status(201).json(result);
  }
}

export default CarsControlller;