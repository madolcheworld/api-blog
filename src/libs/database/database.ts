import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const connect = async () => {
  await connection.getConnection();

  console.log('Database connected');
};

export const disconnect = async () => {
  await connection.end();
};

export const query = async (sql: string) => {
  const [rows] = await connection.query(sql);
  return rows;
};

export const queryOne = async (sql: string) => {
  const [rows] = await connection.query(sql);
  return rows[0];
};