const db = require('../lib/dbConnect');

let offset = 0;
let limit = 10;

// READING FUNCTION
function getAllBuildings(req, res, next) {
  console.log('---> entering getAllBuildings');
  //db.many//db.one//db.none//db.anyd//db.oneOrNone//db.manyOrNone
  db.query(`
    SELECT *
    FROM buildings LIMIT $1;
    `, [limit])
    .then((data) => {
      // equivalent to the toArray in MongoDB
      res.rows = data;
      next();
      // further down the line we need a DB close to avoid leaving DB open
    })
    .catch((err) => {
      next(err);
    });
}

// show building by ID
function getBuildingById(req, res, next) {
  console.log('---> entering showBuildingById');
  //db.many//db.one//db.none//db.anyd//db.oneOrNone//db.manyOrNone
  // taking care of input sanitation making sure it's an integer
  req.body.buildingID = parseInt(req.params.id);
  console.log(req.body.buildingID);
  db.one(`
    SELECT *
    FROM buildings
    WHERE id = $/buildingID/
    `, req.body)
    .then((data) => {
      console.log(data);
      res.rows = data;
      next();
    })
    .catch((err) => {
      next(err);
    })
}

// addBuilding

//deleteBuilding

//updateBuilding
module.exports = {
  getAllBuildings,
  getBuildingById,
}
