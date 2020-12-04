import React, { useState } from "react";
import "./login.css";
import netflix_logo from "../images/netflix-logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth)
        history.push("/netflix");
      })
      .catch((error) => {
        if (
          error.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your email and password");
        }
        if (
          error.message ===
          "There is no user record corresponding to this indentifier. The user may have been deleted."
        ) {
          alert("Create a account");
        } else {
          alert(error.message);
        }
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
          <form onSubmit={handleLogin}>
            <div className="login">
              <h1>Sign In</h1>
              <div className="inputs">
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
              <button className="sign-in">Sign In</button>
              <p className="account">Need a new account?</p>
              <Link to="/signup">
                <button className="sign-up">Sign Up Now</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
