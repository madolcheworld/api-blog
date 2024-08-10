import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connection from './libs/database/database';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

console.log(process.env.PASSWORD);

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
