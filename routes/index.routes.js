import { Router } from "express";
import { createProducto,deleteProducto,updateProducto, getAllProductos, getProducto } from "../controllers/productos.controller.js";

const router = Router()

// ---------------------------------
//       CRUD de productos 
// ---------------------------------


// //crear 
router.post("/productos" , createProducto)

//Obtener un producto
router.delete("/productos/:pid" , deleteProducto)

//Actualizar un producto
router.put("/productos/:pid" , updateProducto  )


//Obtener un producto
router.get("/productos/:pid" , getProducto)


//0btener todos los productos 
router.get("/productos" , getAllProductos)






export default router