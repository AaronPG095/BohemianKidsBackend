import { Router } from 'express';
import { addOrder } from '../orderControllers/addOrder.js';
import { getOrders } from '../orderControllers/getOrders.js';

export const orderRoute = Router();

orderRoute.post('/addOrder', addOrder);
orderRoute.post('/getOrders', getOrders);
