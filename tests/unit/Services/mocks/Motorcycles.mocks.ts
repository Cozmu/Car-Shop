import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const requestNewMotorcycle: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const responseNewMotorcycle: IMotorcycle = {
  id: '644ab91194eec562d9f4bad0',
  ...requestNewMotorcycle,
};

const arrayMotorcycles: IMotorcycle[] = [
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
    model: 'Honda Cb 600f Hornet',
    year: 2014,
    color: 'Red',
    status: true,
    buyValue: 45,
    category: 'Street',
    engineCapacity: 600,
  },
];

export { arrayMotorcycles, requestNewMotorcycle, responseNewMotorcycle };