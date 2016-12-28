console.log('Script.js linked!');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  keshasAlbums();
  keshasArtwork();
  keshasLatestSongs()
});

//FUNCTION: takes in data from request to iTunes API
//ARGUMENTS: takes none
function keshasAlbums() {
  //pointing at the album div to append list
  let $listContainer = document.querySelector('.list');
  //creating <ul> to add to div
  let $newUl = document.createElement('ul');
  //for loop to iterate through all elements
  for (let i = 0; i < albumResults.results.length; i++) {
    //new <li> item to append an album link to
    let $newLi = document.createElement('li');
    //new <anchor> element to link album info to
    let $newLink = document.createElement('a');
    //changing content inside anchor tag
    $newLink.innerHTML = albumResults.results[i].collectionCensoredName;
    //changing attributes to anchor tag
    $newLink.setAttribute('href', albumResults.results[i].collectionViewUrl);
    //appending process
    $newLi.appendChild($newLink);
    $newUl.appendChild($newLi);
  }
  //appending $newUl list to body
  $listContainer.appendChild($newUl);
}

//FUNCTION: takes in data from request to iTunes API
//ARGUMENTS: takes none
function keshasArtwork() {
  //pointing at the div .artwork
  let $artworkDiv = document.querySelector('.artwork');
  for (let i = 0; i < albumResults.results.length; i++) {
    //checking if image is explicit or not
    if (albumResults.results[i].collectionExplicitness != 'explicit') {
      //creating new div with class artWorkImage
      let $newArtworkSmall = document.createElement('div');
      //adding class to newly created div
      $newArtworkSmall.classList.add('artworkSmall');
      //creating new img with src from response
      let $newImage = document.createElement('img');
      $newImage.setAttribute('src', albumResults.results[i].artworkUrl100);
      // $newImage.setAttribute('height', '100px');
      // $newImage.setAttribute('width', '100px');
      //appending image to div
      $newArtworkSmall.appendChild($newImage);
      $artworkDiv.appendChild($newArtworkSmall);
    }
  }
}

//FUNCTION: takes in data from another different request
//ARGUMENTS: none
function keshasLatestSongs() {
  let $newUl = document.createElement('ul');
  let $recentSongsDiv = document.querySelector('.recetSongs');
  //create an array to save in order the index of the newest elements
  // let arrayToOrder = [];
  // arrayToOrder.push(0);
  // //for loop starting from 1 since 0 is already positioned
  // for(let i = 1; i < songsResults.results.length; i++) {
  //   console.log(songsResults.results[i].releaseDate.slice(0,4));
  //   //this part compares the sliced dates of the years of the recent albums of kesha
  //   if (parseInt(songsResults.results[i].releaseDate.slice(0,4)) > parseInt(songsResults.results[i-1].releaseDate.slice(0,4))) {
  //     arrayToOrder.unshift(i);
  //     console.log(`added ${songsResults.results[i].releaseDate.slice(0,4)} to the top`);
  //   } else {
  //     arrayToOrder.push(i);
  //     console.log(`added ${songsResults.results[i].releaseDate.slice(0,4)} to the bottom`);
  //   }
  // }
  // console.log(`the length of the array is ${arrayToOrder.lenght}`);
  //entering a loop to iterate the array in order
  for(let j = 0; j < 5; j++) {
    //creating new <li> element
    let $newLi = document.createElement('li');
    let $newLink = document.createElement('a');
    $newLink.setAttribute('href', albumResults.results[j].trackViewUrl);
    $newLink.innerHTML = songsResults.results[j].trackName;
    $newLi.appendChild($newLink);
    $newUl.appendChild($newLi);
  }
  $recentSongsDiv.appendChild($newUl);
}


