import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import slider1 from "../../assets/services/slider1.png";
import slider2 from "../../assets/services/slider2.png";
import slider3 from "../../assets/services/slider3.png";

import './SliderComponent.css'


const SliderComponent = () => {
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

  const slides = [
    {
      key: uuidv4(),
      content: <img src={slider1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={slider2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={slider3} alt="3" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });


  const handleTouchStart = (evt) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!enableSwipe || (!xDown && !yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
        setXDown(null);
        setYDown(null);
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
        setXDown(null);
        setYDown(null);
      }
    }
  };

  return (
    <div
      className="box-carousel-services"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={config[configType]}
      />
      <div
        style={{
          // margin: "0 auto",
          // marginTop: "2rem",
          // width: "50%",
          // display: "flex",
          // justifyContent: "space-around"
        }}
      >
      </div>
    </div>
  );
};

export default SliderComponent;