import React from "react";
import smartphone from "../../images/smarphone.png";
import download from "../../images/download.png";
import loading from "../../images/loading.png";
import show_cover from "../../images/show-cover.png";
import mobile from "../../images/mobile.jpg";

function SectionTwo() {
  return (
    <div>
      <div className="section-wrapper">
        <div className="section-center-wrapper" id="mobile-center-wrapper">
          <div className="section-sidetext" id="download-sidetext">
            <h1>Download your shows to watch offline.</h1>
            <h2 className="font-light">
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
          <div className="section-media" id="mobile-wrapper">
            <img id="mobile" src={mobile} alt="" />
            <div id="mobile-download">
              <img id="show-cover" src={show_cover} alt="" />
              <div id="mobile-download-text">
                <h3>Stranger Things</h3>
                <h4>Downloading...</h4>
              </div>
              <div id="mobile-download-animation">
                <img
                  className="animation-element"
                  id="download-icon"
                  src={download}
                  alt=""
                />
                <img
                  className="animation-element"
                  id="loading-icon"
                  src={loading}
                  alt=""
                />
                <img
                  className="animation-element"
                  id="smartphone-icon"
                  src={smartphone}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default SectionTwo;
