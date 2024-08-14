import Joi from 'joi';

export const userSchema = Joi.object({
    nama: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
}).options({ abortEarly: false })