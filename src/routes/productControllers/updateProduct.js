import Product from '../../models/productModel.js';

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productToUpdate = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (productToUpdate === null) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find product with this id.' });
    } else {
      res.status(200).json({
        success: true,
        msg: 'Product updated successful.',
        product: productToUpdate,
      });
    }
  } catch (err) {
    next(err);
  }
};
