import Connection from "../config/db";
import IProduk from "../interface/db/iproduk";
export default class Crud {
    private connection;
    private tableName: string
    query: string 
    constructor(tableName: string) {
        this.connection = Connection
        this.tableName = tableName
        
    }

    async create(data: IProduk) {
        const query = `INSERT INTO ${this.tableName} SET ?`
        const result = await this.connection.query(query, data)
        return result
    }


    read(filed?: string | string[]) {
        if (typeof filed === 'string') {
            this.query = `SELECT ${filed} FROM ${this.tableName}`
        } else {
            const fileds = filed.join(', ')
            this.query = `SELECT ${fileds} FROM ${this.tableName}`
        }
        return this
    }

    join(table: string) {
        this.query += ` JOIN ${table}`
        return this
    }

    leftJoin(table: string) {
        this.query += ` LEFT JOIN ${table}`
        return this
    }

    rightJoin(table: string) {
        this.query += ` RIGHT JOIN ${table}`
        return this
    }

    on (field: string, operator: string, value: string) {
        this.query += ` ON ${field} ${operator} ${value}`
        return this
    }

    where(field: string, operator: string, value: string) {
        this.query += ` WHERE ${field} ${operator} "${value}"`
        return this
    }

    groupBy(field: string) {
        this.query += ` GROUP BY ${field}`
        return this
    }

    asc(field: string) {
        this.query += ` ORDER BY ${field} ASC`
        return this
    }

    desc(field: string) {
        this.query += ` ORDER BY ${field} DESC`
        return this
    }

    get() {
        return this.connection.query(this.query)
    }

    

}
