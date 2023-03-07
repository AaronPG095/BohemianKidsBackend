import User from '../../models/userModel.js';
export function getCurrentUserCart(req, res, next) {
  const { userId } = req.body;

  User.findById({ _id: userId })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ success: false, msg: 'User does not exist.' });
      }
      res.status(200).json({
        success: true,
        msg: 'CurrentCart: ',
        currentCart: user.currentCart,
      });
    })
    .catch((err) => {
      next(err);
    });
}
