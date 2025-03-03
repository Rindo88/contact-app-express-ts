import express from "express"
import UserController from "../controllers/user-controller";
const publicRouter = express.Router();
publicRouter.post('/users', UserController.register);
publicRouter.post('/users/login', UserController.login);


export default publicRouter;

