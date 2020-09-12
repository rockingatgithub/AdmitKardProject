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
      text1: "",
      text2: "",
      text3: "",
      askOtp: true,
      otpSuccess: false,
      mainScreen: false,
    };
    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
    this.textInput3 = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ text1: event.target.value });
    if (event.target.value.length === 1) {
      this.textInput1.current.focus();
    }
  };

  handleChange2 = (event) => {
    this.setState({ text2: event.target.value });
    if (event.target.value.length === 1) {
      this.textInput2.current.focus();
    }
  };

  handleChange3 = (event) => {
    this.setState({ text3: event.target.value });
    if (event.target.value.length === 1) {
      this.textInput3.current.focus();
    }
  };

  handleChange4 = (event) => {
    const { text1, text2, text3 } = this.state;
    let finalotp = text1 + text2 + text3 + event.target.value;
    this.setState({ otp: finalotp });
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
          <Container className="mycontainer" fluid>
            <Row className="myrow" noGutters>
              <Col className="mycolumn" lg={3} md={2}></Col>
              <Col className="mycolumn midcolumn" lg={6} md={8}>
                <div className="innerdiv">
                  <div id="otpsentimage">
                    <img
                      src={img1}
                      style={{ height: "130px", width: "130px" }}
                      alt="Sent OTP"
                    />
                  </div>

                  <span id="verify-text">Please verify Mobile number</span>

                  <span id="phone-number-text">
                    An OTP is sent to{" "}
                    <span id="innerphonenumber">{teleNumber}</span>
                  </span>

                  <button id="changenumberbutton" onClick={this.handleClick}>
                    Change Phone Number
                  </button>
                  <form id="otp-form" onSubmit={this.handleSubmit}>
                    <div class="digitbox">
                      <input
                        id="box1"
                        className="boxes"
                        value={this.state.value}
                        onChange={this.handleChange}
                        type="text"
                        maxLength="1"
                      />
                      <input
                        id="box2"
                        className="boxes"
                        value={this.state.value}
                        onChange={this.handleChange2}
                        type="text"
                        maxLength="1"
                        ref={this.textInput1}
                      />
                      <input
                        id="box3"
                        className="boxes"
                        value={this.state.value}
                        onChange={this.handleChange3}
                        type="text"
                        maxLength="1"
                        ref={this.textInput2}
                      />
                      <input
                        id="box4"
                        className="boxes"
                        value={this.state.value}
                        onChange={this.handleChange4}
                        type="text"
                        maxLength="1"
                        ref={this.textInput3}
                      />
                    </div>

                    <div>
                      <span id="resend-text">Didn't receive the code?</span>
                      <span id="resend-button" onClick={this.handleClick1}>
                        {" "}
                        Resend
                      </span>
                    </div>
                    <input type="submit" value="Verify" id="verify-button" />
                  </form>
                </div>
              </Col>
              <Col className="mycolumn" lg={3} md={2}></Col>
            </Row>
          </Container>
        )}
        {otpSuccess && <OtpSuccess />}
      </div>
    );
  }
}

export default AskOtp;
