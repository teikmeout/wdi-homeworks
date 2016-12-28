console.log('starter1.js linked');

//code goes here
//PART 1 When the mouse enters any of the zones change its background color to green
//point to divs by class = "zone"
var $zoneDivs = document.querySelectorAll('.zone');
//make a for loop that gives event listener to every div

//making a variable to check if all green
for (var i = 0; i < $zoneDivs.length; i++) {
  $zoneDivs[i].addEventListener('mouseover', turnGreen);
  //console.log("added mouseover to " + i);
  $zoneDivs[i].addEventListener('mouseout', turnWhite);
  //console.log("added mouseout to " + i);
  $zoneDivs[i].addEventListener('click', removeTurnWhite);
}

//make function of turn green
function turnGreen() {
  //TODO- change this.style.backgroundColor to this.className += ' green'
  // this.style.backgroundColor = 'green';
  //checkAllGreen;
  this.className += ' green';
  console.log(this.className);
}
//make function of turn white
function turnWhite() {
  // this.style.backgroundColor = 'white';
  //TODO- change this.style.backgroundColor to this.className .split(" ", [0]);
  //splitting the className to remove green and only keep .zone
  this.setAttribute('class', this.className.split(' ')[0])
  console.log(this.className);

}




//PART 3 IF CLICKED it locks into green
//already have divs selected on top. need to add event listener to loop
//that will put in function to remain green and delete mouseout listener
function removeTurnWhite() {
  this.removeEventListener('mouseout', turnWhite);
  //this.setAttribute('class', 'zone clicked');
  //checking if all elements are green with the Class name green
  if (document.getElementsByClassName('green').length === 4){
    console.log('congratulations!');
  }
}
  //this.setAttribute('class', 'clicked');
  //checkAllGreen();
  //todosVerdes();
//   var counter = 0;
//   for (var i = 0; i < document.querySelectorAll('.zone').lenght; i++) {
//     //checking if I got inside the for loop
//     //console.log('inside the loop ' + i + 'run');
//     if (document.querySelectorAll('.zone')[i].style.backgroundColor === 'green') {
//       counter = counter + 1;
//       // howManyAreGreen += 1;
//       // console.log('found a green one on ' + i);
//     }
//   }
//   if (counter === 4){
//     console.log('congratualtions!');
//   }
// }

// var counter = 0;
//create a function that checks if all green
// function checkAllGreen() {
//   //to verify that I'm inside the checkAllGreen
//   console.log('checking if all green... starting for loop')
//   //made a counter to check if all elements are green
//   //made it outside the scope of for and if

//   for (var i = 0; i < document.querySelectorAll('.zone').lenght; i++) {
//     //checking if I got inside the for loop
//     //console.log('inside the loop ' + i + 'run');
//     var zn = 'zone-'+i;
//     if (document.getElementById('zone-' + i ).style.backgroundColor === 'green') {
//       counter = counter + 1;
//       // howManyAreGreen += 1;
//       // console.log('found a green one on ' + i);
//     }
//   }
//   if (counter === 4){
//     console.log('congratualtions!');
//   }
// }

// function todosVerdes(){
//   if (document.getElementById('zone-1').style.backgroundColor === document.getElementById('zone-2').style.backgroundColor === document.getElementById('zone-3').style.backgroundColor === document.getElementById('zone-4').style.backgroundColor) {
//     console.log('congratulations!');
//   }
// }




