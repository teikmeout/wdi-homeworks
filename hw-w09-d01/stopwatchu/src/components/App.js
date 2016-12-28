import React, { Component } from 'react';
import ClockContainer from './ClockContainer/ClockContainer';
import ButtonContainer from './ButtonContainer/ButtonContainer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      time: 0,
      ms:0,
      sec:0,
      min:0,
      id: '',
      msZero:0,
      secZero:0,
      minZero:0,
    }
  }

handleTime(t) {
  let newMS = 0,
      newSEC = 0,
      newMIN = 0,
      newHOUR = 0,
      newDAY = 0;
  if(t > 99) {
    newSEC = Math.floor(t/100);
    console.log(`after math.floor for secs/1000: ${newSEC}`)
    newMS = t%100;
    if(newSEC > 59){
      newMIN = Math.floor(newSEC/60);
      console.log(`after math.floor for mins/60: ${newMIN}`)
      newSEC = newSEC%60;
      if(newMIN > 59){
        newHOUR = Math.floor(newMIN/60);
        console.log(`after math.floor for hours/1000: ${newHOUR}`)
        newMIN = newMIN%60;
        if(newHOUR > 23){
          newDAY = Math.floor(newHOUR/24);
          console.log(`after math.floor for days/1000: ${newDAY}`)
          newHOUR = newHOUR%24;
        }
      }
    }
  }
  console.log(`milisecs`,newMS);
  console.log(`secs`, newSEC);
  console.log(`mins`, newMIN);
  console.log(`hrs`, newHOUR);
  console.log(`days`, newDAY);
  this.setState({
    ms: newMS,
    sec: newSEC,
    min: newMIN
  });
}

startTheCounter(){
  this.setState({
    id: setInterval(() => {
      this.setState({
        ms: this.state.ms + 1
      });

    }, 1000)
  });
  //this.handleTime(this.state.ms)
  // let intID = setInterval(() => {
  //   this.setState({
  //     time: this.state.ms + 1,
  //   });
  //   // this.handleTime(this.state.time);
  // }, 1000)
}

stopTheCounter() {
  clearInterval(this.state.id);
}

resetTheCounter() {
  this.setState({
    ms:0,
    sec:0,
    min:0,
    msZero:0,
    secZero:0,
    minZero:0,
  })
}



  render() {
    return (
      <div className="App">
        <h1>Stopuwatchu</h1>
        <ClockContainer
          milisecs={this.state.ms}
          milisecsZero={this.state.msZero}
          seconds={this.state.sec}
          secondsZero={this.state.secZero}
          minutes={this.state.min}
          minutesZero={this.state.minZero}
        />
        <ButtonContainer
          startTheCounter={event => this.startTheCounter(event)}
          stopTheCounter={event => this.stopTheCounter(event)}
          resetTheCounter={event => this.resetTheCounter(event)}
        />
      </div>
    );
  }
}

// by passing an annonymous function to the event ^ you are automatically
// binding the element to the function

export default App
