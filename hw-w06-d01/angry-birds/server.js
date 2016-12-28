const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const homeRoute = require('./routes/index.js');
const angryBirdsRoute = require('./routes/angrybirds.js');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', homeRoute);
app.use('/angrybirds', angryBirdsRoute);

app.listen(port, () => console.log(`Server is listening on port ${port}!!`));
