const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            bcrypt: true
        },
        role: {
            type: Boolean,
            default: false,
        },
        state: {
            type: Boolean,
            default: false
        },
        cart: {
            type: ObjectId,
            ref: 'cart'
        }

    }, {
    versionKey: false,
    timestamps: true
}
)
UserScheme.plugin(require('mongoose-bcrypt'))

//model
module.exports = mongoose.model('user', UserScheme);