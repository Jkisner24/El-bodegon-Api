const { mongoose } = require('mongoose');
const User = require('../models/User');


const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

const createUser = async (name, phone, email, password) => {
    const newUser = new User({ name, phone, email, password })
    await newUser.save();
    return "new User";
}
const allUsers = async () => {
    const allBDD = await User.find({});
    return allBDD;
}

const searchUsers = async (name) => {
    const filterUser = await User.find({ name })
    return filterUser;
}
const userById = async (id) => {
    const filterById = await User.find({ _id: id })
    return filterById;
}
const updateById = async (id, user) => {
    const updateUser = await User.updateOne({ _id: id }, { $set: user })
    return updateUser;
}


module.exports = { createUser, allUsers, searchUsers, userById, updateById }