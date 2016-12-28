const db = require('../lib/dbconnect');

function getAllCurrentMovies(req, res, next) {
  console.log('---> getAllCurrentMovies in middleware');
  // working on db connection
  db.any('SELECT * FROM muvies ORDER BY muvie_id DESC;')
  // since we use pg-promise we do not need to convert
  // to json with .then(r => r.json());
  .then((data) => {
    // console.log(data);
    res.muvies = data;
    next();
  })
  .catch(error => next(error));
}

function addToFavorites(req, res, next) {
  console.log('---> addToFavorites in middleware');
  console.log('V this is what the req.body looks like on this side');
  console.log(req.body);
  // let's see what comes out of the response

  // OMG if THE REAL PROBLEM WAS ME FORGETTING CAPITAL LETTERS FOR THE PROPERTIES. IM DYING
  db.none(`
    INSERT INTO muvies (title, released, runtime, poster, imdbrating, imdbid)
    VALUES ($/Title/, $/Released/, $/Runtime/, $/Poster/, $/imdbRating/, $/imdbID/);
    `, req.body)
    .then(() => {
      next();
    })
    .catch(error => next(error));
}

function deleteThisMovie(req, res, next) {
  console.log('---> inside DELETETHISMOVIE yiiiiiisss');
  const deleteThisId =

  db.none(`
    DELETE FROM muvies WHERE muvie_id = $/id/;
    `, req.params)
    .then(() => {
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getAllCurrentMovies,
  addToFavorites,
  deleteThisMovie,
};
