import React from "react";

import people1 from "../../assets/about/people/foto1.png";
import people2 from "../../assets/about/people/foto2.png";
import people3 from "../../assets/about/people/foto3.png";
import people4 from "../../assets/about/people/foto4.png";
import people5 from "../../assets/about/people/foto5.png";
import people6 from "../../assets/about/people/foto6.png";

import peopleV1 from "../../assets/about/people/RIC AJU.mp4";
import peopleV2 from "../../assets/about/people/Tate_Res.mp4";
import peopleV3 from "../../assets/about/people/ADRI AJUS.mp4";
import peopleV4 from "../../assets/about/people/CARLITA AJU.mp4";
import peopleV5 from "../../assets/about/people/GIAN AJU.mp4";
import peopleV6 from "../../assets/about/people/Guille_Aju.mp4";
import peopleV7 from "../../assets/about/people/LUCHO AJU.mp4";
import peopleV8 from "../../assets/about/people/MORE AJU.mp4";
import peopleV9 from "../../assets/about/people/OS AJU.mp4";
import peopleV10 from "../../assets/about/people/JOSE AJU.mp4";

import "./slideMeetMakers.css";

const slideMeetMakers = () => {
  return (
    <div className="box-marqueeSlide">
      <div class="marqueeSlide">
        <div class="marqueeSlide-content">
          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                data-url={peopleV1}
               src={peopleV1}
                className="img-l"
                preload="metadata"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
                data-trigger-on-scroll="true" 
                type="video/mp4"
                ontrolslist="nofullscreen nodownload"
              ></video>
              {/* <img src={peopleV1} alt="" className="img-l"/> */}
            </div>
            <p className="title-people">Maria José Ramirez 1</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV2}
                className="img-s"
                preload="metadata"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
                data-trigger-on-scroll="true" 
                type="video/mp4"
                ontrolslist="nofullscreen nodownload"
              ></video>
              {/* <img src={peopleV2} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez 2</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV3}
                className="img-l"
                preload="metadata"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
                data-trigger-on-scroll="true" 
                type="video/mp4"
                ontrolslist="nofullscreen nodownload"
              ></video>

              {/* <img src={people3} alt="" className="img-l" /> */}
            </div>
            <p className="title-people">Maria José Ramire3</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV4}
                className="img-s"
                preload="metadata"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
                data-trigger-on-scroll="true" 
                type="video/mp4"
                ontrolslist="nofullscreen nodownload"
              ></video>

              {/* <img src={people4} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez4</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV5}
                className="img-l"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people5} alt="" className="img-l"/> */}
            </div>
            <p className="title-people">Maria José Ramirez5</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV6}
                className="img-s"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people6} alt="" className="img-s" /> */}
            </div>
            <p className="title-people">Maria José Ramirez6</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV7}
                className="img-l"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people1} alt="" className="img-l"/> */}
            </div>
            <p className="title-people">Maria José Ramirez7</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV8}
                className="img-s"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people2} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez8</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV9}
                className="img-l"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people3} alt="" className="img-l"/> */}
            </div>
            <p className="title-people">Maria José Ramirez9</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV10}
                className="img-s"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people4} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez10</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              {/* <img src={people5} alt="" className="img-l"/> */}
              <video
                src={peopleV1}
                className="img-l"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV2}
                className="img-s"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people6} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV3}
                className="img-l"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people1} alt="" className="img-l"/> */}
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <video
                src={peopleV4}
                className="img-s"
                autoPlay
                loop="true"
                muted
                controls="false"
                webkit-playsinline
                playsinline
              ></video>

              {/* <img src={people2} alt="" className="img-s"/> */}
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <img src={people3} alt="" className="img-l" />
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>

          <div class="marqueeSlide-item">
            <div className="box-img-slide-people">
              <img src={people4} alt="" className="img-s" />
            </div>
            <p className="title-people">Maria José Ramirez</p>
            <p className="descrption-people">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slideMeetMakers;
