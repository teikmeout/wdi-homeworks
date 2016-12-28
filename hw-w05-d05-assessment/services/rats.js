// requiring Mongo DB
const { MongoClient } = require('mongodb');
// telling where the DB is
const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';

// sending this out to be used somewhere else
module.exports = {
  ratsDB: (req, res, next) => {
    // creating a catching object of key:values
    const searchedObj = {};
    // creating a const for the query params
    const querySearch = req.query;

    // cross is a name I gave it
    // cross_street_2 is the key in the original object
    if ('address' in querySearch) {
      searchedObj.incident_address = new RegExp(`\\b${querySearch.address}`, 'i');
    }
    if ('cross' in querySearch) {
      searchedObj.cross_street_2 = new RegExp(`\\b${querySearch.cross}`, 'i');
    }
    if ('zip' in querySearch) {
      searchedObj.incident_zip = new RegExp(`\\b${querySearch.zip}`, 'i');
    }

    // got o mongo and connet to rats_to_restaurants DB
    MongoClient.connect(dbConnection, (err, db) => {
      // if connection fails fgo to next and send err number
     if (err) return next(err);
     // go to collection rats
     db.collection('rats')
        // find inside RATS with the newly created key:value OBJ
        .find(searchedObj)
        // if we run into array and have error goto next function
        .toArray((arrayError, ratas) => {
          // got to next function with error info
          if (arrayError) return next(arrayError);
          // assigning info inside of that array to res.rats
          res.ratas = ratas;
          // calling to next function
          next();
        }); // end of toArray
    }); // end of Mongo.Client
  } // end of ratsDB function
}; // end of module.exports
