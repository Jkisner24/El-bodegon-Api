const {Router} = require('express')

const {getAllOrders, getOrdersByUser, postOrder, orderDelivered} = require('../handlers/orderHandler')

const orderRouter = Router()

orderRouter.get('/', getAllOrders)
orderRouter.get('/:id', getOrdersByUser)
orderRouter.post('/', postOrder)
orderRouter.put('/:id', orderDelivered)

module.exports = orderRouter