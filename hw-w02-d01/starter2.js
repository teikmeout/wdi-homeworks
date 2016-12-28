console.log('starter2.js linked');

//code goes here

//TODO- put counter as global variable to see what element of the zone
var counter = 0;
//TODO- create array of each zone-1 zone-2 shuffled by hand
var zoneArray = ['zone-1', 'zone-3', 'zone-4', 'zone-2'];
//TODO- select all divs with querySelectorAll by .zones
var $zones = document.querySelectorAll('.zone');
//TODO- create a initialization for loop that puts the event listeners
function giveEventListeners(event) {
  for (var i = 0; i < $zones.length; i++){
    $zones[i].addEventListener('mouseover', makeGreen);
    $zones[i].addEventListener('mouseout', makeWhite);
  }
}

//function to check when it's mousedover and review it's id
function makeGreen(event) {
  //since it will only be green when it matches the arry order
  if (event.target.id === zoneArray[counter]) {
    event.target.style.backgroundColor = 'green';
  } else event.target.style.backgroundColor = 'red';
  console.log(this);

function makeWhite(event) {
  event.target.style.backgroundColor = 'white';
}
