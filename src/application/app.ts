import express from 'express';
import publicRouter from '../routes/public-route';
import ErrorMiddleware from '../middlewares/error-middleware';
import router from '../routes/api-route';

const app = express();

// middlewares for app
app.use(express.json());

// routes handdler
app.use('/api', publicRouter);
app.use('/api', router);

// middlewares for app
app.use(ErrorMiddleware);

export default app;