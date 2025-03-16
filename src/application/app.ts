import express from 'express';
import publicRouter from '../routes/public-route';
import ErrorMiddleware from '../middlewares/error-middleware';
import router from '../routes/api-route';
import notFound from '../middlewares/not-found-middleware';

const app = express();

// middlewares for app
app.use(express.json());

// routes handler
app.use(publicRouter);
app.use(router);

// middleware for handling 404 Not Found
app.use(notFound);

// middleware for handling errors
app.use(ErrorMiddleware);

export default app;