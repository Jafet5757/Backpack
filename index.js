const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, "views"));

//Routes
app.use(require('./routes/main'));

//Middlewares
app.use('/public', express.static('public'));
app.use(morgan('dev'));


//Server
app.listen(app.get('port'), (req, res) => {
    console.log(`Server on port ${app.get('port')}`);
})