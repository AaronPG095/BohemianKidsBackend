import EquipmentAndMerchandise from '../../models/equipmentMerchModel.js';

export async function addMerchandiseOrEquipment(req, res, next) {
  const { type, name, material, size, price, description } = req.body;

  try {
    const newMerchandiseOrEquipment = new EquipmentAndMerchandise({
      name: req.body.name,
      type: req.body.type,
      material: req.body.material,
      size: req.body.size,
      price: req.body.price,
      description: req.body.description,
    });

    

    newMerchandiseOrEquipment
      .save()
      .then(async (product) => {
        res.status(200).json({
          success: true,
          product: product,
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}
