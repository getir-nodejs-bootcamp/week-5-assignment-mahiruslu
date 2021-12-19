const Product = require('../models/Product');
const hs = require('http-status');

const getAllProducts = () => {
    return Product.find({});
}   

const getOneProduct = (id) => {
    const product = Product.findOne({_id: id});
    return product;
}

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, product) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(hs.OK).send(product);
    });
}
const deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(hs.OK).send(product);
    });
}
const insertProduct = (data) => {
    return new Product(data).save();
}

module.exports = {
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    insertProduct
}