const mercadopago = require("mercadopago");

const payment = async (req, res) =>{
    // Crea un objeto de preferencia
    let preference = {
        items: [],
        
        back_urls: {
            success: "http://localhost:3001/cart",
            failure: "",
            pending: ""
        },
        //auto_return: "approved",
        //binary_mode: true,
        notification_url: 'https://aca7-2800-560-39-154b-71a6-4deb-dd04-cff5.sa.ngrok.io/notificar',
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
