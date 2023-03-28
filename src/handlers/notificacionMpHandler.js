const mercadopago = require("mercadopago");

const notificacion = async (req, res) =>{

    mercadopago.payment.save(payment_data)
    .then(function(response) {
      res.status(response.status).json({
        status: response.body.status,
        status_detail: response.body.status_detail,
        id: response.body.id
      });
    })
    .catch(function(error) {
      res.status(response.status).send(error);
    });
    

}
/* 
try{
 const{ body, query} = req;
 res.send();

}catch(error){
    console.log(error)

}

} */

module.exports = {
    notificacion,
}

    