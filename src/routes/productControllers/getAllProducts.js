import Coffee from '../../models/coffeeProductModel.js';
import EquipmentAndMerchandise from '../../models/equipmentMerchModel.js';

export async function getAllProducts(req, res, next) {
  try {
    const coffee = await Coffee.find({});
    const equipmentAndMerchandise = await EquipmentAndMerchandise.find({});

    res.status(200).json({
      success: true,
      msg: 'List of all coffees and products: ',
      allItems: { coffee, equipmentAndMerchandise },
    });
  } catch (error) {
    next(error);
  }
}
