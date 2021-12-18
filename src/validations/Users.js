const Joi  = require('joi');

const createUser = Joi.object({
    first_name: Joi.string().required().min(2),
    last_name: Joi.string().required().min(2),
    email: Joi.string().required().email().min(8),
    password: Joi.string().required().min(8),

    //! BUNLAR DAHA SONRA AKTİF EDİLECEK
    // phones : Joi.array().items(
    //     Joi.object({
    //         number: Joi.string().required(),
    //         type: Joi.string().required()
    //     })
    // ),
    // addresses: Joi.array().items(
    //     Joi.object({
    //         title: Joi.string().required(),
    //         address: Joi.string().required(),
    //         city: Joi.string().required(),
    //         province: Joi.string().required(),
    //         postal_code: Joi.string().required(),
    //         country: Joi.string().required()
    //     })
    // )
});

const updateUser = Joi.object({
    first_name: Joi.string().min(2),
    last_name: Joi.string().min(2),
    email: Joi.string().email().min(8),
    password: Joi.string().min(8),
    phones : Joi.array().items(
        Joi.object({
            number: Joi.string().required(),
            type: Joi.string().required()
        })
    ),
    addresses: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            province: Joi.string().required(),
            postal_code: Joi.string().required(),
            country: Joi.string().required()
        })
    )
});

const loginUser = Joi.object({
    email: Joi.string().required().email().min(8),
    password: Joi.string().required().min(8)
});

module.exports ={
    createUser,
    updateUser,
    loginUser
}