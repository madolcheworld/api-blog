import Joi from "joi";

const produkSchema = Joi.object({
    nama: Joi.string().required(),
    harga: Joi.number().required(),
    stock: Joi.string().required()
})

export default produkSchema