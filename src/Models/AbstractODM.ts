import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

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
}

export default AbstractODM;
