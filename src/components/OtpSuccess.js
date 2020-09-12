// ===================================component after successfull otp validation=======================================

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/otpSuccess.png";
import img2 from "../images/otpSuccess2.png";

function OtpSuccess(props) {
  return (
    <Container className="mycontainer" fluid>
      <Row className="myrow" noGutters>
        <Col className="mycolumn" lg={3}></Col>
        <Col className="mycolumn midcolumn" lg={6}>
          <div id="innerBoxContainer">
            <div id="imagecontainer2">
              <img
                src={img1}
                style={{ height: "308px", width: "305px" }}
                alt="otp Success"
                id="imagepart1"
              />
              <img
                src={img2}
                style={{ height: "43px", width: "101px" }}
                alt="otp Success"
                id="imagepart2"
              />
            </div>

            <span id="welcome-text2">Welcome to AdmitKard</span>

            <span id="line-text1"> In order to provide you with </span>
            <span id="line-text2">a custom experience,</span>
            <span id="line-text3">we need to ask you a few questions.</span>

            <button id="getstartedbutton">Get Started</button>
            <div id="last-text">*This will only take 5 min.</div>
          </div>
        </Col>
        <Col className="mycolumn" lg={3}></Col>
      </Row>
    </Container>
  );
}

export default OtpSuccess;
