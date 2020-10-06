const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    sellerName: req.body.sellerName,
    sellerId: req.body.sellerId,
    description: req.body.description,
    image: url + "/images/" + req.file.filename,
    avgrating: 0,
    totalRatings: 0,
    stars: 0,
    itemsLeft: req.body.itemsLeft,
    maxOrder: req.body.maxOrder,
  });
  Product.save()
    .then((createdProduct) => {
      res.status(201).json({
        message: "product added successfully",
        result: {
          ...createdProduct,
          id: createdProduct._id,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occured while adding Product!",
        result: error,
      });
    });
};
exports.updateProduct = (req, res, next) => {};
exports.deleteProduct = (req, res, next) => {};
