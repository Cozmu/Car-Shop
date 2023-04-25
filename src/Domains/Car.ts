import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined ;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(CarDomain: ICar) {
    this.id = CarDomain._id;
    this.model = CarDomain.model;
    this.year = CarDomain.year;
    this.color = CarDomain.color;
    this.status = CarDomain.status || false;
    this.buyValue = CarDomain.buyValue;
    this.doorsQty = CarDomain.doorsQty;
    this.seatsQty = CarDomain.seatsQty;
  }
}

export default Car;