const mercadopago = require("mercadopago");


const payment = async (req, res) =>{
    try {
        
    // Crea un objeto de preferencia
    let preference = {
        items: [],
        back_urls: {
            success: "https://localhost:3001",
            failure: "",
            pending: ""
        },
        auto_return: "approved",
        binary_mode: true //no deja pagos pendientes
      };
    
    req.body.forEach(item => {
        preference.items.push(
            {
                id: item.id,
                title: item.name,
                currency_id: "ARS",
                picture_url: item.image,
                description: item.description,
                category_id: "art",
                quantity: item.quantity,
                unit_price: item.price
            }
        )
      });
      
      mercadopago.preferences
        .create(preference)
        .then((response)=>res.status(200).send({response}))
        .catch((error)=>res.status(404).send(error.message));
    } catch (error) {
        res.status(404).send(error.message)
    }
 
}

module.exports = {
    payment,
}
