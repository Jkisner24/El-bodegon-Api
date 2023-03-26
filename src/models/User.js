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
        },
        role: {
            type: Boolean,
            default: false,
        },
        is_active: {
            type: Boolean,
            default: false
        },

    }, {
    versionKey: false,
    timestamps: true
}
)

//model
module.exports = mongoose.model('user', UserScheme);