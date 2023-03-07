import { model, Schema } from 'mongoose'

const coffeeTypesSchema = new Schema({
  origin: {
    type: String,
  },
  masl: {
    type: String,
  },
  variety: {
    type: String,
  },
  processing: {
    type: String,
  },
  crop_year: {
    type: Number,
  },
  dryingTime: {
    type: Number,
  },
})

