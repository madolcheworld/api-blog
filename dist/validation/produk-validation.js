"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var produkSchema = joi_1.default.object({
    nama: joi_1.default.string().required(),
    harga: joi_1.default.number().required(),
    stock: joi_1.default.string().required()
});
exports.default = produkSchema;
//# sourceMappingURL=produk-validation.js.map