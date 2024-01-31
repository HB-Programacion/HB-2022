import React from "react";

import Marquee from "react-fast-marquee";
import asterisco from "../../assets/about/asterisco.svg";

import "./MarqueeHB.css";

const generateRepeatedContent = (times) => {
  const repeatedContent = [];
  for (let i = 0; i < times; i++) {
    repeatedContent.push(
      <React.Fragment key={i}>
        always watching <img src={asterisco} className="asterisco" /> the
        curiosity is sexy <img src={asterisco} className="asterisco" />
      </React.Fragment>
    );
  }

  return repeatedContent;
};

const MarqueeHB = () => {
  const repeatedContent = generateRepeatedContent(50);

  return (
    <div>
      {/* <div className="box-marquee">
          <Marquee direction="left" speed={30} loop={0}>
            <span className="marquee">
              {repeatedContent}
            </span>
          </Marquee>
        </div>
        <div className="box-marquee">
          <Marquee direction="rigth" speed={30} loop={100}>
            <span className="marquee">
              {repeatedContent}
            </span>
          </Marquee>
        </div> */}
      <div className="box-marquee">
        <section class="a-section">
          <div class="a-section-marquee-box">
          <h2 class="marquee-text">always watching <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">curiosity is sexy <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">always watching  <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">curiosity is sexy <img src={asterisco} className="asterisco" /> </h2>
          </div>
        </section>

        <section class="b-section">
          <div class="b-section-marquee-box">
            <h2 class="marquee-text">always watching <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">curiosity is sexy <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">always watching  <img src={asterisco} className="asterisco" /> </h2>
            <h2 class="marquee-text">curiosity is sexy <img src={asterisco} className="asterisco" /> </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarqueeHB;
