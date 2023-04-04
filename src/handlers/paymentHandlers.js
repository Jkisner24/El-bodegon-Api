const mercadopago = require("mercadopago");

const payment = async (req, res) =>{
    const {cart, email, id} = req.body
    // Crea un objeto de preferencia
    console.log(email);
    console.log(cart);
    console.log(id);
    let preference = {
        items: [],
        
        back_urls: {
            success: "http://localhost:3000/",
            failure: "http://localhost:3000/",
            pending: "http://localhost:3000/"
        },
        auto_return: "approved",
        //binary_mode: true,
        // notification_url: 'https://el-bodegon-api-wine.vercel.app/notificar',
        // payer: {
        //     email,
        //     id
        // },
        // sandbox_mode : true
      };

      cart.forEach(item => {
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
      .then(function(response){
          console.log(response.body.init_point)
          console.log(response.payer)
          res.send({response}/* `<a href="${response.body.init_point}">Ir a pagar</a>` */)
          }).catch(function(error){
            console.log(error);
          });
      }

/*       mercadopago.preferences
        .create(preference)
        .then((response)=>res.status(200).send({response}))
        .catch((error)=>{console.log(error); res.status(404).send(error.message)});
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
 */

module.exports = {
    payment,
}
