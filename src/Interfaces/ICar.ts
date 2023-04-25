interface ICar {
  _id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number
}

// interface ICarResponse extends ICar {
//   id: string // se nao passar colocar como opcional na interface ICar
// }

// export { ICarResponse };
export default ICar;
