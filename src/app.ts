import express from 'express';
import errorMiddleware from './Middlewares/erro-middleware';
import CarsRouter from './Routers/Cars.router';

const app = express();
app.use(express.json());

app.use('/cars', CarsRouter);
app.use(errorMiddleware);

export default app;
