// using express inside this file
const router = require('express').Router();

// making the HOME route
router.get('/', (req, res) => {
  // pointing at the rats view
  res.render('./restaurants/show');
});

// exporting only the function we want to use outside
module.exports = router;
