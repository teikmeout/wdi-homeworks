// using express inside this file
const router = require('express').Router();
const { ratsDB } = require('../services/rats');

// making the HOME route for rats
router.get('/', (req, res) => {
  // pointing at the rats view
  res.render('./rats/index');
});

// making the SHOW route for rats
router.get('/show', ratsDB, (req, res) => {
  // pointing at the rats view
  // res.json(res.ratas);
  res.render('./rats/show', {
    ratas: res.ratas,
  });
});


// exporting only the function we want to use outside
module.exports = router;
