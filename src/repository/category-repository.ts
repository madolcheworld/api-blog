import Category from "../service/category";
import Icategory from "../interface/db/icategory";

export default class Categoryrepository {
    async create(data: Icategory) {
        const category = new Category()
        return await category.create(data)
    }

    async getCategory(){
        const category = new Category()
        const [result] = await category.read('*').get()
        return result
    }

    async updateById(id: number, data: Icategory) {
        const category = new Category()
        return await category.updateById(id, data)
    }
}
