
const Nodeaptbtn = document.getElementById('aptbtn');
const Nodebuildbtn = document.getElementById('buildbtn');

Nodeaptbtn.addEventListener('click', apartmentsFetch);
Nodebuildbtn.addEventListener('click', buildingsFetch);

// FUNCTION: removes all elements from the DOM to make a reload completely
// ARGS: none. I just point at the fucking page
function removeAll() {
  console.log('--> inside of remove ALL');
  const NodeDivContainer = document.querySelector('#displayAll');
  // THIS WILL CAUSE MEMORY LEAK SINCE I'M NOT REMOVING EVENT LISTENERS
  NodeDivContainer.innerHTML = "";
}

// FUNCTION: this function makes the fetch for ALL APTS
// ARGS: takes no arguments
function apartmentsFetch() {
  // goes to the right apartments route treating PSQL as an API
  fetch('/api/apartments')
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      renderOnPageApt(data);
    })
    .catch((err) => {
      console.log(err);
    })
}



function renderOnPageApt(datos) {
  console.log('---> inside renderOnPageApt');

  // running removeAll() to make sure page is empty
  removeAll();
  // point at the footer
  const NodeFooter = document.getElementById('displayAll');
  // create a looop with a forEach
  datos.forEach(dato => {
    // create elements for apending
    const NodeIndivContainer = document.createElement('div');
    const Nodeid = document.createElement('p');
    const Nodefloor = document.createElement('p');
    const Nodename = document.createElement('h3');
    const Nodeprice = document.createElement('p');
    const Nodesqft = document.createElement('p');
    const Nodebeds = document.createElement('p');
    const Nodebaths = document.createElement('p');
    const NodebldID = document.createElement('p');
    // this is gonna be a hidden form containing the ID to travel to
    const NodeForm = document.createElement('form');
    // const NodeHiddenID = document.createElement('input');
    // const NodeHiddenIDtwo = document.createElement('input');
    const NodeShowbtn = document.createElement('input');

    // setting classes for css editing
    NodeIndivContainer.setAttribute('class', 'IndivContainer index');
    Nodefloor.setAttribute('class', 'index');
    Nodename.setAttribute('class', 'index');
    Nodeprice.setAttribute('class', 'index');
    Nodesqft.setAttribute('class', 'index');
    Nodebeds.setAttribute('class', 'index');
    Nodebaths.setAttribute('class', 'index');
    NodebldID.setAttribute('class', 'index');
    // working on the hidden form
    NodeForm.setAttribute('class', 'index');
    // setting method to GET
    NodeForm.setAttribute('method', 'GET');
    // setting action for api apartments
    NodeForm.setAttribute('action', `/show/apartments/${dato.id}`);
    Nodeid.setAttribute('class', 'index');
    // NodeHiddenID.setAttribute('name', 'type');
    // NodeHiddenIDtwo.setAttribute('type', 'hidden');
    // NodeHiddenIDtwo.setAttribute('value', `apartment`);
    // NodeHiddenIDtwo.setAttribute('name', 'id');
    // NodeHiddenID.setAttribute('value', `${dato.id}`);
    // NodeHiddenID.setAttribute('class', 'index');
    // NodeHiddenID.setAttribute('type', 'hidden');
    NodeShowbtn.setAttribute('class', 'index');
    NodeShowbtn.setAttribute('type', 'submit');
    NodeShowbtn.setAttribute('value', 'See More');
    // IS THIS REALLY NECESSARY???
    // NodeShowbtn.setAttribute('id', `${dato.id}`);

    // <form >
    Nodeid.innerHTML = `ID: ${dato.id}`;
    Nodefloor.innerHTML = `Floors: ${dato.floor}`;
    Nodename.innerHTML = `Name: ${dato.name}`;
    Nodeprice.innerHTML = `Price: ${dato.price}`;
    Nodesqft.innerHTML = `Sqft: ${dato.sqft}`;
    Nodebeds.innerHTML = `Bedrooms: ${dato.bedrooms}`;
    Nodebaths.innerHTML = `Bathrooms: ${dato.bathrooms}`;
    NodebldID.innerHTML = `Building ID: ${dato.building_id}`;

    // apending correctly the hidden input and the submit button into form
    // NodeForm.appendChild(NodeHiddenID);
    // NodeForm.appendChild(NodeHiddenIDtwo);
    NodeForm.appendChild(NodeShowbtn);

    // apending stuff into other stuff
    NodeIndivContainer.appendChild(Nodeid);
    NodeIndivContainer.appendChild(Nodefloor);
    NodeIndivContainer.appendChild(Nodename);
    NodeIndivContainer.appendChild(Nodeprice);
    NodeIndivContainer.appendChild(Nodesqft);
    NodeIndivContainer.appendChild(Nodebeds);
    NodeIndivContainer.appendChild(Nodebaths);
    NodeIndivContainer.appendChild(NodebldID);
    NodeIndivContainer.appendChild(NodeForm);

    // appending all stuff into footer container
    NodeFooter.appendChild(NodeIndivContainer);
  })
  // render elemtns
  // create button that takes to individual element
}


