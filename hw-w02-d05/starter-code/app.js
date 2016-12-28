//link verification
console.log('app.js has been opened correctly');
//event listener to wait for DOM to be added
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  // calling the board checker to check size right after DOM loads
  //adding event listener for keydown on the whole site
  document.addEventListener('keydown', keyPress);
  //adding event listener for button
  document.querySelector('#resetButton').addEventListener('click', startPosition);
  //calling start position
  startPosition();
  moveCandy();
});



//point at the container
const board = document.querySelector('#gameBoard');
//point at red box
var redBox = document.getElementById('player1');
//point at blueboxue box
const blueBox = document.getElementById('player2');
//point at candy chase
const candyBall = document.getElementById('candy');
// determines speed in which blocks move
const speed = 20;

const boardSize = checkBoardSize();

//Keypress function that takes the event that generated it
//and moves redBox and blueBox accordingly
function keyPress(event){
  // alert event created to review keycode press
  console.log(event.keyCode);
  switch (event.keyCode) {
    // for keystroke right MOVES RED
    case 39: //39 is event for right arrow
      //take old offset value and add 1;
      let oldLeftRed = redBox.offsetLeft;
      //point at the player 1 and add to left value of 2
      redBox.style.left = `${oldLeftRed + speed}px`;
      //check if this has been executed
      console.log(`moved red box ${speed}px right`);
      //calling the checker everytime redBox moves
      checkIfAtBorderRight(redBox);
      break;
    case 40: //40 is event for DOWN arrow
      let oldTopRed = redBox.offsetTop;
      redBox.style.top = `${oldTopRed + speed}px`;
      console.log(`moved red box ${speed}px down`);
      break;
    case 37: //37 is LEFT arrow
      redBox.style.left = `${redBox.offsetLeft - speed}px`;
      console.log(`moved red box ${speed}px left`);
      break;
    case 38: //38 TOP arrow
      redBox.style.top = `${redBox.offsetTop - speed}px`;
      console.log(`moved red box ${speed}px up`);
      break;
    //for keystroke z MOVES BLUE
    case 68: //90 is event for 'd'
      let oldLeftBlue = blueBox.offsetLeft;
      blueBox.style.left = `${oldLeftBlue + speed}px`;
      console.log(`moved blue box ${speed}px left`);
      //calling the checker everytime blueBox moves
      checkIfAtBorderRight(blueBox);
      break;
    case 87: //letter w
    // deleting off the offset reduces space between objetc and top border
      blueBox.style.top = `${blueBox.offsetTop - speed}px`;
      console.log(`moved blue box ${speed}px up`);
      break;
    case 65: //letter a
      blueBox.style.left = `${blueBox.offsetLeft - speed}px`;
      console.log(`moved blue box ${speed}px left`);
      break;
    case 83: //letter s
      blueBox.style.top = `${blueBox.offsetTop + speed}px`;
      console.log(`moved blue box ${speed}px down`);
      break;
//default move gives out log
    default:
      console.log('wrong letter press!');
      break;
  }
}

// function that checks the size of the div gameboard to delimit areas
function checkBoardSize(){
  // saving height and width of dive into variables
  let divHeight = board.offsetHeight;
  let divWidth = board.offsetWidth;
  //saving height and width inside an array
  var sizeArray = [divWidth, divHeight];
  console.log(`${sizeArray[0]},${sizeArray[1]}`);
  return sizeArray;
}

//checked function that tells you if box is at border
function checkIfAtBorderRight(whatBox) {
  //checking for right border
  //right limit of redbox is it's offsetLeft value + width VS the width of the board
  if ((whatBox.offsetLeft + whatBox.offsetWidth) > board.offsetWidth) {
    console.log(`surpased the ${board.offsetWidth}px limit`);
    alert('${whatBox} is the winner!');
  } else console.log('not there yet');
}

// function created to determine start position for both boxes
function startPosition() {
  //get the half height of div
  //separate in fourths
  let vertical = Math.round(board.offsetHeight / 3);
  let candyVertical = Math.round(board.offsetHeight / 2);
  let vertical2 = vertical * 2;
  let horizontal = 0;
  //align new element in each fourth
  redBox.style.top = `${vertical}px`;
  redBox.style.left = `${horizontal}px`;
  blueBox.style.top = `${vertical2}px`;
  blueBox.style.left = `${horizontal}px`;
  console.log('players 1 and 2 back to start');
  candy.style.top = `${candyVertical}px`;
  candy.style.left = 0;
}

//function to add values automatically to the left on candy
function addSpaceCandy() {
  let speedCandy = candy.offsetWidth + speed*1.5;
  candy.style.left = `${speedCandy}px`;
  moveCandy();
}
//function to call addSapceCandy
function moveCandy() {
  var theMovement = setTimeout(addSpaceCandy, 1000);
}






