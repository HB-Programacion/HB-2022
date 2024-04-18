import React, { useState } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import slider1 from "../../../assets/work/slider1.png";
import slider2 from "../../../assets/work/slider2.png";
import slider3 from "../../../assets/work/slider3.png";
import './SliderComponentWork.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImageUrl } from "../../../services/s3services";

const SliderComponentWork = () => {

  const workCentria = getImageUrl("workCentria");
  const workVendimia = getImageUrl("workVendimia");
  const workBetter = getImageUrl("workBetter");

  const slider = [
    {
      id: 1,
      content: workCentria,
      text: "Centria Rebranding"
    },
    {
      id: 12,
      content: workVendimia,
      text: "Vendimia Pisco Sarcay"
    },
    {
      id: 3,
      content: workBetter,
      text: "Betterfly Event"
    },
  ]



  return (
    <div className="box-carousel-services-work">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {slider.map((item, index) => (
          <div key={index}>
            <img src={item.content} alt={item.id} />
            <h1 className="text-slider-work">{item.text}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponentWork;