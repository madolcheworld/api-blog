import Kategori from "../service/kategori";

export default class KategoriRepository{
    async getKategori() {
        const data = new Kategori().read('*').get()
        const [rows] = await data
        return rows
    }
    
    async getKategoriById(id: string) {
        const data = new Kategori().read('*').where('id', '=', id).get()
        const [rows] = await data
        return rows
    }

    
}