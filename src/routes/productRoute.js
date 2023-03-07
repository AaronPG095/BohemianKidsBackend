import { Router } from 'express';
import { addProduct } from './productControllers/addProduct.js';
import { deleteAllProducts } from './productControllers/deleteAllProducts.js';
import { deleteProduct } from './productControllers/deleteProduct.js';
import { getAllProducts } from './productControllers/getAllProducts.js';
import { getOneProduct } from './productControllers/getOneProduct.js';
import { updateProduct } from './productControllers/updateProduct.js';

export const productRoute = Router();

productRoute.get('/', getAllProducts);
productRoute.post('/addProduct', addProduct);
productRoute.get('/product/:id', getOneProduct)
productRoute.delete('/deleteProduct/:id', deleteProduct);
productRoute.patch('/updateProduct/:id', updateProduct)
productRoute.delete('/deleteAllProducts', deleteAllProducts)