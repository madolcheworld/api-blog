import Produk from "../service/produk";
import IProduk from "../interface/db/iproduk";
export default class ProdukRepository{

    async getProduk() {
        const [rows] = await new Produk().read()
        return rows
    }

    async createProduk(data: IProduk) {
        const [rows] = await new Produk().create(data)
        return rows
    }
}