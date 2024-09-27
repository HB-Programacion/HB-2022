import React from "react";
import slider2 from "../../assets/services/sliderMobile.png";
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {


  const slider = [
    {
      id: 1,
      content: slider2
    },
    {
      id: 2,
      content: slider2
    },
    {
      id: 3,
      content: slider2
    },
  ]



  return (
    <div className="box-carousel-services-slider">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {slider.map((item, index ) => (
          <div key={index}>
            <img src={item.content} alt={item.id} className="w-100" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;