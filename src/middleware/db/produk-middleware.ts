import produkSchema from "../../validation/produk-validation"; 
import IResponseError from "../../interface/response/iresponseerror";;
export default async function (req, res, next) {
    try {
        const {error} = await produkSchema.validate(req.body)
        if(error) {
            const response : IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(400).json(response)
        }
        next()
    } catch (error) {
        const response : IResponseError = {
            message: 'error',
            error: error
        }
        return res.status(500).json(response)
    }
}