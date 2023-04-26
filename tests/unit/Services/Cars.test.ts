import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarsODM from '../../../src/Models/CarsODM';
import CarsService from '../../../src/Services/Cars.service';
import { requestNewCar, responseNewCar } from './mocks/Cars.mocks';

describe('SERVICE - TESTE DA ROTA /cars COM METODO POST', function () {
  it('Verifica se e possivel cadastrar um novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(responseNewCar);
    const service = new CarsService(new CarsODM());
    const result = await service.register(requestNewCar);
    expect(result).to.be.deep.equal(responseNewCar);
  });

  // afterEach(function () {
  //   sinon.restore();
  // });
});