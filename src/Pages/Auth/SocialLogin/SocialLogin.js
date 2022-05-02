import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './SocialLogin.css';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  if(user){
      navigate('/')
  }
  return (
    <div className="w-25 mx-auto">
      <button className="google-btn" onClick={()=>signInWithGoogle()}>Google sign in</button>
    </div>
  );
};

export default SocialLogin;
