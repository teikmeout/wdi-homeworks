/********************************
*
* DO YOUR ASSIGNMENT IN THIS FILE
*
*********************************/

// TEST EARLY AND OFTEN - node starter.js in the terminal
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all four steps specified below - each step needs a console.log statement - and follow the homework submission process (check the wiki!).

// EXAMPLE - Try running node starter.js before working on any of the parts and see what happens in the terminal.
// var givenVariable = 20;
// var doubledVariable = givenVariable * 2;
// var tripledVariable = givenVariable * 3;
// console.log(doubledVariable);
// console.log("EXAMPLE","tripledVariable",tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )



// STEP A: Pythagorean Theorem

var a = 1;
var b = 2;

var c;
// c equals to sqrt of a*a and b*b
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log('Step A Pytharogas');
console.log(c);
console.log('.......................');

// Write an expression here which computes
// the correct value of c based on the values of a and b

// Log your answer (the value of c) to the console



// STEP B: Basic Conversion

var pounds = 155;
var ratioToKg = 0.453592;
var kilograms;
kilograms = (pounds * ratioToKg);
console.log('Step B LB to KG');
console.log(kilograms + ' kg');
console.log('.......................');

// Write an expression here which computes
// the correct value of the variable kilograms

// Log your answer to the console



// STEP C: Old Modems

var sizeInGB = 25;
var ratio= 1024;
var ratioBit = 8;
var speed = 56; //speed in seconds
var sizeInKb;
var timeToDownload;
sizeInKb = ((sizeInGB * ratio)*ratio)*ratioBit;
// console.log('Step C')
// console.log(sizeInKb + ' kb');
//rounded up seconds cuz who needs .1 seconds of life
var timeToDownload= Math.round(sizeInKb / speed);
//could I define this as var secs, mins, hours;??
var remainingSecs;
var secs;
var remainingMins;
var minutes;
var remainingHours;
var days;
remainingSecs = timeToDownload % 60;
minutes = Math.round(timeToDownload / 60);
// console.log(remainingSecs + ' secs');
remainingMins = minutes % 60;
hours = Math.round(minutes / 60);
// console.log(remainingMins + ' mins');
remainingHours = hours % 24;
days = Math.round(hours / 24);

console.log('Step C 25GB at 56kbps = ');
console.log( days + ' days, ' + remainingHours + ' hrs, ' + remainingMins + ' mins, ' + remainingSecs + ' seg.');
console.log('.......................');




// Write an expression here which computes
// the correct value of the variable timeToDownload

// Log your answer to the console



// STEP D: Killer Caffeine

// For this part create you own appropriately named variables for
// any values you want to use

// Create a variable which will store the number of cups
// which will kill you

var bodyWeight = 220;
var avgCaffeine = 95
var caffeineRatio = 6/100;
var amountOfCafeine = (bodyWeight * caffeineRatio);
var cups = Math.round((amountOfCafeine * 1000) / avgCaffeine);
console.log('Step D caffeine for death.')
console.log(cups + 'cups');

// Compute the number of cups

// Log the answer to the console
