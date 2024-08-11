import Crud from "./crud";

export default class User extends Crud {
    constructor() {
        super('users')
    }
}