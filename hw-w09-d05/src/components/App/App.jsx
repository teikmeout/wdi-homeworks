import React, { Component } from 'react';
import Headers from '../Headers/Headers.jsx';
import SavedMoviesContainer from '../SavedMoviesContainer/SavedMoviesContainer.jsx'
import style from './App.css';

class App extends Component {
  constructor() {
    super();
    // look at all this spacing
    this.state = {
      something: 'something else',
      searchForm: ''
    }
  } // end of constructor

  // METHOD: uses the onChange listener to listen to changes on the input bar
  // will register their value and set a new state for that value
  handleSearchForm(e) {
    console.log(e.target.value);
    // using the value of our target (search form) we will go get the input value
    this.setState({
      searchForm: e.target.value,
    })
    console.log('inside value of state: ', this.handleSearchForm);
  }

  getMoviesOMDB(e) {
    console.log('inside of getMoviesOMDB');
  } // end of getMovies
  // hmmmm so good
  render () {
    return(
      <div>
        <Headers
        name="Taka"
        handleSearchForm={(event) => this.handleSearchForm(event)}
        getMoviesOMDB={(event) => this.getMoviesOMDB(event)}
        />
        <main id={style["main-container"]}>
          {/* I hate to have to comment like this, but I just used the same unit, I'm sorry*/}
          <SavedMoviesContainer
            title='The Black Night'
            imgSrc='#'
          />
          <SavedMoviesContainer
            title='The Black Night'
            imgSrc='#'
          />
        </main>
      </div>
    )
  }
}
// exporting like God meant it to be
// modular af
export default App;
