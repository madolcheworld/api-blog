import {Request, Response} from 'express';
import Iuser from '../interface/db/iuser';
import Userrepository from '../repository/user-repository';
import IResponseError from '../interface/response/iresponseerror';
import IResponseSuccess from '../interface/response/iresponsesuccess';
import Bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
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
            const data: Iuser = {
                nama: req.body.nama,
                username: req.body.username,
                password: Bcrypt.hashSync(req.body.password, 10)
            }
            const result = await user.create(data)
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

    async loginUser(req: Request, res: Response) {
        try {
            const user = new Userrepository
            const result = await user.loginUser(req.body.username, req.body.password)
            const isLogin = Bcrypt.compareSync(req.body.password, result[0].password)
            if (!isLogin) {
                const response: IResponseError = {
                    message: 'error',
                    error: 'username or password invalid'
                }
                return res.status(400).json(response)
            }
            const token = Jwt.sign({
                id: result[0].id,
                nama: result[0].nama,
                username: result[0].username

            }, process.env.SECRET_KEY, { expiresIn: '1d' })
            

            const response: IResponseSuccess = {
                message: 'success',
                data: token
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
