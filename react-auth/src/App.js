import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./core/protected.routes";
import AdminComponent from "./components/admin/admin";
import { HomePage } from "./components/landing-page/home";
import GuestComponent from "./components/guest/guest";

import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication</h1>
          <section id="navigation">
            <a href="/">Home</a>
            <a href="/guest">Guest Component</a>
            <a href="/admin">Admin Component</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/guest" element={<GuestComponent />} />
        {/* <Route
          component={
            <ProtectedRoutes path="/admin" element={<AdminComponent />} />
          }
        /> */}
        <Route element={ <ProtectedRoutes /> }>
          <Route element={ <AdminComponent /> } path="/admin" exact/>
        </Route>
        
      </Routes>
    </Container>
  );
}

export default App;
