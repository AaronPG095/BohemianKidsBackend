import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';
import Coffee from './coffeeProductModel.js';
import User from './userModel.js';
import EquipmentAndMerchandise from './equipmentMerchModel.js';

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  products: { type: Array },
  price: { type: Number },
  billingAddress: {
    title: { type: String },
    fName: { type: String },
    lName: { type: String },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  deliveryAddress: {
    title: { type: String },
    fName: { type: String },
    lName: { type: String },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  paymentMethod: { type: String },
  paymentDetails: {
    cardholderName: { type: String },
    cardNumber: { type: Number },
    expiryDate: { type: Date },
    CSV: { type: Number },
  },
  shippingMethod: { type: String },
  orderDate: { type: Date },
});

const Order = model('Order', orderSchema);

export default Order;