function buildingsFetch() {
  // goes to the right apartments route treating PSQL as an API
  fetch('/api/buildings')
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      renderOnPageBld(data);
    })
    .catch((err) => {
      console.log(err);
    })
}

function renderOnPageBld(datos) {
 console.log('---> inside renderOnPageBld');

  removeAll();
  // point at the footer
  const NodeFooter = document.getElementById('displayAll');
  // create a looop with a forEach
  datos.forEach(dato => {
    // create elements for apending
    const NodeIndivContainer = document.createElement('div');
    const Nodeid = document.createElement('p');
    const Nodename = document.createElement('h3');
    const Nodeaddress = document.createElement('p');
    const Nodenum_floors = document.createElement('p');

    // this is gonna be a hidden form containing the ID to travel to
    const NodeForm = document.createElement('form');
    const NodeHiddenID = document.createElement('input');
    const NodeHiddenIDtwo = document.createElement('input');
    const NodeShowbtn = document.createElement('input');

    // setting classes for css editing
    NodeIndivContainer.setAttribute('class', 'IndivContainer show');
    Nodeid.setAttribute('class', 'show');
    Nodename.setAttribute('class', 'show');
    Nodeaddress.setAttribute('class', 'show');
    Nodenum_floors.setAttribute('class', 'show');

    // working on the hidden form
    NodeForm.setAttribute('class', 'show');
    // setting method to GET
    NodeForm.setAttribute('method', 'GET');
    // setting action for api apartments
    NodeForm.setAttribute('action', `/show`);
    NodeHiddenID.setAttribute('value', 'buildings');
    NodeHiddenID.setAttribute('class', 'show');
    NodeHiddenID.setAttribute('type', 'hidden');
    NodeHiddenIDtwo.setAttribute('value', `${dato.id}`);
    NodeHiddenIDtwo.setAttribute('class', 'show');
    NodeHiddenIDtwo.setAttribute('type', 'hidden');
    NodeShowbtn.setAttribute('class', 'show');
    NodeShowbtn.setAttribute('type', 'submit');
    NodeShowbtn.setAttribute('value', 'See More');

    Nodeid.innerHTML = `ID: ${dato.id}`;
    Nodename.innerHTML = `Name: ${dato.name}`;
    Nodeaddress.innerHTML = `Address: ${dato.address}`;
    Nodenum_floors.innerHTML = `Floors: ${dato.num_floors}`;

    // apending correctly the hidden input and the submit button into form
    NodeForm.appendChild(NodeHiddenID);
    NodeForm.appendChild(NodeShowbtn);

    // apending stuff into other stuff
    NodeIndivContainer.appendChild(Nodeid);
    NodeIndivContainer.appendChild(Nodename);
    NodeIndivContainer.appendChild(Nodename);
    NodeIndivContainer.appendChild(Nodeaddress);
    NodeIndivContainer.appendChild(Nodenum_floors);
    NodeIndivContainer.appendChild(NodeForm);

    // appending all stuff into footer container
    NodeFooter.appendChild(NodeIndivContainer);
  })
  // render elemtns
  // create button that takes to individual element
}
