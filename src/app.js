const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const categoriesRouter = require('./routes/categories');
const foodsRouter = require('./routes/foodsRouter')
const usersRouter = require('./routes/usersRouter');
const auth0UsersRouter = require('./routes/auth0UsersRouter')
const cors = require('cors')

const app = express();

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
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

