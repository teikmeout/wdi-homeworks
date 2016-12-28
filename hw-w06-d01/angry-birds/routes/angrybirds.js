const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('angryBirds');
}); // end or router.get

// router.get('/a', (req, res) => {
//   res.render('angryBirds');
// }); // end of router.get

module.exports = router;
