import Product from '../../models/productModel.js';

export const deleteProduct = async (req, res, next) => {
  try {
    const { id }= req.params;
    const productToDelete = await Product.deleteOne({ _id: id });
    res.status(200).json({success: true, msg:"Product was delete.", product: productToDelete})
  } catch (err) {
    next(err);
  }
};