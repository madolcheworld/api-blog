import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userrouter from './router/user-router';
import { userSchema } from './validation/user-validation';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/users', userrouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
