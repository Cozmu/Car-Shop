import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleODM from '../../../src/Models/MotorcyclesODM';
import MotorcyclesServices from '../../../src/Services/Motorcycles.service';
import ValidateCategoryMotorcycle from '../../../src/validations/ValidateCategoryMotorcycle';
import {
  // arrayMotorcycles, 
  requestNewMotorcycle,
  responseNewMotorcycle, 
} from './mocks/Motorcycles.mocks';

describe('SERVICE', function () {
  describe('TEST DA ROTA /motorcycles COM METODO POST', function () {
    it('Verifica se e possivel cadastrar um novo carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(responseNewMotorcycle);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.register(requestNewMotorcycle);
      expect(result).to.be.deep.equal({
        id: '644ab91194eec562d9f4bad0',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45,
        category: 'Street',
        engineCapacity: 600,
      });
    });
  });
});