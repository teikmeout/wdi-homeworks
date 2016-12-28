import React, {Component} from 'react';
import './ButtonContainer.css';

// Component that will contain the action buttons
class ButtonContainer extends Component {
  render(){
    return(
      <footer className="button-container">
        <button onClick={this.props.startTheCounter} className="action-button" id="start">▶</button>
        <button onClick={this.props.stopTheCounter} className="action-button" id="stop">◼</button>
        <button onClick={this.props.resetTheCounter} className="action-button" id="reset">🚽</button>
      </footer>
    );
  }
}

export default ButtonContainer
