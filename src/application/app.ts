import express from 'express';
import publicRouter from '../routes/public-route';
import ErrorMiddleware from '../middlewares/error-middleware';
const app = express();
app.use(express.json());
app.use('/api', publicRouter);
app.use(ErrorMiddleware);

export default app;