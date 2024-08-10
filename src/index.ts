import express from 'express';
import dotenv from 'dotenv';
import { connection } from './libs/database/database';
dotenv.config();
const app = express();
const port = 3000;

console.log(process.env.DB_HOST);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
