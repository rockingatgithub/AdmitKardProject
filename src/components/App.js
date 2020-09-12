// ===============================homepage component of our react app===========================

import React, { Component } from "react";
import AskOtp from "./AskOtp";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/AK_logo.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: true,
      askOtp: false,
      value: "",
      countryCode: "+1",

      fullNumber: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    const { value, countryCode } = this.state;
    event.preventDefault();

    let pattern = new RegExp(/^[0-9\b]+$/);        // phone number input field verification
    if (value.length === 10 && pattern.test(value)) {
      localStorage.setItem("otp", "1234");
      let finalNumber = countryCode + value;
      this.setState({
        homePage: false,
        askOtp: true,
        error: "",
        fullNumber: finalNumber,
      });
    } else {
      this.setState({
        value: "",
      });
      toast("Please enter a valid phone number.", {
        position: "top-right",
        type: "info",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };


  // ====================================to select country code===================================

  onSelectFlag = (countryCode) => {
    this.setState({
      countryCode: `${countryCode}`,
    });
  };

  render() {
    const { homePage, askOtp, value, fullNumber } = this.state;
    return (
      <div>
        {homePage && (
          <Container className="mycontainer" fluid>
            <Row className="myrow" noGutters>
              <Col className="mycolumn" lg={3}></Col>
              <Col className="mycolumn midcolumn" lg={6}>
                <div className="innerdiv">
                  <div id="mainimage-container">
                    <img src={img1} className="headimage" alt="App heading" />
                  </div>

                  <span id="welcome-text">Welcome Back</span>
                  <span id="signin-text">Please sign in to your account</span>

                  <form onSubmit={this.handleSubmit} id="main-form">
                    <div id="numberinput">
                      <div id="left-block"></div>
                      <span id="numberinputlabel">Enter Contact Number</span>
                      <div id="right-block"></div>
                      <ReactFlagsSelect
                        defaultCountry="US"
                        searchable={true}
                        onSelect={this.onSelectFlag}
                        showSelectedLabel={false}
                        className="my-flag"
                      />
                      <input
                        className="number-input"
                        type="text"
                        value={value}
                        onChange={this.handleChange}
                      />
                      <div id="bottom-block"></div>
                    </div>

                    <span className="info-text">
                      We will send you one time SMS message.
                    </span>
                    <span className="info-text2">Charges may apply.</span>

                    <input
                      id="mainform-submit"
                      type="submit"
                      value="Sign in with OTP"
                    />
                  </form>
                </div>
              </Col>
              <Col className="mycolumn" lg={3}></Col>
            </Row>
          </Container>
        )}

        {/* =================next component for otp verfication========================== */}

        {askOtp && <AskOtp phoneNumber={fullNumber} />}
      </div>
    );
  }
}

export default App;
