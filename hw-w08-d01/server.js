'use strict';

require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// const pgPromise = require('pg-promise');
// I'm insistant, apparently in requiring things I don't need. I'm sorry
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;
const app = express();

// Declaring routes
// setting routes
const homeRoute = require('./routes/home');
const apiRoute = require('./routes/api');
const showRoute = require('./routes/show');

const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// this is to only accept json in our local API
app.use(bodyParser.json());
app.use(logger(isDev ? 'dev' : 'common'));


app.use('/', homeRoute);
app.use('/show', showRoute);
app.use('/api', apiRoute);

app.use((err, req, res, next) => {
 console.log(err);
 res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`server RUNNIN on ${PORT}`));
