import express from "express";
import authMiddleware from "../middlewares/auth-middleware";
import UserController from "../controllers/user-controller";
import ContactController from "../controllers/contact-controller";
import AddressController from "../controllers/address-controller";
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
router.get('/api/contacts', ContactController.search);


// Address Routes
router.post('/api/contacts/:id(\\d+)/addresses', AddressController.create);
router.get('/api/contacts/:contact_id(\\d+)/addresses/:id(\\d+)', AddressController.get);
router.patch('/api/contacts/:contact_id(\\d+)/addresses/:id(\\d+)', AddressController.update);
router.delete('/api/contacts/:contact_id(\\d+)/addresses/:id(\\d+)', AddressController.delete)

export default router;