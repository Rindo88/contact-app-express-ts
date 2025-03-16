import express from "express";
import UserController from "../controllers/user-controller";
const publicRouter = express.Router();

publicRouter.post('/api/users', UserController.register);
publicRouter.post('/api/users/login', UserController.login);

export default publicRouter;

