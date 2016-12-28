console.log('linked!!');

function getURL() {
  console.log('inside getURL');
  // icking up the pathname from the URL from the window.location
  const url = window.location.pathname;
  // splitting the string obtained from the path where there is a '/'
  const arrayOfStrings = url.split('/');
  for (let i = 0; i < arrayOfStrings.length; i++) {
    console.log(`${i} = ${arrayOfStrings[i]}`);
  }
  // if theres apartments, do indiv apt show
  if (`${arrayOfStrings[2]}` === 'apartments') {
    console.log('going to getapt');
    getApt(arrayOfStrings[3]);
  } else if(`${arrayOfStrings[2]}` === 'buildings') {
    console.log('going to getbld');
    getBuilding(arrayOfStrings[3]);
  } else console.log('what the fuck');
}
getURL();

function getApt(id) {
  // goes to the right apartments route treating PSQL as an API
  fetch(`/api/apartments/${id}`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      // sending the whole fucking data object rn
      renderApt(data);
    })
    .catch((err) => {
      console.log(err);
    })
}
// FUNCTION: renders one apartment data to page
// ARGS: takes the data from the .then() from the getApt to the API PSQL call
function renderApt(data) {
  console.log('-->  inside renderApt');
  const NodeContainer = document.querySelector('#putShitHere');

  // creating the elements of the DOM
  const NewSmallCont = document.createElement('div');
  NewSmallCont.setAttribute('class', 'show');

  const NewTitleHeadline = document.createElement('h1');
  NewTitleHeadline.setAttribute('class', 'show');
  const NewTitle = document.createElement('p');
  NewTitle.innerHTML = 'Apartment Number: ';
  NewTitle.setAttribute('class', 'show');
  NewTitleHeadline.innerHTML = `${data.name}`;

  const NewPriceHead = document.createElement('h3');
  NewPriceHead.setAttribute('class', 'show');
  NewPriceHead.innerHTML = 'Price: ';
  const NewPrice = document.createElement('p');
  NewPrice.setAttribute('class', 'show');
  NewPrice.innerHTML = `${data.price}`;

  const NewsqftHead = document.createElement('h3');
  NewsqftHead.setAttribute('class', 'show');
  NewsqftHead.innerHTML = 'Square Feet: ';
  const Newsqft = document.createElement('p');
  Newsqft.setAttribute('class', 'show');
  Newsqft.innerHTML = `${data.sqft}`;


  const NewBedsHead = document.createElement('h3');
  NewBedsHead.setAttribute('class','show');
  NewBedsHead.innerHTML = 'Bedrooms: ';
  const NewBeds = document.createElement('p');
  NewBeds.innerHTML = `${data.bedrooms}`;
  NewBeds.setAttribute('class', 'show');


  const NewRoomsHead = document.createElement('h3');
  NewRoomsHead.setAttribute('class', 'show');
  NewRoomsHead.innerHTML = 'Bedrooms: ';
  const NewRooms = document.createElement('p');
  NewRooms.setAttribute('class', 'show');
  NewRooms.innerHTML = `${data.bedrooms}`;

  // appending all things
  NewSmallCont.appendChild(NewTitleHeadline);
  NewSmallCont.appendChild(NewTitle);
  NewSmallCont.appendChild(NewPriceHead);
  NewSmallCont.appendChild(NewPrice);
  NewSmallCont.appendChild(NewsqftHead);
  NewSmallCont.appendChild(Newsqft);
  NewSmallCont.appendChild(NewBedsHead);
  NewSmallCont.appendChild(NewBeds);
  NewSmallCont.appendChild(NewRoomsHead);
  NewSmallCont.appendChild(NewRooms);
  NodeContainer.appendChild(NewSmallCont);
}

// render on page function
function getBuilding(id) {
  // goes to the right apartments route treating PSQL as an API
  fetch(`/api/buildings/${id}`)
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      // renderOnPageBld(data);
    })
    .catch((err) => {
      console.log(err);
    })
}
