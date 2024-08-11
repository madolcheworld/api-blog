import express from 'express';
import ProdukController from '../controller/produk-controller';
import produkMiddleware from '../middleware/db/produk-middleware';
const router = express.Router();
const controller = new ProdukController();

router.get('/produk', controller.getProduk);
router.post('/produk', produkMiddleware, controller.createProduk);
router.put('/produk/:id',controller.updateProduk);

export default router