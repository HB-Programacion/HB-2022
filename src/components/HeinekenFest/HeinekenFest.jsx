import React from "react";
import section from "../../assets/heinekenFest/divider-hnk.png";
import img1 from "../../assets/heinekenFest/img-hnk1.png";
import img2 from "../../assets/heinekenFest/img-hnk2.png";
import img3 from "../../assets/heinekenFest/img-hnk3.png";
import img4 from "../../assets/heinekenFest/img-hnk4.png";
import next from "../../assets/heinekenFest/next.png";
// import video from "https://res.cloudinary.com/henribarrett/video/upload/v1673456899/hb-2023/video-hnk_wczrbk.mp4";
import img from "../../assets/heinekenFest/img-hnk.png";
import gif1 from "../../assets/heinekenFest/gif01.gif";
import gif2 from "../../assets/heinekenFest/gif02.gif";
import gif3 from "../../assets/heinekenFest/gif03.gif";
import gif4 from "../../assets/heinekenFest/gif04.gif";
import gif5 from "../../assets/heinekenFest/gif05.gif";

import "./HeinekenFest.css";

const HeinekenFest = () => {
  return (
    <>
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
          <div className="container__gif1">
            <div>
              <img src={gif1} />
            </div>
            <div>
              <img src={gif1} />
            </div>
          </div>
          <div className="container__gif2">
            <div>
              <h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim.
              </h2>
              <img src={gif2} className="gif2" />
            </div>
            <div>
              <img src={gif1} className="img-gif2" />
            </div>
          </div>
          <div className="container__gif3">
            <img src={gif3} className="img-gif3" />
          </div>
          <div className="container__gif4-5">
            <div>
              <img src={gif4} className="img-gif4" />
            </div>
            <div>
              <img src={gif5} className="img-gif5" />
            </div>
          </div>

   
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
