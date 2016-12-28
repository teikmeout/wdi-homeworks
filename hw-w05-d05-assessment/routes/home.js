// using express inside this file
const router = require('express').Router();

// making the HOME route
router.get('/', (req, res) => {
  // pointing at the right folders home
  res.render('./home/index');
});

// exporting only the function we want to use outside
module.exports = router;
