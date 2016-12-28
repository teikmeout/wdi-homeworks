const home = require('express').Router();
const path =  require('path');

// home.get('/show/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views', 'show.html'));
// });


home.get('/', (req, res) => {
  // res.json('Home Route Yeah!!')
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


module.exports = home;
