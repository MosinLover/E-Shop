const Product = require("../models/ProductModel")

const getProducts = (req, res) => {
    Product.create({name: "Panasomic"});
    res.send("handling product routes")
}
module.exports = getProducts;