// requiring Mongo DB
const { MongoClient } = require('mongodb');
// telling where this DB is
const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';

// sending this info out to require
module.exports = {
  restDB: (req, res, next) => {
    // creating a catching Obj to use as search params
    const searchingObj = {};
    // creating a const for the query params
    const querySearch = req.query;

    // this is where all the queries and ifs go
    if ('zip' in querySearch) {
      searchingObj.zipcode = new RegExp(`\\b${querySearch.address}`, 'i');
    }
    if ('street' in querySearch) {
      searchingObj.street = new RegExp(`\\b${querySearch.street}`, 'i');
    }
    if ('food' in querySearch) {
      searchingObj.cuisine_description = new RegExp(`\\b${querySearch.food}`, 'i');
    }

    // go to Mongo and connect to rats_to_restaurants DB
    MongoClient.connect(dbConnection, (err, db) => {
      // catching the error if it exists
      if (err) return next(err);
      // got to collection restaurants
      db.collection('restaurants')
        .find(searchingObj)
        .toArray((arrayError, restaurantes) => {
          if (arrayError) return next(arrayError);
          res.restaurantes = restaurantes;
          next();
        }); // end of .toArray
    }); // end of MongoClient


  } // end of restDB
}; // end of module.exports
