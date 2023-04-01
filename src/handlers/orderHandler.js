const Order = require('../models/Order')

const getAllOrders = async(req, res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    } catch (error) {
        console.log(error);
    }
}

const getOrdersByUser = async (req, res)=> {
    try {
        const {id} = req.body
        const userOrders = await Order.find({owner: id})
        res.status(200).json(userOrders)
    } catch (error) {
        console.log(error);
    }
}

const postOrder= async (req, res) => {
    try {
        const {items, amount, userId, date} = req.body
        const newOrder = new Order({ items, amount, userId, date })
        await newOrder.save();
        res.status(200).json(newOrder)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllOrders,
    getOrdersByUser,
    postOrder
}