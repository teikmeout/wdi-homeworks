import React, {Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer.jsx';
import './SavedMoviesContainer.css';

class SavedMoviesContainer extends Component {
  render() {
    return(
      <div className="saved-movies-cont">
      <MovieContainer
        title={this.props.title}
        imgSrc={this.props.imgSrc}
      />
      </div>
    );
  }


} // end of component

export default SavedMoviesContainer;
