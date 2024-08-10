import express from 'express';
import dotenv from 'dotenv';
import { connect } from './libs/database/database';
dotenv.config();
connect();
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
