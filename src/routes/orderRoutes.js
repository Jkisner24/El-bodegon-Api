const {Router} = require('express')

const {getAllOrders, getOrdersByUser, postOrder} = require('../handlers/orderHandler')

const orderRouter = Router()

orderRouter.get('/', getAllOrders)
orderRouter.get('/:id', getOrdersByUser)
orderRouter.post('/', postOrder)

module.exports = orderRouter