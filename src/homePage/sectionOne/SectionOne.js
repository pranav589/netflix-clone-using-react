import React from "react";
import tv from "../../images/tv.png";
import video_tv from "../../images/video-tv.m4v";

function SectionOne({ h1, h2, img, video }) {
  return (
    <div>
      <div className="section-wrapper">
        <div className="section-center-wrapper">
          <div className="section-sidetext">
            <h1>{h1}</h1>
            <h2 className="font-light">{h2}</h2>
          </div>
          <div className="section-media" id="tv-animation">
            <video id="tv-video" src={video} muted autoPlay loop></video>
            <img id="tv-overlay" src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default SectionOne;
