import mongoose from 'mongoose'


const options = {
    collection: 'muebles',
    strict:true, 

    collation: {
        locale:"es",
        strength:1
    }
}



const productoSchema = new mongoose.Schema({

    nombre: String,
    descripcion: String,
    fabricante: String

}, options)


export const Producto = mongoose.model('Producto', productoSchema)