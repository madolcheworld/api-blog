"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var produk_controller_1 = __importDefault(require("../controller/produk-controller"));
var produk_middleware_1 = __importDefault(require("../middleware/db/produk-middleware"));
var router = express_1.default.Router();
var controller = new produk_controller_1.default();
router.get('/produk', controller.getProduk);
router.post('/produk', produk_middleware_1.default, controller.createProduk);
router.put('/produk/:id', controller.updateProduk);
exports.default = router;
//# sourceMappingURL=produk-router.js.map