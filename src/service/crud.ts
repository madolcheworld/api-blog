import Connection from "../config/db";
import IProduk from "../interface/db/iproduk";
export default class Crud {
    private connection;
    private tableName: string
    constructor(tableName: string) {
        this.connection = Connection
        this.tableName = tableName
    }

    async create(data: IProduk) {
        const query = `INSERT INTO ${this.tableName} SET ?`
        const result = await this.connection.query(query, data)
        return result
    }

    async read() {
        const query = `SELECT * FROM ${this.tableName}`
        const result = await this.connection.query(query)
        return result
    }
}