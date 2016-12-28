import React, {Component} from 'react';
import './Headers.css';

class Headers extends Component {
  render() {
    return(
      <header className="headers">
        <h1 className="headers">Müvie Haus 3: Return of the Cruise</h1>
        <input type="text" placeholder="type your movie" onChange={this.props.handleSearchForm} />
        <button className onClick={this.props.getMoviesOMDB}>Search OMDB!</button>
      </header>
    );
  }
}

export default Headers;
