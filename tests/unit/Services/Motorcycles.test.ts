import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleODM from '../../../src/Models/MotorcyclesODM';
import MotorcyclesServices from '../../../src/Services/Motorcycles.service';
import ValidateCategoryMotorcycle from '../../../src/validations/ValidateCategoryMotorcycle';
import {
  arrayMotorcycles, 
  requestNewMotorcycle,
  responseNewMotorcycle, 
} from './mocks/Motorcycles.mocks';

const INVALID_MONGO_ID = 'Invalid mongo id'; 
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

describe('SERVICE', function () {
  describe('TEST DA ROTA /motorcycles COM METODO POST', function () {
    it('Verifica se e possivel cadastrar uma nova motocicleta com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(responseNewMotorcycle);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.register(requestNewMotorcycle);
      expect(result).to.be.deep.equal({
        id: '644ab91194eec562d9f4bad0',
        ...requestNewMotorcycle,
      });
    });
  });

  describe('TESTE DA ROTA /motorcycles COM METODO GET', function () {
    it('Verifica se e possivel buscar uma motocicleta pelo seu id com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(responseNewMotorcycle);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.getById('644ab91194eec562d9f4bad0');
      expect(result).to.be.deep.equal({
        id: '644ab91194eec562d9f4bad0',
        ...requestNewMotorcycle,
      });
    });

    it(`Verifica se ao buscar uma motocicleta com id invalido a messagem 
        'Invalid mongo id' e retornada`, async function () {
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.getById('xxxxxx');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONGO_ID); 
      }
    });
    
    it(`Verifica se ao buscar uma motocicleta com id inexistente no banco a messagem 
        'Motorcycle not found' e retornada`, async function () {
      sinon.stub(Model, 'findById').resolves(null);
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.getById('6348513f34c397abcad040b9');
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });

    it('Verifica se e possível listar todos as motocicletas com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(arrayMotorcycles);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.getAll();
      expect(result).to.be.deep.equal([
        {
          id: '644ab9e394eec562d9f4bad2',
          model: 'Honda Cb 1000',
          year: 2014,
          color: 'Black',
          status: true,
          buyValue: 15,
          category: 'Trail',
          engineCapacity: 430,
        },
        {
          id: '644ab91194eec562d9f4bad0',
          ...requestNewMotorcycle,
        },
      ]);
    });
  });

  describe('TESTE DA ROTA /motorcycles COM METODO PUT', function () {
    it(`Verifica se ao tentar atualizar uma motocicleta com id inexistente no banco a messagem 
        'Motorcycle not found' e retornada`, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.update('644ab91194eec562d9f4bad1', requestNewMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });

    it(`Verifica se ao tentar atualizar uma motocicleta com id invalido a messagem 
    'Invalid mongo id' e retornada`, async function () {
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.update('xxxxx', requestNewMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONGO_ID);
      }
    });

    it('Verifica se e possivel atualizar uma motocicleta com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(responseNewMotorcycle);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.update('644ab91194eec562d9f4bad0', requestNewMotorcycle);
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

  describe('TESTE DA ROTA /motorcycles COM METODO DELETE', function () {
    it(`Verifica se ao tentar deletar uma motocicleta com id inexistente no banco a messagem 
        'Motorcycle not found' e retornada`, async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.delete('644ab91194eec562d9f4bad1');
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });

    it(`Verifica se ao tentar deletar uma motocicleta com id invalido a messagem 
    'Invalid mongo id' e retornada`, async function () {
      try {
        const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
        const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
        await service.delete('xxxxx');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONGO_ID);
      }
    });

    it('Verifica se e possivel deletar uma motocicleta com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(responseNewMotorcycle);
      const validateCategoryMotorcycle = new ValidateCategoryMotorcycle();
      const service = new MotorcyclesServices(validateCategoryMotorcycle, new MotorcycleODM());
      const result = await service.delete('644ab91194eec562d9f4bad0');
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

  afterEach(function () {
    sinon.restore();
  }); 
});