import Kategori from "../service/kategori";

export default class KategoriRepository{
    async getKategori() {
        const data = new Kategori().read('*').get()
        const [rows] = await data
        return rows
    }
}