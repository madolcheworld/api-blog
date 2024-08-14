import express from 'express';
import dotenv from 'dotenv';
import userrouter from './router/user-router';
dotenv.config();


const app = express();
const port = 3000;
app.use(express.json());

app.use('/users', userrouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
