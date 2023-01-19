const express = require("express");
const Product = require("../model/Product");
const router = express.Router();

router.get("", function (req, res) {
  return Product.find({}, function (err, foundProducts) {
    res.json(foundProducts);
  });
});

router.get("/:productId", function (req, res) {
  const productId = req.params.productId;
  Product.findById(productId, function (err, foundProduct) {
    if (err) {
      return res
        .status(422)
        .send({ error: { title: "product error", detail: "not found" } });
    }
    return res.json(foundProduct);
  });
});

module.exports = router;
