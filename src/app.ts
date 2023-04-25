import express from 'express';
import CarsRouter from './Routers/Cars.router';

const app = express();
app.use(express.json());

app.use('/cars', CarsRouter);

export default app;
