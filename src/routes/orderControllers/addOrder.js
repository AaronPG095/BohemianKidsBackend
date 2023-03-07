import Order from '../../models/ordersModel.js';
import User from '../../models/userModel.js';

export async function addOrder(req, res, next) {
  const {
    products,
    price,
    userId,
    billingAddress,
    deliveryAddress,
    paymentMethod,
    paymentDetails,
    shippingMethod,
    orderDate,
  } = req.body;

  try {
    const newOrder = new Order({
      userId: userId,
      products: products,
      price: price,
      billingAddress: billingAddress,
      shippingMethod: shippingMethod,
      deliveryAddress: deliveryAddress,
      paymentMethod: paymentMethod,
      paymentDetails: paymentDetails,
      orderDate: orderDate,
    });

    const orderId = newOrder._id;

    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { orders: orderId } }
    );

    newOrder
      .save()
      .then((order) => {
        res.status(200).json({ order: order });
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}
