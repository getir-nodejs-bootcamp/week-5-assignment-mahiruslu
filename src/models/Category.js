const mongooose = require('mongoose');

const categorySchema = new mongooose.Schema({
    name: String,
    description: String,
    image: String
}, { timestamps: true , versionKey: false});


        

module.exports = mongooose.model('Product', categorySchema);