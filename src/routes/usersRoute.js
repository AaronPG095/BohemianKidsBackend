import { Router } from 'express';
import { userDataValidationMiddleware } from '../models/validation/userModelValidation.js';
import { resetPasswordValidationMiddleware } from '../models/validation/resetPasswordValidation.js';
import { getAllUsers } from './userControllers/getAllUsers.js';
import { getOneUser } from './userControllers/getOneUser.js';
import { loginUser } from './userControllers/loginUser.js';
import { registerUser } from './userControllers/registerUser.js';
import { logoutUser } from './userControllers/logoutUser.js';
import { verifyUserEmail } from './userControllers/verifyUserEmail.js';
import { deleteUser } from './userControllers/deleteUser.js';
import { deleteAllUsers } from './userControllers/deleteAllUsers.js';
import { forgotPasswordSendEmail } from './userControllers/forgotPasswordSendEmail.js';
import { resetUserPassword } from './userControllers/resetUserPassword.js';

import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { changePassword } from './userControllers/changePassword.js';
import { updateUser } from './userControllers/updateUser.js';
import { getAddressData } from './userControllers/getAddressData.js';
import { addProduct } from './productControllers/addProduct.js';
import { addMerchandiseOrEquipment } from './productControllers/addProductMerch.js';
import { uploadImage } from './userControllers/uploadImage.js';
import { updateUserCurrentCart } from './userControllers/updateUserCurrentCart.js';
import { getCurrentUserCart } from './userControllers/getCurrentUserCart.js';

// Account access information from CLOUDINARY
// STILL NEED ACCSSES DATA FROM CLOUDINARY.
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });
  return res;
}

const storage = new multer.memoryStorage();
const upload = multer({
  storage,
});

export const usersRoute = Router();

usersRoute.get('/getAllUsers', getAllUsers);
usersRoute.get('/user/:id', getOneUser);
usersRoute.delete('/deleteUser/:id', deleteUser);
usersRoute.delete('/deleteAllUsers', deleteAllUsers);
usersRoute.post('/login', loginUser);
usersRoute.post('/register', userDataValidationMiddleware, registerUser);
usersRoute.get('/logout', logoutUser);
usersRoute.put('/verify-email/', verifyUserEmail);
usersRoute.post('/forgot-password/', forgotPasswordSendEmail);
usersRoute.patch('/updateUser', updateUser);
usersRoute.patch('/updateUserCurrentCart', updateUserCurrentCart);
usersRoute.post('/getAddressData', getAddressData);
usersRoute.post('/getUserCurrentCart', getCurrentUserCart)
usersRoute.patch(
  '/reset-password/',
  resetPasswordValidationMiddleware,
  resetUserPassword
);
// PUT Change user password
usersRoute.patch(
  '/changePassword',
  resetPasswordValidationMiddleware,
  changePassword
);

usersRoute.post('/uploadImage', upload.single('image'), uploadImage);
usersRoute.post('/addProduct', addProduct);
usersRoute.post('/addMerch', addMerchandiseOrEquipment);
