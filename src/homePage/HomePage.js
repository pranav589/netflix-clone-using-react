import React from "react";
import "./HomePage.css";
import tv from "../images/tv.png";
import video_tv from "../images/video-tv.m4v";
import devices from "../images/devices.png";
import video_devices from "../images/video-devices.m4v";
import Home from "./home/Home";
import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";
import Faq from "./FAQ/Faq";
import Footer from "./footer/Footer";

function HomePage() {
  return (
    <div className="container">
      <Home />
      <SectionOne
        h1={"Enjoy on your TV."}
        h2={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
        video={video_tv}
        img={tv}
      />
      <SectionOne
        h1={"Watch everywhere."}
        h2={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        }
        video={video_devices}
        img={devices}
      />
      <SectionTwo />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
