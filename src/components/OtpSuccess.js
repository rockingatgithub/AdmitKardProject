import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/otpSuccess.png";

function OtpSuccess(props) {
  return (
    <Container className="mycontainer" fluid>
      <Row className="myrow" noGutters>
        <Col className="mycolumn" lg={3}></Col>
        <Col className="mycolumn midcolumn" lg={6}>
          <div>
            <img
              src={img1}
              style={{ height: "400px", width: "300" }}
              alt="otp Success"
            />
          </div>
          <div>
            <span>Welcome to AdmitKard</span>
          </div>
          <div>
            <span> In order to provide you with custom experience, </span>
            <span>we need to ask a few questions</span>
          </div>
          <button>GET STARTED</button>
          <div>*This will only take 5 min.</div>
        </Col>
        <Col className="mycolumn" lg={3}></Col>
      </Row>
    </Container>
  );
}

export default OtpSuccess;
