const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const categoriesRouter = require('./routes/categories');
const foodsRouter = require('./routes/foodsRouter')
const usersRouter = require('./routes/usersRouter');
const auth0UsersRouter = require('./routes/auth0UsersRouter')
const cors = require('cors')

const app = express();

app.use(cors({
    methods:['GET', 'PUT', 'POST']}
    ))
app.use(express.json())
app.use(morgan('dev'));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


app.use('/foods', foodsRouter);
app.use('/users', usersRouter);
app.use('/auth0Users', auth0UsersRouter);
app.use('/categories', categoriesRouter)


module.exports = app

