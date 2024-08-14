import Usercontroller from "../controller/user-controller";
import {Router} from "express";

const router = Router();
const userController = new Usercontroller();
router.get('/users', userController.getUser);
router.post('/users', userController.createUser);
export default router