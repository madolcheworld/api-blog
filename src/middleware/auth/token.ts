import jwt from 'jsonwebtoken'
import IResponseError  from '../../interface/response/iresponseerror'
import { Request, Response, NextFunction } from 'express'

export const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const excludedRoutes = ['/users/login', '/users/register']; // tambahkan route yang ingin dikecualikan

    if (excludedRoutes.includes(req.path)) {
      return next(); // jika route termasuk dalam daftar pengecualian, maka langsung panggil next()
    }

    try{
        const token = req.headers.authorization
        if(!token){
            const response: IResponseError = {
                message: 'error',
                error: 'token not found'
            }
            return res.status(400).json(response)
        }
        const tokenSplit = token.split(' ')
        const tokenValue = tokenSplit[1]
        const result = jwt.verify(tokenValue, process.env.SECRET_KEY as string)
        if(result){
            next()
        }
    }catch(error){
        const response: IResponseError = {
            message: 'error',
            error: error
        }
        return res.status(400).json(response)
    }
}
