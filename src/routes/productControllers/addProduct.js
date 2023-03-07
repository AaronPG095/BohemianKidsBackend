import Coffee from '../../models/coffeeProductModel.js';

export async function addProduct(req, res, next) {
  const {
    type,
    name,
    processing,
    size,
    origin,
    masl,
    variety,
    cropYear,
    price,
    dryingTime,
    flavourNotes,
  } = req.body;

  try {
    const newCoffee = new Coffee({
      name: req.body.name,
      type: req.body.type,
      processing: req.body.processing,
      size: req.body.size,
      origin: req.body.origin,
      masl: req.body.masl,
      variety: req.body.variety,
      cropYear: req.body.cropYear,
      price: req.body.price,
      dryingTime: req.body.dryingTime,
      flavourNotes: req.body.flavourNotes,
    });

    newCoffee
      .save()
      .then(async (coffee) => {
        res.status(200).json({
          success: true,
          coffee: coffee,
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}
