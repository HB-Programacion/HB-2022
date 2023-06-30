import React from "react";

import tiwwa from "../../assets/about/tiwwa.svg";
import img1 from "../../assets/about/img1-about.png";
import img2 from "../../assets/about/img2-about.png";

import "./About.css";

const About = () => {
  return (
    <div className="bg-white ">
      <div className="box-about">
        <img src={tiwwa} className="img-tiwwa" />
        <h3 className="title-about">We make things</h3>
        <h6 className="subtitle-about">
          We believe that actions make a difference. That’s why we love to make
          things and try new ideas. We prototype, test and create, whether it’s
          a brand identity, campaign or product.
        </h6>
        <h3 className="title-about">We move brands</h3>
        <h6 className="subtitle-about">
          We believe in an interdisciplinary approach with a strong digital
          core. That means that the strongest brands are built from the product
          out, creating a platform for a strong identity and strong marketing.
        </h6>
      </div>
      <img src={img1} className="w-100 img1" />

      <div className="box-about">
        <h3 className="title-about">Our DNA</h3>
        <h6 className="subtitle-about">
          In a digital world that can sometimes feel disconnected, we believe
          it's essential to form lasting partnerships with each of our clients.
          By forming partnerships, it allows us to get to know each other
          better, understand your needs and struggles, and offer full trust in
          our decisions. To get off to a great start and adhere to our first
          principle of full transparency, we have laid out our four core
          principles. These principles enable us to do excellent work, craft
          stunning experiences, and foster strong partnerships. We trust that
          these four principles will give you an insight into the quality of
          service you can expect from us, and help to build a strong bond
          between our studio and you.
        </h6>
        <img src={img2} className="w-100 img1" />
      </div>
    </div>
  );
};

export default About;
