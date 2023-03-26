const mongoose = require('mongoose');


const OrderScheme = new mongoose.Schema(
    {
        items: {
            type: Array,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }, 
    {
        versionKey: false,
    }
)
module.exports = mongoose.model('order', OrderScheme);
