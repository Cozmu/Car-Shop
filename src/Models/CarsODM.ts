import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';
import InvalidFieldsError from '../errors/invalide-fields-error';
import NotFoundError from '../errors/not-found-error';

class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'cars');
  }

  async getById(id:string): Promise<ICar> {
    if (!isValidObjectId(id)) throw new InvalidFieldsError('Invalid mongo id');
    const request = await this.model.findById(id);
    if (request === null) throw new NotFoundError('Car not found');
    return request;
  }
}

export default CarsODM;