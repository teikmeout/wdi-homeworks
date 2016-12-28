const fetch = require('node-fetch');

function searchForMovie(req, res, next) {
  let movieTitleToSearch = req.params.title;
  fetch('http://www.omdbapi.com/?')
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.movieResult = data;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  searchForMovie,
};

function sanitizeInput(string) {
  let newString = '';
  string.forEach((letter) => {
    switch(letter){
      case "<": {
        newString.push('&','l', 't');
        break;
      }
      case ">": {
        newString.push('&', 'g', 't');
        break;
      }
      case "&": {
        newString.push('&', 'a', 'm' , 'p');
        break;
      }
      default: {
        newString.push(letter);
        break;
      }
    } // end of switch
  }) // end of foreach
  return newString;
} // end of sanitizeInput
