import express from 'express';
import connectToDatabase from './libs/database/database';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;
connectToDatabase();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
