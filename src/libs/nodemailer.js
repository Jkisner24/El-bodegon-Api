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
            to: 'lvalcke88@gmail.com',
            subject: 'Confirmacion de registro El bodegon de Tony',
            html: 
            `<div style={{ width: '500px', borderRadius: '20px', backgroundColor: 'black', color: 'white', display: 'flex' }}>
                <h1>Hola, ${name}!!!</h1>
                <h2>Bienvenido a El Bodegon De Tony</h2>
                <p>Es un placer para nosotros darte la bienvenida</p>
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