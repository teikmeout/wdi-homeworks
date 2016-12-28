const db = require('../lib/dbConnect');

let offset = 0;
let limit = 10;

function getAllApartments(req, res, next) {
  console.log('---> entering getAllApartments');
  db.any(`
    SELECT *
    FROM apartments LIMIT $1;
    `, [limit])
    .then((data) => {
      // console.log(data)
      res.rows = data;
      next();
    })
    .catch((err) => {
      next(err);
    })
}

function getApartmentById(req, res, next) {
  console.log('---> entering getApartmentById');
  //db.many//db.one//db.none//db.anyd//db.oneOrNone//db.manyOrNone
  // taking care of input sanitation making sure it's an integer
  req.body.aptID = parseInt(req.params.id);
  // console.log(req.body.aptID);
  db.one(`
    SELECT *
    FROM apartments
    WHERE id = $/aptID/
    `, req.body)
    .then((data) => {
      // console.log(data);
      res.rows = data;
      next();
    })
    .catch((err) => {
      next(err);
    })
}


module.exports = {
  getAllApartments,
  getApartmentById,
};
