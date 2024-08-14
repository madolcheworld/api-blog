import Usercontroller from "../controller/user-controller";
import {Router} from "express";

const router = Router();
const userController = new Usercontroller();
router.get('/', userController.getUser);
router.post('/create', userController.createUser);
export default router