import React, { useEffect, useState, useRef } from "react";
// import Marquee from "react-double-marquee";

import meet from "../../assets/about/3.Essence.gif";
import img1 from "../../assets/about/img1-about.png";
import img2 from "../../assets/about/img2-about.png";

import makers from "../../assets/about/4.Makers.gif";
import img3 from "../../assets/about/img3-about.png";
import img4 from "../../assets/about/img4-about.png";
import intrinsec from "../../assets/about/5.Intrinsic.gif";
import wwb1 from "../../assets/about/wwb-1.svg";
import wwb2 from "../../assets/about/wwb-2.svg";
import wwb3 from "../../assets/about/wwb-3.svg";
import bgsurprise from "../../assets/about/fondo-surprise.svg";
import bgsurpriseD from "../../assets/about/img-surprise-desktop.svg";
import random from "../../assets/about/6.Random.gif";

import arrowdown from "../../assets/about/arrowdown.svg";

import "./About.css";
import MarqueeHB from "../MarqueeHB/MarqueeHB";
import SlideMeetMarkers from "../slideMeetMakers/slideMeetMakers.jsx"

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
import arrowDown from "../../assets/about/arrowDown2.svg";
import download from "../../assets/about/download.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "BEYOND",
      subtitle: "BEYOND A SINGLE DISCIPLINE",
      description: (
        <div>
          <p>
            At the heart of our process lies an understanding that the world
            doesn't fit into neat boxes, and neither do brands. We’re not bound
            by traditional lanes of design, strategy, or creativity.
          </p>
          <p>
            Instead, we fuse them, creating an amalgam that resonates with the
            diverse, dynamic nature of today's audiences.
          </p>
          <p>
            Our multidisciplinary approach ensures that every project is viewed
            from multiple angles, offering holistic solutions that stand out and
            stay relevant.
          </p>
        </div>
      ),
    },
    {
      title: "SHARED",
      subtitle: "SHARED VISION, COLLECTIVE VICTORY",
      description: (
        <div>
          <p>We're firm believers in the power of collaboration. Every project is a partnership, a shared journey where our team and our partners contribute equally. </p>
          <p>There's no hierarchy in innovation. From the newest intern to the seasoned veteran, every voice matters. Because in diversity, in different perspectives, lies the true strength of innovative ideas. </p>
          <p>This approach fosters an environment where creativity flourishes, and projects evolve to be bigger and better than initially imagined.</p>
        </div>
      ),
    },
    {
      title: "DEEPER",
      subtitle: "DEEPER CONNECTIONS THROUGH UNDERSTANDING",
      description: (
        <div>
          <p>We know that this is a business, that behind everything we do there is a very specific objective, so we will make sure to create a strategic framework and offer you tools that guarantee correct decision-making.</p>
        </div>
      ),
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="accordion-item">
        <div className="accordion-item_content">
          <button className="accordion-button" onClick={toggleAccordion}>
            <div>{title}</div>
            {isOpen ? (
              <img
                src={arrowDown}
                alt="arrowDown"
                style={{ transform: "rotate(180deg)" }}
              />
            ) : (
              <img src={arrowDown} alt="arrowDown" />
            )}
          </button>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    );
  };

  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
          <div className="box-about">
            {/* <img src={meet} className="img-tiwwa" /> */}
            <h2 className="titleHb-white">MEET OUR <br></br><span className="titleHb-white-italic">ESSENCE</span></h2>
            <div className="">
              <h3 className="title-about align-start">Design,  Develop,  Deliver</h3>
              <h6 className="subtitle-about align-start">
                Our actions aren’t just words. They are the backbone of what we do.
                Every idea, every concept, begins with a spark and we are passionate
                about turning that spark into tangible creations. From the earliest
                sketch of a brand identity to the final execution of a marketing
                campaign, we believe in prototyping, refining, and perfecting. Every
                product, every project, is a testament to our commitment to
                excellence and innovation.
              </h6>
              <h3 className="title-about align-start">Mixed Mentality</h3>
              <h6 className="subtitle-about align-start">
                An integrated, interdisciplinary approach lies at the heart of our
                philosophy. Recognizing that the most compelling brands are built
                from their core offerings, we champion a foundation that fosters a
                distinct identity and potent marketing. Beyond mere external
                perceptions, it's a matter of orchestrating an ecosystem where
                product, brand, and communication harmonize effortlessly. In this
                fusion, brands are poised to resonate profoundly, accelerate growth,
                and command attention.
              </h6>
            </div>
          </div>
        <img src={img1} className="w-100 img1" />
        <MarqueeHB />
        <div className="box-about">
          <div className="container-accordion">
            <h3 className="title-about text-mutual">Mutual Trust Manifesto</h3>
            <h6 className="subtitle-about">
              In a world increasingly driven by technology, we anchor ourselves in
              genuine human connection. Here, it's not just about the job, it's
              about the bond we share as a team of dedicated professionals. These
              are the cornerstones that guide our work:
              <AccordionItem
                title="Unified Vision"
                content={
                  <p>
                    Each individual offers a unique perspective. Melded together,
                    these insights allow us to craft holistic, impactful
                    solutions.
                  </p>
                }
              />
              <AccordionItem
                title="Endless Curiosity"
                content={
                  <p>
                    Our commitment to constant learning and innovation shapes the
                    core of who we are. Diverse backgrounds and expertise feed our
                    ceaseless quest for the next big idea.
                  </p>
                }
              />
              <AccordionItem
                title="Collaborative Spirit"
                content={
                  <p>
                    Every achievement is the result of the harmony and synergy
                    that resonates within our team. Mutual respect, understanding,
                    and collective growth underscore our every interaction.
                  </p>
                }
              />
            </h6>
          </div>
          <img src={img2} className="w-100 img1" />
        </div>
        <div className="box-about ">
          {/* <img src={makers} className="mop" /> */}
          <h2 className="titleHb-white">Meet THE MAKERS</h2>

          <p className="text-mop text-center">
            Discover the heartbeat of our studio. Together, we challenge
            conventions, celebrate diversity, and drive innovation. Unfold the
            layers of our team and witness the collaboration that defines us.
          </p>
        </div>
        <div className="box-about">
          <SlideMeetMarkers />
        </div>
        <div className="box-about">
          <img src={img3} className="w-100 img1" />
        </div>
      </div>
      <div className="bg-white">
        <div className="box-about">
          {" "}

          <p className="p-black text-acreative">
            A creative agency where strategy, design, and creativity converge.
            Over the years, we've honed our belief that a standout brand emerges
            when these three elements seamlessly intertwine.
          </p>
          <img src={img4} className="w-100 img1" />
        </div>
        <div className="box-about">
          {/* <p className="p-black">
            A creative agency where strategy, design, and creativity converge. Over the years, we've honed our belief that a standout brand emerges when these three elements seamlessly intertwine.
          </p> */}

          {/* <img src={intrinsec} className="wwb" /> */}

          <h2 className="titleHb-black">Intrinsic Ideology</h2>

          <p className="wwb-textdown">
            Henri Barrett is more than just an agency; it's a movement, a
            mindset. We're here to change narratives, elevate brands, and make a
            lasting imprint in the world of design and creativity. Dive into our
            guiding principles, the essence of what makes us Henri Barrett.
          </p>
          <div className="box-wwb-numbers">
            <div className="box-wwb-tabs">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            <div className="tab-content">
              <h2 className="title-tab">{tabs[activeTab].subtitle}</h2>
              <p className="description-tab">{tabs[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black fondo-surprise">
        <div className="box-title-surprise">
          {/* <img src={random} className="img-surprise-kit" /> */}
          <h2 className="titleHb-white">random <span className="titleHb-white-italic">igniters</span></h2>

          <h1 className="text-random">
            Take a break, download and explore this tad. Who knows where our
            bits of randomness will lead you?
          </h1>
          <button className="btn-white-surprise mx2-auto download">
            download <img src={download} />
          </button>
        </div>
        <img src={bgsurprise} className="img-surprise mobile" />
        <img src={bgsurpriseD} className="img-surprise desktop" />
        {/* <p className="p-surprise">
          Lorem ipsum dolor sit amet consectetur. Lectus pharetra ac purus duis
          nisi placerat.
        </p> */}
      </div>
    </>
  );
};

export default About;
