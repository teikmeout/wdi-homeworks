const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

// route for the hompage
app.get('/', (req, res) => {
  res.render('index', {
    heading: 'Homepage',
  });
});

// route for the SUM page
app.get('/add/:operand1/:operand2', (req, res) => {
  res.render('index', {
    heading: parseFloat(req.params.operand1) + parseFloat(req.params.operand2),
  });
});


// route for the Substract page
app.get('/subtract/:operand1/:operand2', (req, res) => {
  res.render('index', {
    heading: parseFloat(req.params.operand1) - parseFloat(req.params.operand2),
  });
});

// route for the Multiply page
app.get('/multiply/:operand1/:operand2', (req, res) => {
  res.render('index', {
    heading: parseFloat(req.params.operand1) * parseFloat(req.params.operand2),
  });
});

// route for the Divide
app.get('/divide/:operand1/:operand2', (req, res) => {
  res.render('index', {
    heading: parseFloat(req.params.operand1) / parseFloat(req.params.operand2),
  });
});

// route for the radius of the circle
app.get('/areaOfACircle/:operand1', (req, res) => {
  res.render('index', {
    heading: 3.14 * Math.pow(parseFloat(req.params.operand1), 2),
  });
});


app.listen(port, () => console.log('The server is listening on ', port));
