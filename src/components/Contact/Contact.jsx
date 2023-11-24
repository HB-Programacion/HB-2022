import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import homeContact from "../../assets/contact/home-contact.png";
import hireUs from "../../assets/contact/hireus.png";
import arrow from "../../assets/contact/arrow.png";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import title from "../../assets/contact/contact-title-mobile.svg";
import img1 from "../../assets/contact/img-contact.png";

import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import "./Contact.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";
import FormContact from "../FormContact/FormContact";

import { useTranslation } from "react-i18next";

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
        <div className="box-contact">
          <img src={title} className="m-auto d-block"/>
          {/* <div className="container__subtitle">
            <h1>{t("contact-getting")}</h1>
          </div> */}
          {/* <img src={img1} className="m-auto d-block"/> */}
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
