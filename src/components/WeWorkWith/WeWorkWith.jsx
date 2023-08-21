import React from 'react'

import img2 from "../../assets/home/img-2.png";

import www from "../../assets/home/weWorkWith.gif";
import wwwD from "../../assets/home/desktop/weworkwith.svg";
import gif1 from "../../assets/gifs/1.gif";
import gif2 from "../../assets/gifs/2.gif";
import gif3 from "../../assets/gifs/3.gif";
import gif4 from "../../assets/gifs/4.gif";
import gif5 from "../../assets/gifs/5.gif";
import gif6 from "../../assets/gifs/6.gif";
import gif7 from "../../assets/gifs/7.gif";
import gif8 from "../../assets/gifs/8.gif";

import "./WeWorkWith.css"

const WeWorkWith = () => {
  return (
    <div>
    <div className="container-www">
      <img src={www} className="www-title mobile" />
      <img src={wwwD} className="www-title desktop" />
      <div className="container-www_logos">
        <div className="www_logo">
          <img src={gif1} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif2} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif3} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif4} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif5} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif6} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif7} className="w-100" />
        </div>
        <div className="www_logo">
          <img src={gif8} className="w-100" />
        </div>
      </div>
      <p className="p-www">
        We make our clients lives easier and their brands stronger.
      </p>
   
    </div></div>
  )
}

export default WeWorkWith