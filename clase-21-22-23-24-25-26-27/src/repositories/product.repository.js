import database_pool from "../db/configMysql.js";
import Product from "../models/product.model.js";
/* 
class ProductRepository{
    static async getProducts(){
        //Obtener lista productos activos
        return Product.find({active: true})
    }

    static async getProductById(id){
        return Product.findById(id)
    }

    static async createProduct(product_data){
        const new_product = new Product(product_data)
        return new_product.save()
    }

    static async updateProduct(id, new_product_data){
        return Product.findByIdAndUpdate(id, new_product_data, {new: true})
    }

    static  async deleteProduct(id){
        return Product.findByIdAndUpdate(id, {active: false}, {new: true})
    }
} */

class ProductRepository {
    static async getProducts(){
        //SELECT * FROM products WHERE active = true
        const query = 'SELECT * FROM products WHERE active = true'
        const result = await database_pool.execute(query) 
        //Esto devuelve un array con 2 valores
        //el primer valor es el resultado o las rows / filas / registros
        //El segundo valor son las columns
        console.log(result)
    }
}

export default ProductRepository