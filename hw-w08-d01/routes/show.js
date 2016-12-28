const home = require('express').Router();
const path =  require('path');

const renderShowPage = (req, res, next) => { res.sendFile(path.join(__dirname, '../public', 'show.html')); }

home.get('/apartments/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'show.html'));
});

home.routes


module.exports = home;
