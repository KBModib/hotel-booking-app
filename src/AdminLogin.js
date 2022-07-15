import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";



export default function GuestLogin() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/adminhome");
      }
    });
  }, []);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/adminhome");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.password !== registerInformation.confirmPassword) {
      alert("Please confirm that passwords are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/adminhome");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="welcome">
      <h1>Admin Login</h1>
      <div className="login-register-container">
        {isRegistering ? (
          <>
             <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={registerInformation.firstName}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  firstName: e.target.value
                })
              }
            /><br/>
             <label>Surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={registerInformation.lastName}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  lastName: e.target.value
                })
              }
            /><br/>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  email: e.target.value
                })
              }
            /><br/>
             <label>Contact Number</label>
            <input
              type="phone number"
              placeholder="Contact Number"
              value={registerInformation.contactNumber}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  contactNumber: e.target.value
                })
              }
            /><br/>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  password: e.target.value
                })
              }
            /><br/>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmPassword: e.target.value
                })
              }
            /><br/> 
            <button className="sign-in-register-button" onClick={handleRegister}>Register</button><br/>
            <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
          </>
        ) : (
          <>
            <label>Email</label>
            <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} /><br/>
            <label>Password</label>
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
            /><br/> 
            <button className="sign-in-register-button" onClick={handleSignIn}>
              Login
            </button><br/>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}