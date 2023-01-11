import React from "react";
import section from "../../assets/heinekenFest/divider-hnk.png";
import img1 from "../../assets/heinekenFest/img-hnk1.png";
import img2 from "../../assets/heinekenFest/img-hnk2.png";
import img3 from "../../assets/heinekenFest/img-hnk3.png";
import img4 from "../../assets/heinekenFest/img-hnk4.png";
import next from "../../assets/heinekenFest/next.png";
// import video from "https://res.cloudinary.com/henribarrett/video/upload/v1673456899/hb-2023/video-hnk_wczrbk.mp4";
import img from "../../assets/heinekenFest/img-hnk.png";

import "./HeinekenFest.css";

const HeinekenFest = () => {
  return (
    <>
      <div className="box-video-background">
        <video width="100%" height="100%" autoPlay muted loop className="video-mp4">
          <source
            src="https://res.cloudinary.com/henribarrett/video/upload/v1673456899/hb-2023/video-hnk_wczrbk.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>


      <div className="container-main">
        <div className="Container__title">
          <h2>HEINEKEN FEST</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequa.
          </p>
        </div>
        <img src={section} width={"100%"} />
        <div className="container__mosaico">
          <div>
            <iframe
              src="https://player.vimeo.com/video/783688409?h=2d1ac4a940"
              width="1040"
              height="812"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <img src={img1} width={"77%"} />
          <div className="vimeo-full-width">
            <iframe
              src="https://player.vimeo.com/video/783705271?h=511335739c"
              width="640"
              height="300"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <img src={img2} width={"77%"} className="img-2" />
          <div className="vimeo-full-width">
            <iframe
              src="https://player.vimeo.com/video/783701977?h=4db0db7373"
              width="640"
              height="438"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <img src={img3} width={"80%"} className="img-3" />
          <div className="vimeo-full-width box-video">
            <iframe
              src="https://player.vimeo.com/video/783755260?h=66ea8a3174"
              width="640"
              height="438"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <img src={img4} width={"80%"} className="img-4" />

          <div>
            <img src={next} width={"80%"} className="next" />
          </div>
          {/* <img src={img} width={"100%"} /> */}
        </div>
      </div>
    </>
  );
};

export default HeinekenFest;