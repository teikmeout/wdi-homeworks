// requiring router expression of express
const homeRoute = require('express').Router();
const path = require('path');

// response options
const sendJSONresp = (req, res) => res.json(res.movies);
// const sendOKresp = (req, res) => res.status(204).send();
const sendHomePage = (req, res) => res.sendFile(path.join(__dirname, '../public/home.html'));


homeRoute.route('/')
  .get(sendHomePage);

module.exports = homeRoute;
