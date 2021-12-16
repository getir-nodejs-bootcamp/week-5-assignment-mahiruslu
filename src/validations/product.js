const joi = require('joi');

const createProductSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    image: joi.string().required(),
    category: joi.string().required(),
    quantity: joi.number().required()

});