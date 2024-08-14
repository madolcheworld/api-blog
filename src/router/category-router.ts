import Categorycontroller from "../controller/category-controller";
import {Router} from "express";
const router = Router();
const categoryController = new Categorycontroller();
router.get('/', categoryController.getCategory);
router.post('/create', categoryController.createCategory);
router.put('/update/:id', categoryController.updateCategory);
export default router