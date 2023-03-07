import { handleUpload } from '../usersRoute.js';

// To Change
// STILL NEED ACCSSES DATA FROM CLOUDINARY

export const uploadImage = async (req, res, next) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
    const responseFromCloudinary = await handleUpload(dataURI);

    res.status(200).json({ success: true, url: responseFromCloudinary.url, msg: 'Image added.' });
  } catch (error) {
    res.send(error);
  }
};
