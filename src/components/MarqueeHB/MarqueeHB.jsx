import React from 'react'

import Marquee from "react-fast-marquee";
import asterisco from "../../assets/about/asterisco.svg";

import "./MarqueeHB.css"

const MarqueeHB = () => {
  return (
    <div>
         <div className="box-marquee">
          <Marquee direction="left" speed={100} delay={5}>
            <span className="marquee">
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />
            </span>
          </Marquee>
        </div>
        <div className="box-marquee">
          <Marquee direction="right" speed={100} delay={5} loop={0}>
            <span className="marquee">
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />
            </span>
          </Marquee>
        </div>
    </div>
  )
}

export default MarqueeHB