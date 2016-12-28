const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
}); // end or router.get

module.exports = router;
