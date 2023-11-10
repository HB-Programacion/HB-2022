import React from "react";
import { meetMakers } from "../data/dataMeetMakers";

import "./slideMeetMakers.css";

const SlideMeetMakers = () => {
  return (
    <div className="box-marqueeSlide">
      <div class="marqueeSlide">
        <div class="marqueeSlide-content">
          {meetMakers.map((video, index) => (
            <div class="marqueeSlide-item" key={index}>
              <div className="box-img-slide-people">
                <video
                  className={video.className}
                  controls={false}
                  autoPlay
                  muted
                  playsInline
                  loop={true}
                >
                  <source src={video.source} type="video/mp4" />
                </video>
              </div>
<<<<<<< HEAD
              <div className={video.classNameBoxTitle}>
                <p className="title-people">{video.title}</p>
                <p className="descrption-people">{video.description}</p>
              </div>
=======
            <p className="title-people">{video.title}</p>
              <p className="descrption-people">{video.description}</p>
>>>>>>> ce76b40985af2c9b31adb512db5248ebf70efdbd
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideMeetMakers;
