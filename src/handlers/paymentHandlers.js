const mercadopago = require("mercadopago");


const payment = async (req, res) =>{
    const {name, price=100, description, quantity=2} = req.body;
// Crea un objeto de preferencia
let preference = {
    items: [
    {
        title: name,
        currency_id: "ARS",
        picture_url: "url",
        description: description,
        category_id: "art",
        quantity: quantity,
        unit_price: price
    }],
    back_urls: {
        success: "https://localhost:3001",
        failure: "",
        pending: ""
    },
    auto_return: "approved",
    binary_mode: true //no deja pagos pendientes
  };
  
  mercadopago.preferences
    .create(preference)
    .then((response)=>res.status(200).send({response}))
    .catch((error)=>res.status(404).send(error.message));
 
}

module.exports = {
    payment,
}
