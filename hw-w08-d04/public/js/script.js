// const fetch = require('node-fetch');
// adding click listener to search button to go do API fetch to OMDB
const NodeSearchBtn = document.getElementById('searchbtn');
NodeSearchBtn.addEventListener('click', fetchMovie);
const NodeAddBtn = document.getElementById('addtodb');
// NodeAddBtn.addEventListener('click', )

// FUNCTION: prevents normal action for submit and fetches movies to render in front end
// ARG: the event target
function fetchMovie(event){
  console.log('---> inside fetchMovie front end');
  // this will prevent the code from refreshing the page and executing the action of the form
  event.preventDefault();

  const NodeTextInput = document.getElementById('textinput');
  // this is where I would run input sanitation to avoid fuckups
  let anotherVariable = NodeTextInput.value;
  console.log(`another variable ---> ${anotherVariable}`);
   fetch(`http://www.omdbapi.com/?t=${anotherVariable}&r=json`)
   // since this is handled front end we need to convert to json
  .then(r => r.json())
  .then((data) => {
    // making sure shit is there
    console.log('where is my shit???');
    console.log(data);

    renderAPI(data);
    // res.omdb = data;
  })
  .catch((err) => {

  });
}

function showAllCurrentSavedMovies() {
  console.log('---> entering showAllCurrentSavedMovies in client side')
  // this has a fetch call to API
  // retrieves all movies and the renders movies to page
  fetch('/api/currentMovies')
    .then(r => r.json())
    .then(data => {
      console.log(data);
      renderMovies(data);
    })
    .catch(error => {
      console.log(error);
    })
}

function renderMovies(movies) {
  console.log('---> entering renderMovies Front end');
  // if there are any results clear results before rendering
  if(document.getElementsByClassName('individualleftcont')) {
    console.log('---> about to clear elements on the LEFT!!');
    clearResults('left')
  };
  // pointing at the DIV catcher
  const NodeContainer = document.getElementById('showdb');

  // starting a forEach loop to run through results
  movies.forEach(movie => {
    // creating individual elements and setting their classes attributes and values
    const NewSmallContainer = document.createElement('div');
    NewSmallContainer.setAttribute('class', 'individualleftcont');

    const NewTitle = document.createElement('h4');
    NewTitle.setAttribute('class', 'individualleft');
    NewTitle.innerText = movie.title;

    const NewPoster = document.createElement('img');
    NewPoster.setAttribute('src', movie.poster);
    NewPoster.setAttribute('class', 'individualleft');

    const NewButton = document.createElement('button');
    NewButton.setAttribute('id', 'showmore');
    NewButton.setAttribute('type', 'button');
    NewButton.innerText = 'Show More';

    const Break = document.createElement('br');
    const Breaktwo = document.createElement('br');

    const NewDelButton = document.createElement('button');
    NewDelButton.setAttribute('id', `${movie.muvie_id}`);
    NewDelButton.setAttribute('type', 'button');
    NewDelButton.innerText = 'Delete';
    // EVENT LISTENER FOR THE DELETE BUTTON
    NewDelButton.addEventListener('click', deleteFromFavorites)

    // apending elements to HTML page
    NewSmallContainer.appendChild(NewTitle);
    NewSmallContainer.appendChild(NewPoster);
    NewSmallContainer.appendChild(Break);
    NewSmallContainer.appendChild(NewButton);
    NewSmallContainer.appendChild(Breaktwo);
    NewSmallContainer.appendChild(NewDelButton);
    NodeContainer.appendChild(NewSmallContainer);
    console.log('appending PSQL movies ended!');
  }); // end of foreach
}

function renderAPI(movies) {
  //DUUUUUH DUDE you are passing this after a .then((data)=> {renderAPI(data!!!!!)})
  console.log('---> inside renderAPI front end');
  // clearing results before going to a new search
  document.getElementById('showapi').innerHTML = "";
  // console.log(document.getElementsByClassName('individualrightcont') === true);
  // if (document.getElementsByClassName('individualrightcont')) {clearResults('right')};
  // pointing at the DIV to catch the searched movie
  const NodeContainer = document.getElementById('showapi');

  // creating individual elements
  const NewSmallContainertwo = document.createElement('div');
  const NewTitle = document.createElement('h4');
  const NewPoster = document.createElement('img');
  // NewPoster.setAttribute('style', 'height: 445px, width: 300px');
  const Break = document.createElement('br');
  const NewButton = document.createElement('button');

  // setting attributes to new elements
  NewSmallContainertwo.setAttribute('class', 'individualrightcont');
  NewTitle.setAttribute('class', 'individualright');
  NewPoster.setAttribute('class', 'individualright');
  NewButton.setAttribute('id', 'addtodb');
  NewButton.setAttribute('type', 'button');

  // setting values to new elements
  // INFORMATION COMING FROM OMDB properties are named with capital letters
  NewTitle.innerText = movies.Title;
  console.log(movies.Title);
  NewPoster.setAttribute('src', movies.Poster);
  console.log(movies.Poster);
  NewButton.innerText = 'Add to Favs';

  // need to add event listener during button creation to lead to add function
  NewButton.addEventListener('click', () => {
    event.preventDefault();
    addToFavorites(movies);
    document.getElementById('showapi').innerHTML = "";
  });

  // IM MASHING THIS ALL UP TOGETHER because FORMS!
  const formCatcher = document.createElement('form');
  formCatcher.setAttribute('id', 'submitthatshit')
  // not giving it any actions or methods.
  // formCatcher.setAttribute('method', 'post')
  // formCatcher.setAttribute('action', '/api/')

  // creating hidden forms to take values from later on
  const inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'hidden');
  inputTitle.setAttribute('id', 'inputTitle');
  inputTitle.setAttribute('value', `${movies.Title}`);
  const inputReleased = document.createElement('input');
  inputReleased.setAttribute('type', 'hidden');
  inputReleased.setAttribute('id', 'inputReleased');
  inputReleased.setAttribute('value', `${movies.Released}`);
  const inputRuntime = document.createElement('input');
  inputRuntime.setAttribute('type', 'hidden');
  inputRuntime.setAttribute('id', 'inputRuntime');
  inputRuntime.setAttribute('value', `${movies.Runtime}`);
  const inputPoster = document.createElement('input');
  inputPoster.setAttribute('type', 'hidden');
  inputPoster.setAttribute('id', 'inputPoster');
  inputPoster.setAttribute('value', `${movies.Poster}`);
  const inputImdbRating = document.createElement('input');
  inputImdbRating.setAttribute('type', 'hidden');
  inputImdbRating.setAttribute('id', 'inputImdbRating');
  inputImdbRating.setAttribute('value', `${movies.imdbRating}`);
  const inputImdbID = document.createElement('input');
  inputImdbID.setAttribute('type', 'hidden');
  inputImdbID.setAttribute('id', 'inputImdbID');
  inputImdbID.setAttribute('value', `${movies.imdbRating}`);
  const inputPlot = document.createElement('input');
  inputPlot.setAttribute('type', 'hidden');
  inputPlot.setAttribute('id', 'inputPlot');
  inputPlot.setAttribute('value', `${movies.Plot}`);

  // apending the forms into the div
  formCatcher.appendChild(inputTitle);
  formCatcher.appendChild(inputReleased);
  formCatcher.appendChild(inputRuntime);
  formCatcher.appendChild(inputPoster);
  formCatcher.appendChild(inputImdbRating);
  formCatcher.appendChild(inputImdbID);


  // apending values to HTML page
  NewSmallContainertwo.appendChild(NewTitle);
  NewSmallContainertwo.appendChild(NewPoster);
  NewSmallContainertwo.appendChild(Break);
  NewSmallContainertwo.appendChild(NewButton);
  NewSmallContainertwo.appendChild(formCatcher);
  NodeContainer.appendChild(NewSmallContainertwo);
  console.log('done!!!');

}

