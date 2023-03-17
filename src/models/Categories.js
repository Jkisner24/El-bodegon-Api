const mongoose = require('mongoose');


const CategoriesScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        description: {
            type: String,
        }
    }, {
    versionKey: false,
    timestamps: false
}
)
module.exports = mongoose.model('category', CategoriesScheme);
