import React, { Component } from "react";
import OtpSuccess from "./OtpSuccess";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

class AskOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teleNumber: props.phoneNumber,
      otp: "",
      askOtp: true,
      otpSuccess: false,
      mainScreen: false,
    };
  }

  handleChange = (event) => {
    this.setState({ otp: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem("otp") === this.state.otp) {
      this.setState({
        askOtp: false,
        otpSuccess: true,
      });
    } else {
      toast("Incorrect OTP! Renter correct OTP.", {
        position: "top-right",
        type: "info",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        otp: "",
      });
    }
  };

  handleClick = () => {
    this.setState({
      askOtp: false,
      mainScreen: true,
    });
  };

  handleClick1 = () => {
    toast("A new OTP has been send.", {
      position: "top-right",
      type: "info",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    const { mainScreen, teleNumber, otpSuccess, askOtp } = this.state;
    return (
      <div>
        {mainScreen && <App />}
        {askOtp && (
          <div>
            Hello user your number is: {teleNumber}
            <br />
            <button onClick={this.handleClick}>
              {" "}
              Wrong number re-enter your number!{" "}
            </button>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <span>Didn't receive OTP!</span>
            <button onClick={this.handleClick1}> Resend OTP </button>
          </div>
        )}
        {otpSuccess && <OtpSuccess />}
      </div>
    );
  }
}

export default AskOtp;
