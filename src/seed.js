import mongoose from 'mongoose';
import Coffee from './models/coffeeProductModel.js';
import dotenv from 'dotenv';
import EquipmentAndMerchandise from './models/equipmentMerchModel.js';
dotenv.config();

export const connectToDatabase = async () => {
  try {
    mongoose.connect(process.env.DB_STRING);
    mongoose.connection.once('open', () =>
      console.log('Connected to local database.')
    );
  } catch (err) {
    console.log(err);
  }
};

connectToDatabase();

await EquipmentAndMerchandise.create({
  type: 'equipment',
  name: 'Bean Grinder',
  material: 'Metal',
  size: 200,
  price: 42.99,
  description:
    'Our focus is on freshly brewed coffee; available as espresso, hand-brew filter, batch-brew filter and, naturally, all of your milk-based favorites.',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
});

await EquipmentAndMerchandise.create({
  type: 'equipment',
  name: 'CHEMEX',
  material: 'Metal',
  size: 200,
  price: 42.99,
  description:
    'Our focus is on freshly brewed coffee; available as espresso, hand-brew filter, batch-brew filter and, naturally, all of your milk-based favorites.',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
});

await EquipmentAndMerchandise.create({
  type: 'merchandise',
  name: 'Our T-shirt',
  material: 'Cotton',
  size: 200,
  price: 42.99,
  description:
    'Our focus is on freshly brewed coffee; available as espresso, hand-brew filter, batch-brew filter and, naturally, all of your milk-based favorites.',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
});

await Coffee.create({
  type: 'filter',
  name: 'Arabica',
  processing: 'Roasting',
  origin: 'Brasil',
  size: 185,
  masl: 200,
  variety: 'Catimor',
  cropYear: 2019,
  price: 20,
  dryingTime: 30,
  flavourNotes: 'flower, chocolate',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
});

await Coffee.create({
  origin: 'Peru',
  masl: 100,
  variety: 'Cuttara',
  cropYear: 2019,
  price: 20,
  dryingTime: 20,
  flavourNotes: 'flower, nuts',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  name: 'Arabica',
  processing: 'Roasting',
  size: 185,
  type: 'espresso',
});

await Coffee.create({
  origin: 'Argentina',
  masl: 100,
  variety: 'Timor',
  cropYear: 2023,
  price: 20,
  dryingTime: 10,
  flavourNotes: 'mud, milk',
  image:
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  name: 'Arabica',
  processing: 'Roasting',
  size: 185,
  type: 'espresso',
});

mongoose.connection.close(function () {
  console.log('Mongoose default connection closed');
});
