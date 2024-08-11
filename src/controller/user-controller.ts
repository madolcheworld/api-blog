import {Request, Response} from 'express';
import Iuser from '../interface/db/iuser';
import Userrepository from '../repository/user-repository';
import IResponseError from '../interface/response/iresponseerror';
import IResponseSuccess from '../interface/response/iresponsesuccess';


export default class Usercontroller {
    async getUser(req: Request, res: Response) {
        try {
            const user = new Userrepository
            const result = await user.getUser()
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

    async createUser(req: Request, res: Response) {
        try {
            const user = new Userrepository
            const result = await user.create(req.body)
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
