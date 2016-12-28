'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));



// const homeRouter = require('./routes/api');
// const movieRouter = require('./routes/api');
// app.use('/', homeRouter);
// app.use('/api', movieRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));
