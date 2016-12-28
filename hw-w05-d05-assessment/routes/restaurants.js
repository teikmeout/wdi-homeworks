// using express inside this file
const router = require('express').Router();
// using restDB function from services/restaurants.js
const { restDB } = require('../services/restaurants');

// making the HOME route for restaurants
router.get('/', (req, res) => {
  // pointing at the rats view
  res.render('./restaurants/index');
});

// making the SHOW route for restaurants
router.get('/show', restDB, (req, res) => {
  // pointing at the rats view
  // res.json(res.restaurantes);
  res.render('./restaurants/show', {
    rest: res.restaurantes,
  });
});
// exporting only the function we want to use outside
module.exports = router;
