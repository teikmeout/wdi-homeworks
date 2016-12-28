'use strict';
//DOM listener
$(document).ready(() => {
  console.log('DOM LOADED AND READY');
  //pointing at stuff
  const $search = $('.search-btn'),
        $whatMovie = $('input'),
        $movieName = $('h5'),
        $image = $('img'),
        $moviesDiv = $('#movies'),
        $deleteBtn = $('.delete');

  //FUNCTION: contains the ajax call and the parameters fo the call
  //ARGUMENTS: needs none
  const getData = function(){
    //calling the parser
    let searchField = parseMovieSearch();
    console.log(searchField);
    //ajax call
    $.ajax({
      url: 'http://www.omdbapi.com/?',
      method: 'GET',
      dataType: 'json',
      data: {
        //movie title search
        t: $whatMovie.val()
        //this is were the query is done
      }

    })
    .done(movie => {
      //check if theres data inside the search we just fired
      console.log(movie);
      //change the title for the movie in <h5>
      // $movieName.text(movie.Title);
      // $image.attr('src', movie.Poster);
      handleResponse(movie);
    }) //end done
    .fail(err => {
      //actions if search is failed
    }) // end fail
  }; // end getData

  //FUNCTION: adds event listener to click on search button
  //ARGUMENTS: takes none
  const addAJAXFunction = function(){
    //adding the event listener in the seach bar and firing getData when clicked
    $search.click(getData);
    console.log('added event listener to search button');
    //adding event listener to delete button
    $deleteBtn.on('click', deleteFirstDiv);
    console.log('added event listener to delete button');

  };

  //FUNCTION: takes data from getData and appends that info inside
  const appendMovie = function(name,imagePath){
    //creating elements to append
    let $newDiv = $('<div>').attr('class', 'four columns'),
        $newH5 = $('<h5>').text(name),
        $newImage = $('<img>').attr('src', imagePath),
        $newDeleteButton = $('<button>').attr('class', 'u-full-width delete');

    $newDeleteButton.css('position', 'relative');
    $newDeleteButton.text('x');
    $newDeleteButton.on('click', deleteFirstDiv);
    //appending to DOM
    $newDiv.append($newH5);
    $newDiv.append($newImage);
    $newDiv.append($newDeleteButton);

    $moviesDiv.append($newDiv);
  };

  //FUNCTION: takes in the movie object and then fires out other cells
  //ARGUMENTS: takes in the data from the request
  const handleResponse = function(movieObject){
    //making sure that there was a movie with that name and that it has cover image
    if (movieObject.Response === 'True' && movieObject.Poster !== "N/A") {
      appendMovie(movieObject.Title, movieObject.Poster);
    } else console.log('no movie found with that name');
  };

  const deleteFirstDiv = function(event) {
    debugger
    //point at first element of the movies divs
    // let $firstMovieDiv = $('#movies').children().eq(0);
    //delete that same element
    $(this).parent().remove();
  };

//FUNCTION: takes the value on input space and removes spaces and puts +
//ARGUMENTS: takes none
  const parseMovieSearch = () => {
    //splitting the string where there are spaces
    let newString = $whatMovie.val().split(" ");
    console.log(`split string ${newString}`);
    //joining that array with +
    newString = newString.join('+');
    console.log(`concatenated string ${newString}`);
    return newString;
  }



  //calling the function of add ajax function
  addAJAXFunction();
}); //END DOM loader
