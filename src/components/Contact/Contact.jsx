import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import homeContact from "../../assets/contact/home-contact.png";
import hireUs from "../../assets/contact/hireus.png";
import arrow from "../../assets/contact/arrow.png";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import "./Contact.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";
import FormContact from "../FormContact/FormContact";

import { useTranslation } from 'react-i18next';

const Contact = () => {
   const { t } = useTranslation();
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
      ? setFilteredImages(filterHomeType(typeImagesHome))
      : setFilteredImages(getImagesHome());
};

return (
   <>
      <div className="bg-black">
      <div className="fondo-header"></div>
         <div className="box-text-home">
            <div className="container__text">
               <img src={hireUs} className="hireusContact" />
               <h1 className="title__contact">
                  <img src={arrow} className="arrowContact" />
                  <div className="text__title">
                     Let's create <br/> <span>something</span> <br/> sexy
                  </div>
               </h1>
               <img src={homeContact} className="homeContact" />
            </div>
            <div className="container__subtitle">
               <h1>
                  {t('contact-getting')}
               </h1>
            </div>
            <FormContact/>
         </div>
      </div>
   </>
);
};

export default Contact;
