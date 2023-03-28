const mercadopago = require("mercadopago");


const payment = async (req, res) =>{
    try {
        console.log(req.body);
        
    // Crea un objeto de preferencia
    let preference = {
        items: [{
            title: "asd",
            description: "asdasd",
            currency_id: "ARS",
            quantity: 3,
            unit_price: 100,
        }
        ],
        back_urls: {
            success: "https://el-bodegon-nuevo-repo.vercel.app/",
            failure: "",
            pending: ""
        },

        auto_return: "approved",
        binary_mode: true,
        notification_url: "https://el-bodegon-nuevo-repo.vercel.app/notificacion",
      };
    


/*     req.body.forEach(item => {
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
      
 */      mercadopago.preferences
        .create(preference)
        .then((response)=>res.status(200).send({response}))
        .catch((error)=>{console.log(error); res.status(404).send(error.message)});
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
 
}

module.exports = {
    payment,
}
