import React, { useEffect, useState } from "react";
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

import imgbg from "../../assets/hnk/baner-hnk.png";
import titleproyect from "../../assets/hnk/heinekenFest.svg";
import hnkimg1 from "../../assets/hnk/hnk-img1.png";
import hnkimg2 from "../../assets/hnk/hnk-img2.png";
import hnkimg3 from "../../assets/hnk/hnk-img3.png";

import "./WorkDetails.css";

const WorkDetails = () => {
  const dataInterna = JSON.parse(localStorage.getItem("work-details"));
  const { title, subtitle, banner } = dataInterna.workDetails;

  console.log("dataInternaWorkDetails", title);

  return (
    <>
      <div className="box-video-background">
        <img src={imgbg} width="100%" height="100%" className="video-mp4" />
      </div>

      <div className=" bg-black">
        <div className="box-workDetails">
          <img src={titleproyect} />
          <p className="subtitle-project">
            KEY VISUAL / ILLUSTRATIONS / LANDING PAGE / WELCOME KITS / VISUALS /
            BRANDING / EVENT / ANIMATIONS / PRODUCTION / LOGISTIC
          </p>
          <div className="box-project-detail">
            <div className="project-detail-item">EVENT</div>
            <div className="project-detail-item">CAMPAIGN</div>
            <div className="project-detail-item">ILLUSTRATION</div>
          </div>
          <div className="box-img-details">
            <img src={hnkimg1} className="w-100" />

            <h5 className="text-challenge">CHALLENGE</h5>
            <p className="description-challenge">
              We started with market research to understand the preferences and
              expectations of local consumers, and then moved on to detailed
              planning, covering everything from logistics and budgeting, to
              marketing and staffing.
            </p>
            <h5 className="text-challenge">SOLUTION</h5>
            <p className="description-challenge">
              To create a memorable experience, we offered a variety of engaging
              and interactive activities, such as games, contests, music
              performances, and food options.
            </p>
          </div>
          {/* <img src={hnkimg2} className="w-100"/> */}
          <img src={gif2} className="w-100" />
          <img src={gif1} className="gif-80" />

          <p className="p-white">
            /A fun and approachable brand system designed for instant
            recognition.
          </p>
        </div>
        <img src={gif3} className="w-100" />
        <img src={gif4} className="gif-70" />
        <img src={gif5} className="gif-90" />

        <div className="box-workDetails">
          <p className="p-white text-right">
            /Lorem ipsum dolor sit amet consectetur. Consectetur maecen ravida
            ipsum accumsan
          </p>
        </div>
        <img src={gif6} className="w-100" />

        <div className="box-workDetails">
          <img src={hnkimg3} className="w-100" />
          <p className="text-gray-poject">
            Artistic, black and white patterns constitute the playful basic
            layer for other brand elements such as pictures, videos and
            headlines. They refer to an important step in every chocolatier’s
            process: hot tempering of the chocolate.
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
