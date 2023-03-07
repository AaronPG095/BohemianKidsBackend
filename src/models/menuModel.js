import { model, Schema } from 'mongoose'

// const menuSchema = new Schema({
//   productId: { type: Schema.Types.ObjectId },
//   itemName: { type: String },
//   itemPrice: { type: Number },
// })

const menuSchema = new Schema({
  //   menuItem: [

  name: String,
  price: String,
  ingredients: [String],
  menuType: { enum: ['HOT', 'COLD','LUNCH',"BREAKFAST"], type: String, required: true },
  //   ],
  //   cold: [{ name: String, price: String, ingredients: [String] }],
  //   breakfast: [{ name: String, price: String, ingredients: [String] }],
  //   lunch: [{ name: String, price: String, ingredients: [String] }],
})

export const Menu = model('Menu', menuSchema)
