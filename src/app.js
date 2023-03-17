const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const foodsRouter = require('./routes/foodsRouter')
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


app.use('/foods', foodsRouter);
app.use('/users', usersRouter);



module.exports = app

