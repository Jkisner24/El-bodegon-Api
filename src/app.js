const express = require('express');
const morgan = require('morgan');
const foodsRouter = require('./routes/foodsRouter')

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.use('/foods', foodsRouter);
 

module.exports = app

