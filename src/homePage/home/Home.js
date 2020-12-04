import React, { useState } from "react";
import netflix_logo from "../../images/netflix-logo.png";
import arrow from "../../images/arrow.png";
import Subscribe from "../subscribe/Subscribe";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div id="home-wrapper">
        <header>
          <img id="header-logo" src={netflix_logo} alt="Netflix logo" />
          <Link id="header-signin" to="/login" className="font-light">
            Sign In
          </Link>
        </header>

        <div id="center-wrapper">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2 className="font-light">Watch anywhere. Cancel anytime.</h2>
          <Subscribe />
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
