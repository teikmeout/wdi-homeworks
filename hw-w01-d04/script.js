// Enter your solutions for hw-w01-d04 here!
// Make sure to reference the readme.md for detailed instructions

// Part 1 - Objects
var bobby = {
  name: "Bobby King",
  nickname: "The Boddy",
  age: 56,
  weight: 300,
  favoriteThings: {
    movie: "The Net",
    food: "Lasagna",
    website: "www.github.com",
    hat: "red hat"
  },
  hobbies: [
    "lacrosse",
    "coding",
    "whiteboarding"
  ]
}

// 1. console.log Bobby's nickname
console.log("bobby's nickname: ");
console.log(bobby.nickname);
// 2. console.log Bobby's age
console.log("bobby's age: ");
console.log(bobby.age);
// 3. console.log Bobby's favorite movie
console.log("bobby's favorite movie: ");
console.log(bobby.favoriteThings.movie);
// 4. console.log Bobby's first hobby
console.log("bobby's first hobby: ");
console.log(bobby.hobbies[0]);
// 5. console.log Bobby's weight with extra 5lbs
bobby.weight += 5;
console.log("bobby's weight after shakeshack: ");
console.log(bobby.weight);

// Part 2 - Functions
// When you finish writing the functions, uncomment the function
// call to see the result

// 1.
function multiply(a, b) {
  return a*b;
};
console.log("multiply a time b: ");
console.log(multiply(3, 4));

// 2.
function maxOfThree(a, b, c) {
  //checking for equality
  if (a == b && a == c){
    return a;
  }else if (a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else return c;
};
console.log("max of three numbers: ");
console.log(maxOfThree(3, 4, 5));

// 3.
function howMuchCoffeeWillEndMe(weight) {
  // It's estimated that 6 grams per hundred pounds of body weight can cause
  // death! Given an 8oz cup of coffee has 95mg of caffeine, calculate how many
  // cups it takes to kill YOU (or the you that you want to be!).
var bodyWeight = weight;
var avgCaffeine = 95;
var caffeineRatio = 6/100;
var amountOfCaffeine = (bodyWeight * caffeineRatio);
return Math.round((amountOfCaffeine * 1000) / avgCaffeine);
}
console.log('how much coffe will end me: ');
console.log(howMuchCoffeeWillEndMe(200));

// 4(a)
// Your answer here
// 7 because var x = 3; doesn't modify the global variable


// 4(b)
// Your answer here
// 3 because x = 3; inside function modifies global varible
// in the lexical scoping.


// 4(c)
// Your answer here
// 7 because when giving an argument for the function it operates as
// the number it's assigned to and remains in the function without
// having to call up it's global variable, hence not modifying it at the end


// 5
// Your answer here
//undefined, 17, undefined. foo is undefined because it doesnt return
// it uses console.log. bar is the only function that returns correctly
//baz has a internally declared variable that will dissapear after
// finalizing the function, and its an empty return

// Part 3 - DOM

// 1. Change the background-color to blue
document.body.style.backgroundColor = 'blue';

// 2. Append a new <li> with the text 'Fix cars' to Dom's Favorite Things
//create the node
var newItem = document.createElement('li');
//add the content to the node
newItem.innerHTML = 'Fix Cars';
// add item to bottom of the list
var container = document.getElementsByTagName('ul')[0]
container.appendChild(newItem);

// 3. Remove the last <li> from Dom's Favorite Things
var node = document.getElementsByTagName('ul')[0];
var listPlace = document.querySelectorAll('ul li:last-child')[0];
node.removeChild(listPlace);
