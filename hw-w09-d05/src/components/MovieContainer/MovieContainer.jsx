import React, {Component} from 'react';
import style from './MovieContainer.css';

class MovieContainer extends Component {
  render() {
    return(
      <div className={style["movie-container"]}>
        <h3>{this.props.title}</h3>
        <img src={this.props.imgsrc} className="poster"/>
        <button id={style["addbtn"]} type="button" onClick={this.props.addToFavorites}></button>
      </div>
    );
  }
}

export default MovieContainer;
