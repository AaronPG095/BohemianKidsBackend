import { Router } from 'express';
import { usersRoute } from './usersRoute.js';
import { homeRoute } from './homeRoute.js';
import { protectedRoute } from './protectedRouteTest.js';
import { orderRoute } from './userControllers/orderRoute.js';
import { productRoute } from './productRoute.js';
import { postRoute } from './postRoute.js';
import { googleRoute } from './googleAuthRoute.js';
import { facebookRoute } from './facebookAuthRoute.js';
import { authMiddleware } from '../../helperFunctions.js';

const routes = Router();

routes.use('/', homeRoute);
routes.use('/users', usersRoute);
routes.use('/protected', protectedRoute);
routes.use('/products', productRoute);
routes.use('/orders', orderRoute);
routes.use('/posts', postRoute);
routes.use('/auth/google', googleRoute);
routes.use('/auth/facebook', facebookRoute);

export default routes;
