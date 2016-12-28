'use strict';

// requiring my server configuration
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
// FUCKING FORGOT THE BODY PARSER AGAIN
const bodyParser = require('body-parser');

// starting a new instance of the server express
const app = express();
// tripple check if we are inside deployment environment
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

// declaring the port we are going to work on
const PORT = process.argv[2] || process.env.PORT || 3000;

// declaring the use of path pointing at public folder inside of this instance of express
app.use(express.static(path.join(__dirname, 'public')));
// AND OBVIOUSLY DIDNT REQUIRE IT!!
app.use(bodyParser.json());

// declaring the ROUTES HERE
const homeRoute = require('./routes/index');
const apiRoute = require('./routes/api/movies');



// HERE GO THE ROUTES
app.use('/', homeRoute);
app.use('/api', apiRoute);

// I still don't know where this error declaration should be on
app.use((err, req, res, next) => {
 console.log(err);
 res.status(500).send('Something broke!');
});

// declaring ports we use
app.listen(PORT, () => console.log(`server RUNNIN on ${PORT}`));
