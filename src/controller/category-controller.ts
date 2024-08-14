import Categoryrepository from "../repository/category-repository";
import IResponseError from "../interface/response/iresponseerror";
import IResponseSuccess from "../interface/response/iresponsesuccess";
import {Request, Response} from "express";

export default class Categorycontroller {
    async getCategory(req: Request, res: Response) {
        try {
            const category = new Categoryrepository
            const result = await category.getCategory()
            const response: IResponseSuccess = {
                message: 'success',
                data: result
            }
            return res.status(200).json(response)
        } catch (error) {
            const response: IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(400).json(response)
        }
    }

    async createCategory(req: Request, res: Response) {
        try {
            const category = new Categoryrepository
            const result = await category.create(req.body)
            const response: IResponseSuccess = {
                message: 'success',
                data: result
            }
            return res.status(200).json(response)
        } catch (error) {
            const response: IResponseError = {
                message: 'error',
                error: error
            }
            return res.status(400).json(response)
        }
    }

}