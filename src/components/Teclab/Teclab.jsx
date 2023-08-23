import React from "react";

import video from "../../assets/teclab/Cover Teclab_Web Hb_3_1.mp4"

import "./Teclab.css"

const Teclab = () => {
  return (
    <div>
      <div className="box-video-background">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="video-mp4"
        >
          <source
            src={video}
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Teclab;
