import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import InvalidFieldsError from '../errors/invalide-fields-error';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema:Schema, modelName:string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async create(obj: T):Promise<T> {
    return this.model.create({ ...obj });
  }

  async getAll():Promise<T[]> {
    const result = await this.model.find();
    return result; 
  }

  async getById(id:string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new InvalidFieldsError('Invalid mongo id');
    const request = await this.model.findById(id);
    return request;
  }

  async update(_id:string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new InvalidFieldsError('Invalid mongo id');
    const request = await this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    return request;
  }
}

export default AbstractODM;
