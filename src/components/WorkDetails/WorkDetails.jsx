import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


import section from "../../assets/heinekenFest/divider-hnk.png";
import sectionMobile from "../../assets/heinekenFest/divider-mobile.svg";
import img1 from "../../assets/heinekenFest/img-hnk-1.png";
import img2 from "../../assets/heinekenFest/img-hnk-2.png";
import img3 from "../../assets/heinekenFest/img-hnk3.png";
import img4 from "../../assets/heinekenFest/img-hnk-4.png";
import img5 from "../../assets/heinekenFest/img-hnk-5.png";
import img6 from "../../assets/heinekenFest/img-hnk-6.png";
import next from "../../assets/heinekenFest/next-divider.svg";
import backNext from "../../assets/heinekenFest/next-background.png";
import imgNext from "../../assets/heinekenFest/img-next.png";
// import video from "https://res.cloudinary.com/henribarrett/video/upload/v1673456899/hb-2023/video-hnk_wczrbk.mp4";

import gif1 from "../../assets/heinekenFest/gif01.gif";
import gif2 from "../../assets/heinekenFest/gif02.gif";
import gif3 from "../../assets/heinekenFest/gif03.gif";
import gif4 from "../../assets/heinekenFest/gif04.gif";
import gif5 from "../../assets/heinekenFest/gif05.gif";
import gif6 from "../../assets/heinekenFest/gif06.gif";

import "./WorkDetails.css";

const WorkDetails = () => {
  const dataInterna = JSON.parse(localStorage.getItem("dataInterna"));
  const { title, subtitle, banner } = dataInterna.dataInterna


  console.log('dataInternaWorkDetails', title)

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
            src={banner}
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="container-main">
        <div className="Container__title">
          <h2>{title}</h2>
          <p>
            {subtitle}
          </p>
        </div>
        <img src={section} width={"100%"} className="desktop"/>
        <img src={sectionMobile} width={"100%"} className="mobile"/>
        <div className="container__mosaico">
          <div className="container__gif1">
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={gif1} />
            </div>
          </div>
          <div className="container__gif2">
            <div>
              <h2>
                heineken Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim.
              </h2>
              <img src={gif2} className="gif2" />
            </div>
            <div>
              <img src={img2} className="img-gif2" />
            </div>
          </div>
          <div className="container__gif3">
            <img src={gif3} className="img-gif3" />
          </div>
          <div className="container__gif4-5">
            <div>
              <img src={gif4} className="img-gif4" />
              <h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </h2>
            </div>
            <div>
              <img src={gif5} className="img-gif5" />
              <h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt
              </h2>
            </div>
          </div>
          <div className="container__gif3">
            <img src={gif6} className="img-gif3" />
          </div>
          <div className="container__img3">
            <img src={img3} width={"80%"} className="" />
          </div>
          <div className="container__img-4-5">
            <div>
              <img src={img4} width={"80%"} className="" />
            </div>
            <div>
              <img src={img5} width={"80%"} className="" />
            </div>
          </div>
          <div className="container__img3">
            <img src={img6} width={"80%"} className="" />
          </div>

          <div className="container__p-hnk">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              {" "}
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="container__gif3">
            <a href="/rappi">
              <img src={next} width={"80%"} className="next" />
            </a>
          </div>

          <div className="container__gift-next">
            {/* <h2>NEXT</h2> */}
            <img src={backNext} className="nextBack" />
            <a href="/rappi">
              <img src={imgNext} className="img-next" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
