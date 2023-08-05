import React, { useEffect, useState, useRef } from "react";
// import Marquee from "react-double-marquee";

import tiwwa from "../../assets/about/tiwwa.svg";
import img1 from "../../assets/about/img1-about.png";
import img2 from "../../assets/about/img2-about.png";

import mop from "../../assets/about/mop.svg";
import img3 from "../../assets/about/img3-about.png";
import img4 from "../../assets/about/img4-about.png";
import wwb from "../../assets/about/wwb.svg";
import wwb1 from "../../assets/about/wwb-1.svg";
import wwb2 from "../../assets/about/wwb-2.svg";
import wwb3 from "../../assets/about/wwb-3.svg";
import bgsurprise from "../../assets/about/fondo-surprise.svg";
import sk from "../../assets/about/surprise-kit.gif";

import arrowdown from "../../assets/about/arrowdown.svg";

import "./About.css";
import MarqueeHB from "../MarqueeHB/MarqueeHB";

import people1 from "../../assets/about/people/Team_1.gif";
import people2 from "../../assets/about/people/Team_2.gif";
import people3 from "../../assets/about/people/Team_3.gif";
import people4 from "../../assets/about/people/Team_4.gif";
import people5 from "../../assets/about/people/Team_5.gif";
import people6 from "../../assets/about/people/Team_6.gif";
import people7 from "../../assets/about/people/Team_7.gif";
import people8 from "../../assets/about/people/Team_8.gif";
import people9 from "../../assets/about/people/Team_9.gif";
import people10 from "../../assets/about/people/Team_10.gif";


const About = () => {
  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
        <div className="box-about">
          <img src={tiwwa} className="img-tiwwa" />
          <h3 className="title-about">We make things</h3>
          <h6 className="subtitle-about">
            We believe that actions make a difference. That’s why we love to
            make things and try new ideas. We prototype, test and create,
            whether it’s a brand identity, campaign or product.
          </h6>
          <h3 className="title-about">We move brands</h3>
          <h6 className="subtitle-about">
            We believe in an interdisciplinary approach with a strong digital
            core. That means that the strongest brands are built from the
            product out, creating a platform for a strong identity and strong
            marketing.
          </h6>
        </div>
        <img src={img1} className="w-100 img1" />
      <MarqueeHB/>

        <div className="box-about">
          <h3 className="title-about">Our DNA</h3>
          <h6 className="subtitle-about">
            In a digital world that can sometimes feel disconnected, we believe
            it's essential to form lasting partnerships with each of our
            clients. By forming partnerships, it allows us to get to know each
            other better, understand your needs and struggles, and offer full
            trust in our decisions. To get off to a great start and adhere to
            our first principle of full transparency, we have laid out our four
            core principles. These principles enable us to do excellent work,
            craft stunning experiences, and foster strong partnerships. We trust
            that these four principles will give you an insight into the quality
            of service you can expect from us, and help to build a strong bond
            between our studio and you.
          </h6>
          <img src={img2} className="w-100 img1" />
        </div>
        <div className="box-about ">
          <img src={mop} className="mop" />
          <p className="text-mop">
            This is the great team that make things come true.
          </p>
        </div>
        <div className="box-about">
          <div className="box-group-people">
            <div className="box-people">
              <img src={people1} className="photo-people" />
            </div>
            <div className="box-people mt-people">
              <img src={people2} className="photo-people" />
            </div>
            <div className="box-people">
              <img src={people3} className="photo-people" />
            </div>
            <div className="box-people mt-people">
              <img src={people4} className="photo-people" />
            </div>
            <div className="box-people">
              <p className="text-people">
                /Lorem ipsum dolor sit amet consectetur. Consectetur maecen
                ravida ipsum accumsan.
              </p>
            </div>
            <div className="box-people mt-people">
              <img src={people5} className="photo-people" />
            </div>
            <div className="box-people">
              <img src={people6} className="photo-people" />
            </div>
            <div className="box-people mt-people">
              <img src={people7} className="photo-people" />
            </div>
            <div className="box-people">
              <img src={people8} className="photo-people" />
            </div>
            <div className="box-people mt-people">
              <p className="text-people">
                /Lorem ipsum dolor sit amet consectetur. Consectetur maecen
                ravida ipsum accumsan.
              </p>
            </div>
            <div className="box-people">
              <img src={people9} className="photo-people" />
            </div>
            <div className="box-people mt-people">
              <img src={people10} className="photo-people" />
            </div>
          </div>
        </div>
        <div className="box-about">
          <img src={img3} className="w-100 img1" />
        </div>
      </div>
      <div className="bg-white">
        <img src={img4} className="w-100 img1" />
        <div className="box-about">
          <p className="p-black">
            A strategy-driven creative agency that will obsess over executing it
            flawlessly. After years perfecting the formula, today we believe
            more than ever in the need to understand that strategy, creativity
            and design must be connected if you want to have a great brand.
          </p>

          <img src={wwb} className="wwb" />
          <p className="wwb-textdown">This is our work philosophy</p>
          <div className="box-wwb-numbers">
            <img src={wwb1} className="wwb-numbers" />
            <img src={wwb2} className="wwb-numbers" />
            <img src={wwb3} className="wwb-numbers" />
          </div>
        </div>
      </div>
      <div className="bg-black fondo-surprise">
        <div className="box-title-surprise">
          <img src={sk} className="img-surprise-kit" />
          <button className="btn-white-surprise mx2-auto">
            download <img src={arrowdown} />
          </button>
        </div>
        <img src={bgsurprise} className="img-surprise" />
        <p className="p-surprise">
          Lorem ipsum dolor sit amet consectetur. Lectus pharetra ac purus duis
          nisi placerat.
        </p>
      </div>
    </>
  );
};

export default About;
