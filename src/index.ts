import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userrouter from './router/user-router';
import { userSchema } from './validation/user-validation';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/users', userrouter)
app.get('/test', (req, res) => {
  const data = {
    nama : 1,
    username : 1,
    password : 2
  }
  const {error} = userSchema.validate(data)
  if(error) {
    
  return res.status(400).json(error.message)
  }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
