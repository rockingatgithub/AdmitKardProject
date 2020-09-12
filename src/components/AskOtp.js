import React, { Component } from "react";
import OtpSuccess from "./OtpSuccess";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/otpSend.png";

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
      <Container className="mycontainer" fluid>
        <Row className="myrow" noGutters>
          <Col className="mycolumn" lg={3}></Col>
          <Col className="mycolumn midcolumn" lg={6}>
            {mainScreen && <App />}
            {askOtp && (
              <div className="innerdiv">
                <div id="otpsentimage">
                  <img
                    src={img1}
                    style={{ height: "130px", width: "130px" }}
                    alt="Sent OTP"
                  />
                </div>
                <div>
                  <span>Please verify Mobile number</span>
                </div>
                <div>
                  <span>An OTP is sent to {teleNumber}</span>
                </div>

                <button onClick={this.handleClick}>Change Phone Number</button>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <div>
                    <span>Didn't receive the code!</span>
                    <button onClick={this.handleClick1}> Resend OTP </button>
                  </div>
                  <input type="submit" value="Verify" />
                </form>
              </div>
            )}
            {otpSuccess && <OtpSuccess />}
          </Col>
          <Col className="mycolumn" lg={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default AskOtp;
