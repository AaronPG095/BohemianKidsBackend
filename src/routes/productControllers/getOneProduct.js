import Product from '../../models/productModel.js';

export const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product === null) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find product with this id.' });
    } else {
      res.status(200).json({
        success: true,
        msg: `Product found.`,
        product: product,
      });
    }
  } catch (err) {
    next(err);
  }
};
