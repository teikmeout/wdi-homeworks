const router = require('express').Router();
// requiring middleware
const { getAllCurrentMovies, addToFavorites, deleteThisMovie } = require('../../models/muvies');
// const dbModel = require('../../models/muvies');

// DRY code
const sendJSONresp = (req, res) => res.json(res.muvies || []);
const sendOKresp = (req, res) => res.status(204).send();

// the more specific the route, the more above it has to be
// if not it wont find the right route
router.route('/currentMovies/:id')
  .delete(deleteThisMovie, sendOKresp)

router.route('/currentMovies')
  .get(getAllCurrentMovies, sendJSONresp)
  .post(addToFavorites, sendOKresp)


module.exports = router;
// NEVER FUCKING EXPORT ROUTES AS AN OBJECT!!!!!!!
// module.exports = {
//   router
// };
