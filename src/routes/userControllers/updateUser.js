import User from '../../models/userModel.js';

export const updateUser = async (req, res, next) => {
  try {
    const { address, country, zipCode, state, city, userId, title, fName, lName } = req.body;

    const userToUpdate = await User.findByIdAndUpdate(
      userId,
      {
        city: city,
        country: country,
        state: state,
        address: address,
        zipCode: zipCode,
        title: title,
        lName: lName,
        fName: fName
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      msg: 'Updated successfully',
      address: {
        city: userToUpdate.city,
        address: userToUpdate.address,
        state: userToUpdate.state,
        zipCode: userToUpdate.zipCode,
        country: userToUpdate.country,
        title: userToUpdate.title,
        fname: userToUpdate.fName,
        lName: userToUpdate.lName
      },
    });
  } catch (err) {
    next(err);
  }
};
