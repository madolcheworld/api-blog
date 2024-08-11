import Crud from "./crud";
import Iuser from "../interface/db/iuser";
export default class User extends Crud<Iuser> {
    constructor() {
        super('users')
    }
}