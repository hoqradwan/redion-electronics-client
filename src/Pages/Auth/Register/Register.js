import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  if(loading){
    return <Loading></Loading>
  }
  let errorElement;
  if (error) {
    errorElement = <p>{error.message}</p>;
  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <>
      <Form className="w-25 mx-auto mt-5 mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Email Address"
          />
          {}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handleConfirmPasswordBlur}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        {password !== confirmPass && (
          <p className="text-danger">Password didn't matach</p>
        )}
      
        <p>
          Already have an account?{" "}
          <Link className="text-decoration-none" to="/login">
           <span className="signup-text">Please login</span> 
          </Link>{" "}
        </p>
        <button className="signup-btn" type="submit">
          Sign Up
        </button>
        {errorElement}
      </Form>
      <SocialLogin></SocialLogin>

    </>
  );
};

export default Register;
