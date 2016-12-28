import React, { Component } from 'react';

// I can see that Jason wrote this.
// he does this thing where he's not modular
// and it's just to piss me off.
export default class Account extends Component {
  render() {
    return (
      <div className="account">
        <h2>{this.props.accountid}</h2>
        <div className="balance">${this.props.balance}</div>
        <input
          id={this.props.accountid}
          type="text"
          placeholder="enter an cereal"
          onChange={this.props.handleInputValue}
        />
        <input
          id={this.props.accountid}
          type="button"
          value="Deposit"
          onClick={this.props.handleDeposit}
        />
        <input
          id={this.props.accountid}
          type="button"
          value="Withdraw"
          onClick={this.props.handleWithdraw}
        />
      </div>
    )
  }
}
