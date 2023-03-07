import { model, Schema } from 'mongoose';

const coffeeSchema = new Schema({
  type: { type: String, enum: ['filter', 'espresso'], default: 'filter' },
  name: { type: String, default: 'Arabica'},
  processing: { type: String, default: 'Roasting the Coffee'},
  size: { type: Number, default: 200 },
  origin: { type: String, default: 'Brasil' },
  masl: { type: Number, default: 200 },
  variety: { type: String, default: 'Catimor' },
  cropYear: { type: Number, default: 2019 },
  price: { type: Number, minLength: 1, min: 0, default: 20 },
  dryingTime: { type: Number, default: 30 },
  flavourNotes: { type: String, default: 'flower, chocolate' },
  image: { type: String, default: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
});

const Coffee = model('Coffee', coffeeSchema);

export default Coffee;
