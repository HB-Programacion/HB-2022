import React from "react";
import slider1 from "../../assets/services/slider1.png";
import slider2 from "../../assets/services/sliderMobile.png";
import slider3 from "../../assets/services/slider3.png";
import "./carousel3d.css";

const carousel3d = () => {
  return (
    <div>
      <section id="slideshow">
        <div class="entire-content">
          <div class="content-carrousel">
            <figure class="shadow">
              <a href="/">
                <img src={slider1} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider2} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider3} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider1} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider2} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider3} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider1} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider2} />
              </a>
            </figure>
            <figure class="shadow">
              <a href="/">
                <img src={slider3} />
              </a>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default carousel3d;
