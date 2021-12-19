const hs = require('http-status');
const productService = require('../services/Product');

const getAllProducts = (req,res) => {
    productService.getAllProducts()
    .then(products => {
        res.status(hs.OK).send(products);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    }
    );
}

const getOneProduct = (req,res) => {
    productService.getOneProduct(req.params.id)
    .then(product => {
        res.status(hs.OK).send(product);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    }
    );
}

const insertProduct = (req,res) => {
    productService.insertProduct(req.body)
    .then(product => {
        res.status(hs.OK).send(product);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    }
    );
}

const deleteProduct = (req,res) => {
    productService.deleteProduct(req.params.id)
    .then(product => {
        res.status(hs.OK).send(product);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    }
    );
}

const updateProduct = (req,res) => {
    productService.updateProduct(req.params.id,req.body)
    .then(product => {
        res.status(hs.OK).send(product);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    }
    );
}


module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct,
    deleteProduct,
    updateProduct
}