import Connection from "../database/database";
class Base {
    connection: any
    table: string
   constructor(table:string) {
   this.connection = Connection
   this.table = table
    }

    async getAll() {
        const [rows] = await this.connection.query(`SELECT * FROM ${this.table}`)
        return rows
    }

   async create(data:any) {
       const { insertId } = await this.connection.query(`INSERT INTO ${this.table} SET ?`, [data])
       return insertId
   }

}

export default Base
