import express from 'express';
import errorMiddleware from './Middlewares/erro-middleware';
import CarsRouter from './Routers/Cars.router';
import MotorcyclesRouter from './Routers/Motorcycles.router';

const app = express();
app.use(express.json());

app.use('/motorcycles', MotorcyclesRouter);
app.use('/cars', CarsRouter);
app.use(errorMiddleware);

export default app;
