import express from "express";
import authMiddleware from "../middlewares/auth-middleware";
import UserController from "../controllers/user-controller";
import ContactController from "../controllers/contact-controller";
const router = express.Router();

router.use(authMiddleware);

// user routes
router.get('/api/users/current', UserController.get);
router.patch('/api/users/current', UserController.update);
router.delete('/api/users/current', UserController.logout);


// contact routes
router.post('/api/contacts', ContactController.create);
router.get('/api/contacts/:id(\\d+)', ContactController.get);
router.patch('/api/contacts/:id(\\d+)', ContactController.update);
router.delete('/api/contacts/:id(\\d+)', ContactController.delete);

export default router;