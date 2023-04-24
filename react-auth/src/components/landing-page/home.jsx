import { SocialIcon } from 'react-social-icons';
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./home.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();


export const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSubmitReg = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-auth-app-0dzk.onrender.com/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const handleSubmitLog = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    // alert("Submited");

    const configuration = {
      method: "post",
      url: "https://nodejs-auth-app-0dzk.onrender.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/admin";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => {
                var x = document.getElementById("register");
                var y = document.getElementById("login");
                var z = document.getElementById("btn");
                x.style.left = "50px";
                y.style.left = "450px";
                z.style.left = "0";
              }}
            >
              Register
            </button>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => {
                var x = document.getElementById("register");
                var y = document.getElementById("login");
                var z = document.getElementById("btn");
                x.style.left = "-400px";
                y.style.left = "50px";
                z.style.left = "110px";
              }}
            >
              Log In
            </button>
          </div>
          <div className="social-icons">
            <SocialIcon url="https://www.linkedin.com/in/neo-jusha-916405193/" network="twitter" bgColor="#ff5a01" />
            <SocialIcon url="https://github.com/Neo-Project-Work?tab=repositories" network="github" bgColor="#000000" />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100004426080848" network="facebook" bgColor="#ADD8E6" />
          </div>

          {/* Register Form */}

          <Form.Group
            id="register"
            className="input-container"
            onSubmit={(e) => handleSubmitReg(e)}
          >
            <Form.Control
              type="email"
              className="input-value"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control
              type="password"
              className="input-value"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the Terms & conditions</span>
            <Button
              type="submit"
              className="submit-btn"
              onClick={(e) => handleSubmitReg(e)}
            >
              Register
            </Button>
            {/* display success message */}
            {register ? (
              <p className="text-success text-center">You Are Registered Successfully</p>
            ) : (
              <p className="text-danger text-center">You Are Not Registered</p>
            )}
          </Form.Group>

          {/* Login Form */}

          <Form.Group
            id="login"
            className="input-container"
            onSubmit={(e) => handleSubmitLog(e)}
          >
            <Form.Control
              type="email"
              className="input-value"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control
              type="password"
              className="input-value"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button
              type="submit"
              className="submit-btn"
              onClick={(e) => handleSubmitLog(e)}
            >
              Log In
            </button>
            {/* display success message */}
            {login ? (
              <p className="text-success text-center">You Are Logged in Successfully</p>
            ) : (
              <p className="text-danger text-center">You Are Not Logged in</p>
            )}
          </Form.Group>
        </div>
      </div>
    </>
  );
};
