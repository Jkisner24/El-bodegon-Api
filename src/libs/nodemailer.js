const nodemailer = require('nodemailer');

sendMail = async ( toMail, name ) => {
    try {
        const config = {
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user: 'elbodegondetony2023@gmail.com',
                pass: 'dpetxobcnlfvguck'
            },
            tls: {
              rejectUnauthorized: false
            }
        }
        const mail = {
            from: 'elbodegondetony2023@gmail.com',
            to: toMail,
            subject: 'Confirmacion de registro El bodegon de Tony',
            html: 
            `<div style= "background-color:black; border-radius:20px; padding:50px; text-align:center; color: white;" >
                <div style= "border: 10px solid rgb(235, 14, 14); border-radius: 20px; padding:50px;" >
                    <h1>Hola, ${name}!!!</h1>
                    <h2 style= "color: white;" >Bienvenido a "El Bodegon De Tony"</h2>
                    <h2 style= "color: white;" >Es un placer para nosotros darte la bienvenida</h2>
                    <h2 style= "color: white;" >y ofrecerte los mejores platos a los mejores precios</h2>
                    <a style= "color: rgb(235, 158, 14); margin: 100px;" href="https://el-bodegon-nuevo-repo.vercel.app/">Volver a la pagina principal</a>
                </div>
             </div>`
        }
        
        const transport = nodemailer.createTransport(config)
        const send = await transport.sendMail(mail)
        console.log(send)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail;