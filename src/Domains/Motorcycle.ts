import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category:'Street' | 'Custom' | 'Trail';
  private engineCapacity:number;

  constructor(MotorcycleDomain: IMotorcycle) {
    super(MotorcycleDomain);
    this.category = MotorcycleDomain.category;
    this.engineCapacity = MotorcycleDomain.engineCapacity;
  }
}

export default Motorcycle;