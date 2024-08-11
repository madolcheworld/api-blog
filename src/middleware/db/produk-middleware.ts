import produkSchema from "../../validation/produk-validation"; 
import IResponseError from "../../interface/response/iresponseerror";;
export default async function (req, res, next) {
    try {
        if(Array.isArray(req.body)) {
            for (const data of req.body) {
                const {error} = await produkSchema.validate(data);
                if (error) {
                    const response: IResponseError = {
                        message: 'error',
                        error: error,
                    };
                    return res.status(400).json(response);
                }
            }
        } else {
            const { error } = await produkSchema.validate(req.body);
            if (error) {
                const response: IResponseError = {
                    message: 'error',
                    error: error,
                };
                return res.status(400).json(response);
            }
        }
        next();
    } catch (error) {
        const response: IResponseError = {
            message: 'error',
            error: error,
        };
        return res.status(500).json(response);
    }
}