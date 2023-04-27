import ICar from '../../../../src/Interfaces/ICar';

const requestNewCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const responseNewCar: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const arrayCars: ICar[] = [
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
];

export { arrayCars, responseNewCar, requestNewCar };