const mercadopago = require("mercadopago");

const notificar = async (req, res) =>{

  //console.log('notificacion');
  const {query} = req;
  const topic = query.topic || query.type;
 //console.log({topic})

  switch(topic){
      case "payment":
          const paymentId = query.id || query['data.id'];
          console.log(topic, 'gettin payment', paymentId);
          const payment = await mercadopago.payment.findById(paymentId);
          //console.log(payment)
          var {body} = await mercadopago.merchant_orders.findById(payment.body.order.id)
          break;
      case "merchant_order":
          const orderId = query.id;
          console.log(topic, 'gettin merchant order', orderId);
          var {body} = await mercadopago.merchant_orders.findById(orderId);
          console.log(body.items)
          break;
  }

  //console.log(body.payments)

  let paidAmount = 0;
  body.payments.forEach(payment =>{
      if(payment.status === 'approved'){
          paidAmount += payment.transaction_amount;
      }
      
  })
  
  if(paidAmount >= body.total_amount){
      console.log('El pago se completó')
      //LOGICA PARA CONECTAR CON DB 



  }else{
      console.log('El pago no se completó')
  }


  res.send();
}

module.exports = {
    notificar,
}
