import User from '../../models/userModel.js';

export function getAddressData(req, res, next) {
  const { userId } = req.body;

  User.find({ _id: userId })
    .then((userData) => {
      if (!userData) {
        return res
          .status(404)
          .json({ success: false, msg: 'Could not find user data with id.' });
      }

      res.status(200).json({
        success: true,
        msg: 'User Address: ',
        userAddress: {
          city: userData[0].city,
          state: userData[0].state,
          country: userData[0].country,
          zipCode: userData[0].zipCode,
          address: userData[0].address,
          title: userData[0].title,
          lName: userData[0].lName,
          fName: userData[0].fName,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
}
