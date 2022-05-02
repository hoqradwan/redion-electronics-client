import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  let errorElement;
  if (error) {
    errorElement = <p>{error.message}</p>;
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
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            onChange={handleEmailChange}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/*   <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
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
          <a className="signup-text text-decoration-none" onClick={resetPassword}>
            Reset Password
          </a>{" "}
        </p>
      </Form>
      <SocialLogin></SocialLogin>
    </>
  );
};

export default Login;
