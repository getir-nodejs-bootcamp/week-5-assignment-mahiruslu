const mongooose = require('mongoose');

const ProductSchema = new mongooose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String,
    category: {
        type: mongooose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

module.exports = mongooose.model('Product', ProductSchema);