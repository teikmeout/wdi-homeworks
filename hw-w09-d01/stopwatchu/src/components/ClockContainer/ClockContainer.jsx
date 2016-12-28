import React, {Component} from 'react';
import TimeContainer from '../TimeContainer/TimeContainer';

import './ClockContainer.css';

class ClockContainer extends Component {
  render() {
    return(
      <section className="clock-container" id="real-clock">
        <h4>this is where the clock goes</h4>
        <TimeContainer
          ms={this.props.milisecs}
          msZero={this.props.milisecsZero}
          secs={this.props.seconds}
          secsZero={this.props.secondsZero}
          mins={this.props.minutes}
          minsZero={this.props.minutesZero}

        />
      </section>
    );
  }
}

export default ClockContainer
