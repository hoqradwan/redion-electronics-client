import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  } 
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error.message}</p>;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     signInWithEmailAndPassword(email, password);
  
  };
  const resetPassword = () => {
    sendPasswordResetEmail(email);
  };
  return (
    <>
      <Form className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleEmailChange}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          New to RediOn?{" "}
          <Link to="/signup" className="text-decoration-none">
            <span className="signup-text">Please Sign Up</span>
          </Link>{" "}
        </p>
        <button className="login-btn mb-2" type="submit">
          Login
        </button>
        {errorElement}
        <p>
          Forget Password?{" "}
          <a
            className="signup-text text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </a>{" "}
        </p>
      </Form>
      <SocialLogin></SocialLogin>
    </>
  );
};

export default Login;
