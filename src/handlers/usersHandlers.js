const { createUser, allUsers, searchUsers, userById, updateById } = require('../controllers/userControllers');
const User = require('../models/User');

const getUsers = async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await searchUsers(name) : await allUsers();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const createUsers = async (req, res) => {
    const { name, phone, email, password } = req.body;

    try {
        const newUser = await createUser(name, phone, email, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email, password, role, state } = req.body;
    const updatedUser = {name, phone, email, password, role, state}
    try {
        const result = await updateById(id, updatedUser);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    getUsers,
    createUsers,
    getUserById,
    updateUserById
}