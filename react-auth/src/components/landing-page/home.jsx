import React from "react";
import { Col, Row } from "react-bootstrap";
import { LoginComponent} from "../login/login"
import { RegisterComponent } from "../register/register"
import "./home.css"


export const  HomePage = () => {
    return (
      <Row className="landing-page">
        {/* Register */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <RegisterComponent />
        </Col>
  
        {/* Login */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <LoginComponent />
        </Col>
      </Row>
    );
  }