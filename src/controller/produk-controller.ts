import ProdukRepository from "../repository/produk-repository";
import {Request, Response} from "express";
import IResponseError from "../interface/response/iresponseerror";
import IResponseSuccess from "../interface/response/iresponsesuccess";
export default class ProdukController {
    async getProduk(req : Request, res : Response) {
        try {
            
            const data = await new ProdukRepository().getProduk()
            const response : IResponseSuccess = {
                message: 'success',
                data: data
            }
            return res.status(200).json(response)
        } catch (error) {
            const response : IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(500).json(response)
        }
    }

    async createProduk(req : Request, res : Response) {
        try {
            const data = req.body
            const result = await new ProdukRepository().createProduk(data)
            const response : IResponseSuccess = {
                message: 'success',
                data: result
            }
            return res.status(200).json(response)
        } catch (error) {
            const response : IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(500).json(response)
        }
    }

    async updateProduk(req : Request, res : Response) {
        try {
            const id = req.params.id
            const data = req.body
            const result = await new ProdukRepository().updateProduk(id, data)
            const response : IResponseSuccess = {
                message: 'success',
                data: result
            }
            return res.status(200).json(response)
        } catch (error) {
            const response : IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(500).json(response)
        }
    }
}