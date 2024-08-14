import Crud from "./crud";
import Icategory from "../interface/db/icategory";
export default class Category extends Crud<Icategory> {
    constructor() {
        super('categories')
    }
}