import { model, Schema } from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';
import Order from './ordersModel.js';
import Post from './postModel.js';

const userSchema = new Schema({
  fName: {
    type: String,
    require: [true, 'First name is required.'],
  },
  lName: {
    type: String,
    require: [true, 'Last name is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'This email is already in use.'],
    lowercase: true,
  },
  address: { type: String, default: '' },
  country: { type: String, default: '' },
  zipCode: { type: String, default: '' },
  state: { type: String, default: '' },
  city: { type: String, default: '' },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  title: {
    type: String,
    enum: ['Mrs.', 'Mr.', 'Miss', 'Ms.'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationString: {
    type: String,
    default: null,
  },
  passwordResetCode: {
    type: String,
    default: null,
  },
  changeAt: {
    type: Date,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      default: null,
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      red: 'Post',
      default: null,
    },
  ],
  currentCart: [
    {type: Object}
  ],
  hash: String,
  salt: String,
  googleId: String,
  facebookId: String,
});

userSchema.plugin(findOrCreate);

// userSchema.post('save', function (error, doc, next) {
//   if (error.name === 'MongoServerError' && error.code === 11000) {
//     next(new Error('Email is already in use.'));
//   } else {
//     next(error);
//   }
// });

const User = model('User', userSchema);

export default User;
