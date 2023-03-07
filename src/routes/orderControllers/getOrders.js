import User from '../../models/userModel.js';
import Order from '../../models/ordersModel.js';
import Product from '../../models/productModel.js';
export async function getOrders(req, res, next) {
  try {
    const { userID } = req.body;
    const userOrders = [];
    const products = [];
    const orders = await Order.find({ userId: userID }).select(
      'price products orderDate'
    );

    res.status(200).json({
      success: true,
      msg: 'List of all orders: ',
      userOrders: orders.map((ele) => {
        return {
          orderDate: ele.orderDate,
          price: ele.price,
          products: ele.products.map((ele) => {
            return {
              name: ele.name,
              count: ele.count,
            };
          }),
        };
      }),
    });
  } catch (error) {
    next(error);
  }
}
