import { userSchema } from "../../validation/user-validation";
import {Response, Request, NextFunction} from "express";
import IResponseError from "../../interface/response/iresponseerror";
export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = userSchema.validate(req.body)
    if(error) {
       
        const response: IResponseError = {
            message: 'error',
            error: error.details
        }
        return res.status(400).json(response)
    }
    next()
}
