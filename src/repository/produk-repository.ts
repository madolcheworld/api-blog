import Produk from "../service/produk";
import IProduk from "../interface/db/iproduk";
export default class ProdukRepository{

    async getProduk() {
        const data = new Produk().read(['kategori.nama','sum(produk.stock) as total_stock'])
        .join('kategori')
        .on('produk.id_kategori','=','kategori.id')
        .groupBy('kategori.nama')
        .get()
        const [rows] = await data
        return rows
    }

    async createProduk(data: IProduk) {
        const [rows] = await new Produk().create(data)
        return rows
    }
}