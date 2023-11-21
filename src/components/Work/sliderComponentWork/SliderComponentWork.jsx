import React, { useState } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import slider1 from "../../../assets/work/sliderWork1.png";
import './SliderComponentWork.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SliderComponentWork = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [enableSwipe, setEnableSwipe] = useState(true);
  const [configType, setConfigType] = useState("gentle");
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);


  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches
    );
  };

  const slider = [
    {
      id: 1,
      content: slider1,
      text: "text 1"
    },
    {
      id: 12,
      content: slider1,
      text: "text 2"
    },
    {
      id: 3,
      content: slider1,
      text: "text 3"
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
            <h1>{item.text}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponentWork;