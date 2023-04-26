import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined ;
  protected buyValue: number;

  constructor(VehicleDomain: IVehicle) {
    this.id = VehicleDomain.id;
    this.model = VehicleDomain.model;
    this.year = VehicleDomain.year;
    this.color = VehicleDomain.color;
    this.status = VehicleDomain.status || false;
    this.buyValue = VehicleDomain.buyValue;
  }
}

export default Vehicle;