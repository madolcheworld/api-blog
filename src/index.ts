import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import ProdukRouter from './router/produk-router';
const app = express();
const port = 3000;
app.use(express.json());
app.use(ProdukRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
