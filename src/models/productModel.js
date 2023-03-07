import { model, Schema } from 'mongoose';
import Order from './ordersModel.js';

const productSchema = new Schema({
  name: { type: String, minLength: 3, required: true },
  description: { type: String, minLength: 3, required: true },
  type: { type: String },
  weight: { type: Number },
  price: { type: Number, minLength: 1, min: 0 },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
});

const Product = model('Product', productSchema);

export default Product;
