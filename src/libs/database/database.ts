import mysql from 'mysql2/promise'

    const connection = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'riyanhafni05',
      database: process.env.DB_NAME || 'inventory',
    })

export default connection

