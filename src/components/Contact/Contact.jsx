import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import homeContact from "../../assets/contact/home-contact.png";
import hireUs from "../../assets/contact/hireus.png";
import arrow from "../../assets/contact/arrow.png";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import titleM from "../../assets/contact/title-contact-mobile.svg";
import titleD from "../../assets/contact/title-contact-desktop.svg";
// import gifContact from "https://webhb.s3.us-east-2.amazonaws.com/Contact/contact.gif";
import img1 from "../../assets/contact/img-contact.png";

import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import "./Contact.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";
import FormContact from "../FormContact/FormContact";

import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../services/s3services";

const Contact = () => {
  const { t } = useTranslation();
  // const { ref } = useParallax({ speed: 100 });
  const [filteredImages, setFilteredImages] = useState(null);
  const ref = useRef(null);
  const contactGif = getImageUrl("contactGif");

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
  const arrowbtn = getImageUrl("arrowbtn");
  return (
    <>
      <div className="bg-black">
        <div className="fondo-header"></div>
        <div className="box-contact">

         


          <div className="box-title-contact">
            <img src={titleD} className="title-contact-desktop1 desktop"></img>
            <img src={titleM} className="title-contact-mobile1 mobile"></img>
            <img src='https://webhb.s3.us-east-2.amazonaws.com/Contact/contact.gif' className="gif-contact-title" />
          </div>
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
