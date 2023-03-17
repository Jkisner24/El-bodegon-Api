const express = require('express');
const morgan = require('morgan');
const foodsRouter = require('./routes/foodsRouter')
//const initBDD = require('./database');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json())
app.use(morgan('dev'));
//initBDD();

app.use('/foods', foodsRouter);
app.use('/users', usersRouter);



module.exports = app

