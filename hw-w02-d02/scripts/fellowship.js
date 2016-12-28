console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using jQuery selector for <body>
var $body = $('body');


// Part 1
function makeMiddleEarth() {

  // Create a <section> tag with id of 'middle-earth'
  var $middleEarthSection = $("<section id='middle-earth'></section>");

  // Loop through lands array, for each land create a new <article> tag
  // and append an <h1> tag with text set to the land name
  for (var i = 0; i < lands.length; i++) {
    $middleEarthSection.append($('<article></article>').append($('<h1></h1>').text(lands[i])));
  }

  // Append Middle-Earth to your document body
  $body.append($middleEarthSection);
}
makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // each hobbit should be a list item, with text showing their name
  // give each hobbit a class of hobbit
  //create new <ul>, save it to variable
  var $hobbitsUl = $('<ul></ul>');
  //loop throught the list of hobbits to create the <li>
  for (var i = 0; i < hobbits.length; i++) {
    //create <li>
    var $newHobbit = $('<li class = "hobbit"></li>');
    //populate it with text
    $newHobbit.text(hobbits[i]);
    //give every hobbit the class of hobbit
    //append it to <ul>
    $hobbitsUl.append($newHobbit);
  }
  //append Ul to middle earth
  $('article').eq(0).append($hobbitsUl);
}
makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var $newDiv = $('<div></div>');
  //add new property of id
  $newDiv.prop('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  $newDiv.addClass('magic-imbued-jewelry');
  // add the ring as a child of Frodo
  $('.hobbit').eq(0).append($newDiv);
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  var $newAside = $('<aside></aside>');
  //create a new <ul>
  var $newUl = $('<ul></ul>').addClass('buddies');
  // attach an unordered list of each 'buddy' in the aside
  //create a loop to iterate through all elements in array
  for (var i = 0; i < buddies.length; i++){
    //create every new <li> with its own content
    $newUl.append($('<li></li>').text(buddies[i]));
  }
  // insert your aside as a child element of rivendell
  $('article').eq(1).append($newUl);
}
makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('li:contains("Strider")').text('Aragorn');
  //point to Ul list of buddies??
//   var $buddies = $('ul').eq(1).find('li');
//   //make a loop that will run through all <li> items
//   for (var i = 0; i < $buddies.length; i++){
//     if ($buddies[i].text === 'Strider'){
//       console.log('found strider');
//       $buddies[i].text = 'Aragorn';
//     }
//   }
//   //if strider make aragorn
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  //target <ul> of hobitts by id parent node
  var $hobbitsUl = $('.hobbit').parent();
  //point to parent node of the rivendell <ul>
  var $rivendellUl =  $('article').eq(1);
  //appending the UL to the article
  $rivendellUl.append($hobbitsUl);

}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  var $newDivFellow = $('<div id = "the-fellowship"></div>');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  //target all the <li>
  var $allLi = $('li');
  //for loop iteration with all <li>
  for (var i = 0; i < $allLi.length; i++) {
    $newDivFellow.append($allLi[i]);
    //alert after each guy joins. so anoying
    //alert($allLi[i].textContent + " joined the party!");
  }
  // append the fellowship div to rivendell
  $('article').eq(1).append($newDivFellow);
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  //target all <li> items
  $('li:contains("Gandalf")').text('Gandalf the White');
  // apply style to the element
  // add a gray 3px border
  $('li:contains("Gandalf the White")').css({'border':'3px gray solid'});
  // use documentation if you're unsure how to add style with javascript!
}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('the horn of gondor has been blown!');
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  $('li:contains("Boromir")').remove();
}
hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor

  //create div with id mountdoom
  var $newDoom = $('<div id = "mount-doom"></div>');
  //select Frodo and select sam
  var $whereFrodo = $('li:contains("Frodo Baggins")');
  var $whereSam = $('li:contains("Samwise \'Sam\' Gamgee")');
  //var $newUl = $('<ul>');
  //$newUl.append($whereFrodo);
  //$newUl.append($whereSam);
  $newDoom.append($whereFrodo);
  $newDoom.append($whereSam);
  // add a div with an id of 'mount-doom' to Mordor
  $('article').eq(2).append($newDoom);
}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum'
  var $newDivGollum = $('<div id = "gollum"></div>');
  //and add it to Mordor
  $('article').eq(2).append($newDivGollum);
  // Remove the ring from Frodo and give it to Gollum
  //TODO find ring under frodo
  //ring is child of frodo and has ID of

  $newDivGollom.$('#the-ring')
  // Move Gollum into Mount Doom
}
// weWantsIt();

// //add new property of id
//   $newDiv.prop('id', 'the-ring');
//   // give the div a class of 'magic-imbued-jewelry'
//   $newDiv.addClass('magic-imbued-jewelry');


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain();