// FUNCTION: what the fuck man, event?? you could be passing on the data object!!!!!!!!!
function addToFavorites(movies) {
  console.log('---> inside addToFavorites');
  console.log("yeah I'm that kinda guy with three console logs");
  console.log(movies);
  // so this is totally new to me, had to take resource in puppies API from rafa
  // I think I might have gotten it
  // I hve to create a payload obj with the key pair values that I'm sending over to PSQL
  // scratch that, I'm just gonna pass the WHOLE DATA object from a .then(data => { addToFavorites(data)})

  console.log(`checking if values work for the object ${document.getElementById('inputTitle').value}`);
  // preventing default for BUTTON??!!
  //  WHY CREATE YOUR OBJECT WHEN YOU HAVE THE DATA OBJECT COMING FROM A .THEN((DATA) => { })
  // let bodeeContent = {
  //     title: document.getElementById('inputTitle').value,
  //     released: document.getElementById('inputReleased').value,
  //     runtime: document.getElementById('inputRuntime').value,
  //     poster: document.getElementById('inputPoster').value,
  //     imdbrating: document.getElementById('inputImdbRating').value,
  //     imdbid: document.getElementById('inputImdbID').value,
  //   };
    // knowledge from dan: you can't see correctly an object in console log
    // if you don't
  // console.log(`DA PEILOD`, bodeeContent)
  const bodee = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(movies)
  };
  console.log(`Proper body object:`, bodee);

  fetch('/api/currentMovies', bodee)
    .then(() => {
      // document.getElementById('showapi').innerHTML = "";
      showAllCurrentSavedMovies();
    })
    .catch(error => {
      console.log(error);
    })
}

function deleteFromFavorites(event) {
  console.log('---> inside deleteFromFavorites front end');
  debugger
  // Im parseinting to make sure it's a number and not some other shit
  let newId = Number.parseInt(event.target.id);
  // credits to Sabrina Mesa for helping me with this one
  fetch(`/api/currentMovies/${newId}`, { method: 'DELETE', })
    .then(() => {
      showAllCurrentSavedMovies();
    })
    .catch(error => {
      console.log(error);
  })
}

// FUNCTION: removes all items on the search field
// ARGS: none, will target container divs by their class
function clearResults(side) {
  console.log('inside of CLEAR RESULTS')
  // making an if statement to be able to reuse this code to
  // delete the elements on the right and left too
  if( side === 'right') {
    // target parent node
    const NodeParentContainer = document.getElementById('showapi');
    // targetting the child node REMEMBER IT'S a FUCKING ARRAY!!
    const NodeChildToDelete = document.getElementsByClassName('individualrightcont');
    console.log(`---> size of Node array RIGHT ${NodeChildToDelete.length}`);
    // iterating through the array backwards
    for(let i = NodeChildToDelete.length-1; i <= 0; i-- ) {
      NodeParentContainer.removeChild(NodeChildToDelete[i]);
    }

  } else if(side === 'left') {
    // target parent node
    const NodeParentContainer = document.getElementById('showdb');
    // targetting the child node ITS AN ARRAY!!
    const NodeChildToDelete = document.getElementsByClassName('individualleftcont');
    console.log(`---> size of Node array LEFT ${NodeChildToDelete.length}`);
    for(let i = NodeChildToDelete.length-1; i >= 0; i-- ) {
      console.log(`deleting child ${i}`);
      NodeParentContainer.removeChild(NodeChildToDelete[i]);
    }
  }
  // delete targetted elements

}

// by choosing to run async defer inside of my script tag
// im making the process of rendering the movie asynchronous
showAllCurrentSavedMovies();
