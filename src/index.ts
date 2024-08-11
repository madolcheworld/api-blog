import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import Userrouter from './router/user-router';

const app = express();
const port = 3000;
app.use(express.json());
app.use(Userrouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
