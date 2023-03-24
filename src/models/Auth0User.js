const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Auth0UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        sub: {
            type: String,
            unique:true,
            required: true
        },
        role: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true
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

module.exports = mongoose.model('Auth0User', Auth0UserScheme);