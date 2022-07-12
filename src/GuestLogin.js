import React, { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";


export default function GuestLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(user => {
      if (user) {
        navigate("/");
      }
    });
  });
  
  return (
    <>
      <img  src='' alt='logo' />
      <h1>Guest Login</h1>
      <form className='form'>
      <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Password"
        />
      <button className="sign-in-register-button" onClick={handleSignIn}>
              Sign In
            </button>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(true)}
            >
              Create an account
            </button>
      </form>
    </>
  )
}
