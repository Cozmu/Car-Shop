import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarsODM from '../../../src/Models/CarsODM';
import CarsService from '../../../src/Services/Cars.service';
import { requestNewCar, responseNewCar, arrayCars } from './mocks/Cars.mocks';

describe('SERVICE', function () {
  describe('TESTE DA ROTA /cars COM METODO POST', function () {
    it('Verifica se e possivel cadastrar um novo carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(responseNewCar);
      const service = new CarsService(new CarsODM());
      const result = await service.register(requestNewCar);
      expect(result).to.be.deep.equal({ 
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5, 
      });
    });
  });

  describe('TESTE DA ROTA /cars COM METODO GET', function () {
    it('Verifica se e possivel buscar um carro pelo seu id com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(responseNewCar);
      const service = new CarsService(new CarsODM());
      const result = await service.getById('6348513f34c397abcad040b2');
      expect(result).to.be.deep.equal({ 
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5, 
      });
    });

    it(`Verifica se ao buscar um carro com id invalido a messagem 
        'Invalid mongo id' e retornada`, async function () {
      try {
        const service = new CarsService(new CarsODM());
        await service.getById('xxxxxx');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id'); 
      }
    });
    
    it(`Verifica se ao buscar um carro com id inexistente no banco a messagem 
        'Car not found' e retornada`, async function () {
      sinon.stub(Model, 'findById').resolves(null);
      try {
        const service = new CarsService(new CarsODM());
        await service.getById('6348513f34c397abcad040b9');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    it('Verifica se e possível listar todos os carros com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(arrayCars);
      const service = new CarsService(new CarsODM());
      const result = await service.getAll();
      expect(result).to.be.deep.equal([
        {
          id: '6348513f34c397abcad040b2',
          model: 'Marea',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 15.990,
          doorsQty: 4,
          seatsQty: 5,
        },
        {
          id: '644ab46b94eec562d9f4bace',
          model: 'Monza',
          year: 1999,
          color: 'Red',
          status: true,
          buyValue: 25.000,
          doorsQty: 2,
          seatsQty: 5,
        },
      ]);
    });
  });

  describe('TESTE DA ROTA /cars COM METODO PUT', function () {
    it(`Verifica se ao tentar atualizar um carro com id inexistente no banco a messagem 
        'Car not found' e retornada`, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      try {
        const service = new CarsService(new CarsODM());
        await service.update('6348513f34c397abcad040b1', requestNewCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    it(`Verifica se ao tentar atualizar um carro com id invalido a messagem 
    'Invalid mongo id' e retornada`, async function () {
      try {
        const service = new CarsService(new CarsODM());
        await service.update('xxxxx', requestNewCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Verifica se e possivel atualizar um carro com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(responseNewCar);
      const service = new CarsService(new CarsODM());
      const result = await service.update('6348513f34c397abcad040b2', requestNewCar);
      expect(result).to.be.deep.equal({
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      });
    });
  });

  afterEach(function () {
    sinon.restore();
  });  
});
