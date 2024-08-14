import Usercontroller from "../controller/user-controller";
import {Router} from "express";
import { userMiddleware } from "../middleware/db/user-middleware";
const router = Router();
const userController = new Usercontroller();
router.get('/', userController.getUser);
router.post('/create',userMiddleware, userController.createUser);
router.post('/login', userController.loginUser);
export default router