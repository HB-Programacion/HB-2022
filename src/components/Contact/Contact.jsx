import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import logoGift from "../../assets/header/logo-gift.gif";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Contact.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";

const Contact = () => {

// const { ref } = useParallax({ speed: 100 });
const [filteredImages, setFilteredImages] = useState(null);
const ref = useRef(null);

useEffect(() => {
   setFilteredImages(getImagesHome());
}, []);

const handleImagesHome = (e) => {
   e.preventDefault();
   let typeImagesHome = e.target.value;
   typeImagesHome !== "all"
      ? setFilteredImages(filterPokemon(typeImagesHome))
      : setFilteredImages(getImagesHome());
};

return (
   <>
      <div>
         <div className="box-text-home">
            <div className="container__text">
               <h1>
               Nos adelantamos al futuro, nos anticipamos a las posibilidades,
               proponemos soluciones que van más alla de lo evidente y del brief,
               somos analíticos y pensamos siempre en la mejor solución de
               acuerdo al problema.
               </h1>
               {/* <img src={logoGift} className="logo-gift" /> */}
            </div>
         </div>
      </div>
      <div className="button__load">
      <button onClick={() => console.log("click load more")}>
         LOAD MORE
         <img src={arrowRightWhite} alt="arrow-right" />
      </button>
      </div>
   </>
);
};

export default Contact;
