import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import logoGift from "../../assets/header/logo-gift.gif";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import img2 from "../../assets/home/img-2.png";
import arrowbtn from "../../assets/arrow-btn.svg";
import wwd from "../../assets/home/wwd.svg";
import icontent from "../../assets/home/icontent.svg";
import union from "../../assets/home/union.svg";
import groupwwd from "../../assets/home/wwd-group.png";
import www from "../../assets/home/www.svg";
import logoPrueba from "../../assets/Betterfly.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Home.css";
import Contact from "../Contact/Contact.jsx";
import Marquee from "react-double-marquee";
import word from "../../assets/home/work.svg";

import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logosMarcas from "../data/logos.json";

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

const handleLanguageClick = () => {
  console.log("handle leng", i18n.language);
  const currentLanguage = i18n.language;

  if (currentLanguage === "en") {
    changeLanguage("es");
  } else {
    changeLanguage("en");
  }
};

const Home = () => {
  const { t } = useTranslation();

  const [imagesMarcasData, setImagesMarcasData] = useState([]);
  const [filteredImages, setFilteredImages] = useState(null);
  const ref = useRef(null);
  const [transitioning, setTransitioning] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);


  const [visibleImages, setVisibleImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);   
  
    useEffect(() => {
      // Lista de imágenes
      function importAll(r) {
        return r.keys().map(r);
      }
      
      const imagesMarcas = importAll(require.context("../../assets/logosMarcas", false, /\.(png|jpe?g|svg)$/)); 
  
      const allImages = Object.values(imagesMarcas);
      const totalImages = allImages.length;
      const visibleImageCount = 8;
      const initialVisibleImages = allImages.slice(0, visibleImageCount);
      setVisibleImages(initialVisibleImages);

      const interval = setInterval(() => {
        let randomVisibleIndex;
        do {
          randomVisibleIndex = Math.floor(Math.random() * visibleImageCount);
        } while (randomVisibleIndex === currentImageIndex);

        let randomInvisibleIndex;
        do {
          randomInvisibleIndex = Math.floor(Math.random() * (totalImages - visibleImageCount) + visibleImageCount);
        } while (randomInvisibleIndex === randomVisibleIndex);

        const updatedVisibleImages = visibleImages.map((image, index) =>
          index === randomVisibleIndex ? allImages[randomInvisibleIndex] : image
        );

        setCurrentImageIndex(randomVisibleIndex);
        setVisibleImages(updatedVisibleImages);
      }, 2000);

      return () => clearInterval(interval);
    }, []);
  

  return (
    <>
      <h1>{t("test")}</h1>
      <span
        onClick={handleLanguageClick}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {i18n.language === "en" ? "Español" : "English"}
      </span>
      <div>
        <Link to="/contact">Go to Contact</Link>
        <Link to="/heinekenFest">Go to heinekenFest</Link>
        <Link to="/rappi">Go to rappi</Link>
        <Link to="/umana">Go to umana</Link>
      </div>
      <div>
        <div className="box-video-background">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            className="video-mp4"
          >
            <source
              src="https://webhb.s3.us-east-2.amazonaws.com/video-hb.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="box-text-home">
          <div className="container__text">
            <h1>{t("home-we-anticipate")}</h1>
          </div>
        </div>
      </div>
      <div id="box-filter-parallax" className="box-test">
        <h1 className="word">work</h1>
        <div className="container__parallax">
          <div className="container__images">
            {filteredImages &&
              filteredImages.map((type) => (
                <div className="container__filter" key={type.id}>
                  <a href={type.href}>
                    <img src={type.url} alt={type.name} />
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div className="button__load">
          <button onClick={() => console.log("click load more")}>
            SEE OUR WORK
            <img src={arrowbtn} alt="arrow-right" />
          </button>
        </div>
      </div>
      <div className="box-bg-gray">
        <div className="box-wwd">
          <img src={wwd} className="wwd" />
        </div>
        <div className="container__text">
          <h1>{t("home-the-world")}</h1>
        </div>

        <div className="group-btns">
          <button className="btn-services">
            <img src={icontent} />
            content
            <img src={union} />
          </button>
          <button className="btn-services">
            <img src={icontent} />
            DESIGN
            <img src={union} />
          </button>
          <button className="btn-services">
            <img src={icontent} />
            EVENTS
            <img src={union} />
          </button>
          <button className="btn-services">
            <img src={icontent} />
            WEB DESIGN
            <img src={union} />
          </button>
          <button className="btn-services">
            <img src={icontent} />
            PRODUCTION
            <img src={union} />
          </button>
          <button className="btn-services">
            <img src={icontent} />
            STRATEGY
            <img src={union} />
          </button>
        </div>
        <div className="container_groupwwd">
          <img src={groupwwd} alt="" className="" />
        </div>
        <div className="button__load">
          <button onClick={() => console.log("click load more")}>
            our services
            <img src={arrowbtn} alt="arrow-right" />
          </button>
        </div>
      </div>
      <img src={img2} className="w-100" />
      <div className="container-www">
        <img src={www} className="www-title" />
        <div className="container-www_logos">
          {visibleImages.map((image, index) => (
            <div className="www_logo">
              <img
                className=""
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  opacity: index === currentImageIndex ? 1 : 0.2,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </div>
          ))}
        </div>
        <p className="p-1">
          We make our clients lives easier and their brands stronger.
        </p>
      </div>
    </>
  );
};

export default Home;