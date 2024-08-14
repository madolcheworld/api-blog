import User from "../service/user";
import Iuser from "../interface/db/iuser";
import Bcrypt from 'bcrypt';
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

    async loginUser(username: string, password: string) {
        const user = new User()
        const [result] = await user.read('*').where('username',"=",username).get()
    return result
    }

    
}