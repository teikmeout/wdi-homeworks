import React, {Component} from 'react';
import './TimeContainer.css';

// this class contains the time display
class TimeContainer extends Component{
  render() {
    return(
      <div className="time-container" id="">
        <div id="min">{this.props.minsZero}{this.props.mins}</div>
        <div className="separator">:</div>
        <div id="sec">{this.props.secsZero}{this.props.secs}</div>
        <div className="separator">:</div>
        <div id="ms">{this.props.msZero}{this.props.ms}</div>
      </div>
    );
  }
}

export default TimeContainer
