import Product from '../../models/productModel.js';

export const deleteAllProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProducts = await Product.deleteMany({});
    console.log(deletedProducts);
    if (deletedProducts.deletedCount === 0) {
      res.status(404).json({ success: false, msg: 'No products to delete.' });
    } else {
      res.status(200).json({ success: true, msg: 'All products deleted.' });
    }
  } catch (err) {
    next(err);
  }
};
