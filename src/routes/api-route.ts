import express from "express"
import authMiddleware from "../middlewares/auth-middleware";
import UserController from "../controllers/user-controller";
const router = express.Router();
router.use(authMiddleware);

router.get('/users/current', UserController.get);

export default router;