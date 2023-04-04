const mercadopago = require("mercadopago");
const sendMail = require('../libs/nodemailer')
const Auth0User = require('../models/Auth0User')
const User = require('../models/User')
const Order = require('../models/Order')

const notificar = async (req, res) =>{
    const {email, sub, id, cart} = req.body
    
    try {
        if(!cart[0].price) throw new Error('Unexpected error')
        let amount = 0
        cart.forEach(item => {
            amount += item.price + item.quantity
        });
        console.log(amount); 
        
        if(sub){
            const newOrder =  await new Order({items: cart, owner: id, amount})
            newOrder.save()    
            const updatedAuth0UserOrders = await Auth0User.updateOne({ sub: sub }, { $push: { orders: newOrder._id } })
            res.status(200).json(updatedAuth0UserOrders)
        }
        else{
            const newOrder =  await new Order({items: cart, owner: id, amount})
            newOrder.save()
            const updatedUserOrders = await User.updateOne({ _id: id }, { $push: { orders: newOrder._id } })
            res.status(200).json(updatedUserOrders)
        }
        sendMail(email, "usuario")
    } catch (error) {
        res.status(400).send(error)
        console.log(error.message);
    } 
    // console.log(email);
}
module.exports = {
    notificar,
}
