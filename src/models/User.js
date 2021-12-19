const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    isAdmin: false,    
    phones : [{
        number: String,
        type: String
    }],
    addresses: [{
        title: String,
        address: String,
        city: String,
        province: String,
        postal_code: String,
        country: String
    }],
    orders: [{
        order_id: String,
        order_date: Date,
        order_status: String,
        order_total: Number,
        order_items: [{
            product_id: String,
            product_name: String,
            product_price: Number,
            product_quantity: Number
        }]
    }],
    favorites: [{
        product_id: String,
        product_name: String,
        product_price: Number,
        product_quantity: Number
    }],
    cart: [{
        product_id: String,
        product_name: String,
        product_price: Number,
        product_quantity: Number
    }]
}, { timestamps: true , versionKey: false});

module.exports = Mongoose.model('User', UserSchema);
