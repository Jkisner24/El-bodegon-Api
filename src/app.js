const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const categoriesRouter = require('./routes/categories');
const foodsRouter = require('./routes/foodsRouter')
const usersRouter = require('./routes/usersRouter');
const paymentRouter = require('./routes/payment')
const auth0UsersRouter = require('./routes/auth0UsersRouter')

const cors = require('cors')
//
require('dotenv').config();
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const cartRouter = require('./routes/cartRoutes');
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_KEY
});


const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


app.use('/foods', foodsRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/payment', paymentRouter)
app.use('/auth0Users', auth0UsersRouter);
app.use('/cart', cartRouter)

module.exports = app

