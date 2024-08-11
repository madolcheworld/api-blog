import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import Produk from './libs/class/produk';
async function main() {
  const produk = new Produk();
  produk.create({ nama: 'buku', harga: 10000, stock: 10 });
  const rows = await produk.getAll();
  console.log(rows)
}
main();
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
