import User from "../service/user";
import Iuser from "../interface/db/iuser";
export default class Userrepository {
    async create(data: Iuser) {
        const user = new User()
        return await user.create(data)
    }

    async getUser(){
        const user = new User()
        const [result] = await user.read('*').get()
        return result
    }

    async userLogin(username: string, password: string) {
        const user = new User()
        const [result] = await user.read('*').where(username,"=",password).get()
        return result
    }

    
}