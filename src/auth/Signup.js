import React, { useState } from "react";
import "./login.css";
import netflix_logo from "../images/netflix-logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Signup() {
  const history = useHistory("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user) {
          auth.user
            .updateProfile({
              displayName: name,
            })
            .then((e) => {
              history.push("/netflix");
            });
        }
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login-container">
      <div id="home-wrapper">
        <header>
          <Link to="/">
            <img
              id="header-logo"
              src={netflix_logo}
              alt="Netflix logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </header>

        <div id="center-wrapper">
          <form onSubmit={handleRegister}>
            <div className="login">
              <h1>Sign In</h1>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="sign-in">Sign Up</button>
              <p className="account">Already have an account?</p>
              <Link to="/login">
                <button className="sign-up" type="submit">
                  Sign In Now
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
