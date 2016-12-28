// starting up server
const express = require('express');
const logger = require('morgan');
const path = require('path');

// saving routes to consts
const homeRoute = require('./routes/home');
const ratsRoute = require('./routes/rats');
const restaurantsRoute = require('./routes/restaurants');

// creating instance of server and
const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

// setting up logger to use dev tools
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// setting the view engine to ejs and to our views route
app.set('view engine', 'ejs');
app.set('views', './views');

// THESE ARE THE ROUTES to routes/pageIWannaGoTo.js
app.use('/', homeRoute);
app.use('/rats', ratsRoute);
app.use('/restaurants', restaurantsRoute);

// listening port
app.listen(port, () => console.warn(`The server is listening on port ${port}!!`));
