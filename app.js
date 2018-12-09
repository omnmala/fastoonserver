const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const connectMongodb = require('./models');

const apiRouter = require('./routes');
const user = require('./routes/users');
const series = require('./routes/series');

const app = express();
connectMongodb();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', apiRouter);
app.use('/user', user);
app.use('/series', series);

app.listen(app.get('port'), () => {
    console.log('Server is listening on port ', app.get('port'));
});