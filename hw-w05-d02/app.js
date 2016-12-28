// initializing server
const express = require('express');
// using morgan
const logger = require('morgan');
// assigning express object to variable
const app = express();
// assigning listening port
const port = process.env.PORT || 3000;
// access to file
const yes = require('./sightings.json');
// console.log(yes);
const sizeOfArray = yes.length;

// using dev options for morgan
app.use(logger('dev'));
// setting view engine to ejs and to ./views dir
app.set('view engine', 'ejs');
app.set('views', './views');
let resultsArray = [];
// FUNCTION: searches the array of objects and returns an array with the right ones
// ARGUMENTS: takes in the key value to search for
function searchForCity(keyY, valueE) {
  for (let i = 0; i < yes.length; i++) {
// console.log('now looping');
    if (yes[i].keyY == valueE) {
      console.log(`${yes[i].keyY},  is filtered`);
      resultsArray.push(yes[i]);
      console.log(resultsArray);
    }
  }

}


searchForCity('city', 'Westport');
console.log(resultsArray);
// root directory
app.get('/', (req, res) => {
  res.render('index', {
    sights: resultsArray,
    // size: yes.length,
  });
});

// search queries
app.get('/state', (req, res) => {
  // const byState = req.query.b;
  // console.log(byState);
  res.render('showInfo', {
    byState,
  });
});

// applying listening port call back
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
