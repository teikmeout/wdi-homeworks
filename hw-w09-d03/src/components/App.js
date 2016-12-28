import React, { Component } from 'react';
// import InfoContainer from './InfoContainer/InfoContainer';
import logo from './ga.png';

import Account from './Account/Account';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputSavings: 0,
      inputChecking: 0,
      SavingsBal: 1,
      CheckingsBal: 1000
    }
  }

  // METHOD; changes constantly the value of input and
  // makes it available always. will differentiate for savings and checking
  handleInputValue(event) {
    if (event.target.id === 'save' && !isNaN(parseInt(event.target.value))) {
      console.log('--> the event', event.target.value);
      console.log('--> the event parsed!', parseInt(event.target.value));
      this.setState ({
        inputSavings: event.target.value
      });
      console.log(this.state.inputSavings);
    } else if(event.target.id === 'check' && !isNaN(event.target.value)) {
      this.setState ({
        inputChecking: event.target.value
      });
      // console.log(this.state.inputChecking);
    }
  }
  // METHOD: takes the value in the input and adds it to balance
  // beats me to know what happens if you input a negative value
  handleDeposit(e) {
    console.log(e.target.id);
    if(e.target.id === 'save') {
      this.setState ({
        SavingsBal: parseInt(this.state.SavingsBal) + parseInt(this.state.inputValue)
      });
    } else if(e.target.id === 'check') {
      this.setState ({
        CheckingsBal: parseInt(this.state.CheckingsBal) + parseInt(this.state.inputValue)
      });
    }
  }

  // METHOD: takes value in the input and changes the balance of checkings a

  handleWithdrawal(e) {
    console.log(e.target.id);
    if(e.target.id === 'save') {
      if(this.state.SavingsBal >= this.state.inputValue) {
        this.setState ({
          SavingsBal: parseInt(this.state.SavingsBal) - parseInt(this.state.inputValue)
        });
      } else {console.log("you're poor my man")}
    } else if(e.target.id === 'check') {
      this.setState ({
        CheckingsBal: parseInt(this.state.CheckingsBal) - parseInt(this.state.inputValue)
      });
    }
  }

  handleClass(e) {
    if(this.state.SavingsBal < 1) {
      return 'balance zero'
    } else return 'balance'
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account
          accountid={"save"}
          balance={this.state.SavingsBal}
          handleInputValue={event => this.handleInputValue(event)}
          handleDeposit={this.handleDeposit.bind(this)}
        />
        <Account
          accountid={"check"}
          balance={this.state.CheckingsBal}
          handleInputValue={event => this.handleInputValue(event)}
          handleDeposit={event => this.handleDeposit(event)}
        />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
