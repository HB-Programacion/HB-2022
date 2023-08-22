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

  const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-item">
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            cursor: 'pointer',
            color: '#575757'
          }}
          className="accordion-button"
          onClick={toggleAccordion}>
          {title}
        </button>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    );
  }

  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
        <div className="box-about">
          <img src={tiwwa} className="img-tiwwa" />
          <h3 className="title-about">Design, Develop, Deliver</h3>
          <h6 className="subtitle-about">
            Our actions aren’t just words. They are the backbone of what we do. Every idea, every concept, begins with a spark and we are passionate about turning that spark into tangible creations. From the earliest sketch of a brand identity to the final execution of a marketing campaign, we believe in prototyping, refining, and perfecting. Every product, every project, is a testament to our commitment to excellence and innovation.
          </h6>
          <h3 className="title-about">Mixed Mentality</h3>
          <h6 className="subtitle-about">
            An integrated, interdisciplinary approach lies at the heart of our philosophy. Recognizing that the most compelling brands are built from their core offerings, we champion a foundation that fosters a distinct identity and potent marketing. Beyond mere external perceptions, it's a matter of orchestrating an ecosystem where product, brand, and communication harmonize effortlessly. In this fusion, brands are poised to resonate profoundly, accelerate growth, and command attention.
          </h6>
        </div>
        <img src={img1} className="w-100 img1" />
        <MarqueeHB/>
        <div className="box-about">
          <h3 className="title-about">Mutual Trust Manifesto</h3>
          <h6 className="subtitle-about">
            In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals. These are the cornerstones that guide our work:
            <AccordionItem
              title="Unified Vision:"
              content={<p>Each individual offers a unique perspective. Melded together, these insights allow us to craft holistic, impactful solutions.</p>}
            />
            <AccordionItem
              title="Endless Curiosity:"
              content={<p>Our commitment to constant learning and innovation shapes the core of who we are. Diverse backgrounds and expertise feed our ceaseless quest for the next big idea.</p>}
            />
            <AccordionItem
              title="Collaborative Spirit:"
              content={<p>Every achievement is the result of the harmony and synergy that resonates within our team. Mutual respect, understanding, and collective growth underscore our every interaction.</p>}
            />
          </h6>
          <img src={img2} className="w-100 img1" />
        </div>
        <div className="box-about ">
          <img src={mop} className="mop" />
          <p className="text-mop">
            Discover the heartbeat of our studio. Together, we challenge conventions, celebrate diversity, and drive innovation. Unfold the layers of our team and witness the collaboration that defines us.
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
                Diversity is our superpower; unity, our secret sauce.
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
                Celebrating every hue of talent.
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
            A creative agency where strategy, design, and creativity converge. Over the years, we've honed our belief that a standout brand emerges when these three elements seamlessly intertwine.
          </p>

          <img src={wwb} className="wwb" />
          <p className="wwb-textdown">Henri Barrett is more than just an agency; it's a movement, a mindset. We're here to change narratives, elevate brands, and make a lasting imprint in the world of design and creativity. Dive into our guiding principles, the essence of what makes us Henri Barrett.</p>
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
