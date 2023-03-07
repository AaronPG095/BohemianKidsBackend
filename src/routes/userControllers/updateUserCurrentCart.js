import User from '../../models/userModel.js';

export const updateUserCurrentCart = async (req, res, next) => {
  try {
    const { products, userId } = req.body;

    const userToUpdate = await User.findByIdAndUpdate(
      { _id: userId },
      {
        currentCart: products,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      msg: 'Cart Updated successfully',
    });
  } catch (err) {
    next(err);
  }
};
