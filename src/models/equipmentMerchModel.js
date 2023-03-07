import { model, Schema } from 'mongoose';

const equipmentAndMerchandiseSchema = new Schema({
  type: { type: String, enum: ['equipment', 'merchandise'], default: 'equipment' },
  name: { type: String, default: 'Bean Grinder'},
  material: { type: String, default: 'Metal'},
  size: { type: String, default: '200' },
  price: { type: Number, minLength: 1, min: 0, default: 42.99 },
  description: { type: String, default: 'Our focus is on freshly brewed coffee; available as espresso, hand-brew filter, batch-brew filter and, naturally, all of your milk-based favorites.' },
  image: { type: String, default: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
});

const EquipmentAndMerchandise = model('EquipmentAndMerchandise', equipmentAndMerchandiseSchema);

export default EquipmentAndMerchandise;
