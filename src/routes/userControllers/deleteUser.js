import User from '../../models/userModel.js';
import Order from '../../models/ordersModel.js';
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    await Order.deleteMany({ _id: id });
    res
      .status(200)
      .json({ success: true, msg: 'User was delete.'});
  } catch (err) {
    next(err);
  }
};
