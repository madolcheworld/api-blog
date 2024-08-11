import Produk from "../service/produk";
import IProduk from "../interface/db/iproduk";
export default class ProdukRepository{

    async getProduk() {
        const data = new Produk().read('*').get()
        const [rows] = await data
        return rows
    }

    async createProduk(data: IProduk | IProduk[]) {
        const [rows] = await new Produk().create(data)
        return rows
    }

    async updateProduk(id: number, data:{}) {
        const [rows] = await new Produk().updateById(id, data)
        return rows
    }
}