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
var lands = ['The Shire',
 'Rivendell',
  'Mordor'];

// An example of using query selector
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section');
  $section.setAttribute("id", "Middle-Earth");

  var $article = document.createElement('article');
  var $shire = document.querySelectorAll('article')[0];

  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0 ; i < lands.length ; i++) {
   var $article = document.createElement('article');
   // inside each article tag include an h1 with the name of the land
   var $h1 = document.createElement('h1');
   $h1.textContent = lands[i];
   var nameinArray = lands[i].toLowerCase().split(" ")
   var nameNoSpace = nameinArray.join("-")

   // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
   $article.setAttribute("class", nameNoSpace)
   $article.appendChild($h1);
   $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
}

makeMiddleEarth();


// Part 2
//add parameters to function to receive array
function makeHobbits(arr) {
  //point to first article element of the page
  var $article = document.querySelector('article');
  //outside the loop create a ul
  var $newUl = document.createElement('ul');

  //inside a for loop
  for (var i=0; i<arr.length; i++){
    //create <li>
    var $newLiHobbits = document.createElement('li');
    //add html from hobbits
    $newLiHobbits.textContent = arr[i];
    // add class ="hobbit" to each <li>give each hobbit a class of hobbit
    $newLiHobbits.setAttribute('class', 'hobbit');
    //append <li class
    $newUl.appendChild($newLiHobbits);
  }
  $article.appendChild($newUl);
}
makeHobbits(hobbits);


// Part 3
function keepItSecretKeepItSafe() {
  //aim pointer at frodo
  var $Nodefrodo = document.getElementsByClassName('hobbit')[0];
  // create a div with an id of 'the-ring'
  var $theRing = document.createElement('div');
  $theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  $theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add the ring as a child of Frodo
  $Nodefrodo.appendChild($theRing);
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies(compas) {
  //point at rivendell
  var $NodeRivendell = document.getElementsByClassName('rivendell')[0];
  // create an aside tag
  var $aside = document.createElement('aside');

  // attach an unordered list of each 'buddy' in the aside
  //create ul
  var $newUl = document.createElement('ul');
  //inside a for, add li to ul
  for (var i = 0; i<compas.length; i++){
    var $li = document.createElement('li');
    $li.textContent = compas[i];
    $newUl.appendChild($li);
  }
  $aside.appendChild($newUl);
  // insert your aside as a child element of rivendell
  $NodeRivendell.appendChild($aside);
}
makeBuddies(buddies);


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  // var $nodeDudes = document.getElementsByClassName('rivendell')[0].querySelector('ul').querySelectorAll('li')[3];
  // var $dudesList = document.$nodeDudes
  var $nodeDudes = document.getElementsByClassName('rivendell')[0].querySelector('ul').querySelectorAll('li')[3];
  $nodeDudes.textContent = "Aragorn";
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  //assemble the hobbits and move them to Rivendell
  //selecting the ul of the hobbits
  var $NodeUlHobbits = document.getElementsByClassName('hobbit')[0].parentNode;
  //selecting the rivendel space, inside the aside div
  var $NodeAside = document.getElementsByTagName('aside')[0];
  $NodeAside.appendChild($NodeUlHobbits);
  // how does appendChild work on an element that already exists on the page?
}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  var newDivFellowship = document.createElement('div');
  newDivFellowship.setAttribute('id', 'the-fellowship');
  //point to rivendell class
  var $NodeRivendell = document.getElementsByClassName('rivendell');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  //make a ul to receive all the <li>
  var newUlForFellowship = document.createElement('ul');

  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell

  //point to all the <li>
  var AllLi = document.querySelectorAll('li');
  //make a for to travel the lists one by one
  for (var i=0; i<AllLi.length; i++){
    //option a using ul and sending ul into div
    // newUlForFellowship.appendChild(AllLi[i]);

    //option b using li into div directly
    newDivFellowship.appendChild(AllLi[i]);
    //alert( AllLi[i] + "the all joined the party!");
  }
  alert("the all joined the party!");
  //this is one working way using ul inside of the div
  //newDivFellowship.appendChild(newUlForFellowship);
  //$NodeRivendell[0].appendChild(newDivFellowship);

  //this is another working way
  $NodeRivendell[0].appendChild(newDivFellowship);
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  //select gandalf text node by targetting query
  //selecting only the first item of the array
  var $NodeGandalf = document.querySelector('li');
  //change add content " the white"
  $NodeGandalf.textContent = "Gandalf the White";
  // apply style to the element
  // add a gray 3px border
  // use documentation if you're unsure how to add style with javascript!
  $NodeGandalf.style.border = ("3px solid gray");
  //giving font weight
  // $NodeGandalf.style.fontWeight = ('600');

}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("the horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  var $NodeBoromir = document.getElementById('the-fellowship');
  var $Boromir = document.getElementsByTagName('li')[4];
  $NodeBoromir.removeChild($Boromir);
}
hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  //create var to point at frodo
  var $hobbits = document.getElementsByClassName('hobbit');

  for (var i=0; i<$hobbits.length; i++){
    if ($hobbits[i].textContent == "Frodo Baggins" || $hobbits[i].textContent == "Samwise 'Sam' Gamgee"){
      document.getElementsByClassName('mordor')[0].appendChild($hobbits[i])
    }
  }

  //create var to point at sam
  //move frodo and
  // add a div with an id of 'mount-doom' to Mordor
}
// itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
// weWantsIt();


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain();
