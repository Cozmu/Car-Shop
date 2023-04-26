import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(CarDomain: ICar) {
    super(CarDomain);
    this.doorsQty = CarDomain.doorsQty;
    this.seatsQty = CarDomain.seatsQty;
  }
}

export default Car;