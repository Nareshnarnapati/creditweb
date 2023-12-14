import React, { Component } from "react";
import "./index.css";

class CreditForm extends Component {
  state = {
    username: "",
    pan: "",
    number: "",
    email: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.replace("/video-kyc");
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePan = (event) => {
    this.setState({
      pan: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 className="heading">APPLY YOUR CREDIT CARD HERE </h1>
        <form onSubmit={this.onSubmit} className="bg-container">
          <label htmlFor="username" className="text1">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            placeholder="ENTER YOUR NAME"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="numbers" className="text1">
            Mobile number
          </label>
          <input
            type="number"
            id="numbers"
            placeholder="ENTER MOBILE NUMBER"
            onChange={this.onChangeNumber}
          />
          <label htmlFor="email" className="text1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter YOUR EMAIL"
            onChange={this.onChangeEmail}
          />
          <label htmlFor="pan" className="text1">
            PAN
          </label>
          <input
            type="number"
            id="pan"
            placeholder="ENTER YOUR PAN NUMBER"
            onChange={this.onChangePan}
          />

          <button type="submit" className="apply">
            APPLY NOW
          </button>
        </form>
      </div>
    );
  }
}

export default CreditForm;
