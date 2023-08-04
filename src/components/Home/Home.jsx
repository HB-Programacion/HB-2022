import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import gif from "../../assets/home/gif.png";
import logoGift from "../../assets/header/logo-gift.gif";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import img2 from "../../assets/home/img-2.png";
import arrowbtn from "../../assets/arrow-btn.svg";
import wwd from "../../assets/home/wwd.svg";
import eventsicon from "../../assets/home/events-icon.svg";
import contenticon from "../../assets/home/icontent.svg";
import brandingicon from "../../assets/home/branding-icon.svg";
import tradeicon from "../../assets/home/trade-icon.svg";
import illustrationicon from "../../assets/home/illustration-icon.svg";
import campaignsicon from "../../assets/home/campaigns-icon.svg";
import union from "../../assets/home/union.svg";
import groupwwd from "../../assets/home/img-proyectos.png";

import wmct from "../../assets/home/weMakeCoolThings.gif";
import hnk from "../../assets/home/hnk-home-mobile.png";
import umana from "../../assets/home/umana-home-mobile.png";
import rappi from "../../assets/home/rappi-home-mobile.png";
import tacama from "../../assets/home/tacama-home-mobile.png";
import hb from "../../assets/home/hb-home-mobile.png";

import title from "../../assets/contact/title-contacto.svg";

import { buttons } from "../data/imagesHome";
import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import "./Home.css";
import Contact from "../Contact/Contact.jsx";

// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";

import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import FormContact from "../FormContact/FormContact";
import WeWorkWith from "../WeWorkWith/WeWorkWith";

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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showWork, setShowWork] = useState(false);


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

  const handleCategory = () => {
    setShowWork(true)
  }

  const handleCategorybyName = (category) => {
    navigate(`/work?category=${category}`)
    window.scrollTo(0, 0);
  }

  return (
    <>
      {/* <h1>{t("test")}</h1>
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
      <div
        className="box-marquee"
        style={{
          width: "100%",
          whiteSpace: "nowrap",
        }}
      ></div> */}

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
      <div className="bg-black">
        <div className="box-text-home">
          {/* <img src={divider} className="gif" /> */}
          <div className="container__text">
            <h1 className="text-title">{t("home-we-anticipate")}</h1>
            {/* <img src={logoGift} className="logo-gift" /> */}
          </div>
        </div>
        {/* <h1 className="text-word">WORK</h1> */}
        <div id="box-filter-parallax" className="box-test">
          <h1 className="word">work</h1>
          {/* <div className="container__parallax"> */}
          {/* <div className="container__buttons">
            <div className="filter__style">FILTER</div>
            {buttons &&
              buttons.map((type, index) => (
                <div className="buttons__style" key={index}>
                  <button
                    key={index}
                    value={type.value}
                    onClick={handleImagesHome}
                  >
                    {type.name}
                  </button>
                </div>
              ))}
          </div> */}
          {/* <div className="container__images">
          {filteredImages &&
            filteredImages.map((type) => (
              <div className="container__filter" key={type.id}>
                <a href={type.href}>
                  <img src={type.url} alt={type.name} />
                </a>
              </div>
            ))}
        </div> */}

          <div className="container-img-home">
            <div className="items-img-home">
              <img src={hnk} className="w-100" />
            </div>
            <div>
              <img src={umana} className="w-100" />
            </div>
            <div>
              <img src={rappi} className="w-100" />
            </div>
            <div>
              <img src={tacama} className="w-100" />
            </div>
            <div>
              <img src={hb} className="w-100" />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="bg-black">
          <div className="box-btn">
            <Link to="/work" className="btn-white">
              SEE OUR WORK
              <img src={union} alt="arrow-right" className="arrow-black" />
            </Link>
          </div>
        </div>
        {/* </div> */}
        <div className="box-bg-gray">
          <div className="box-wwd">
            <img src={wmct} className="wwd" />
          </div>
          <div className="container__text-wwd">
            <h1 className="subtitle-wwd text-title">{t("home-the-world")}</h1>
          </div>
            <div className="group-btns">
                <button 
                  className="btn-services" 
                  onClick={() => handleCategorybyName("branding")}
                >
                    <img src={brandingicon} alt="Branding Icon" />
                    branding
                    <img src={union} alt="Union Icon" />
                </button>
                <button 
                  className="btn-services"
                  onClick={() => handleCategorybyName("event")}
                  >
                  <img src={eventsicon} />
                  events
                  <img src={union} />
                </button>
                <button 
                  className="btn-services"
                  onClick={() => handleCategorybyName("content")}  
                >
                  <img src={contenticon} />
                  content
                  <img src={union} />
                </button>
                <button
                  className="btn-services"
                  onClick={() => handleCategorybyName("campaing")} 
                >
                  <img src={campaignsicon} />
                  campaigns
                  <img src={union} />
                </button>
                <button
                  className="btn-services"
                  onClick={() => handleCategorybyName("trade")}
                >
                  <img src={tradeicon} />
                  trade
                  <img src={union} />
                </button>
                <button
                  className="btn-services"
                  onClick={() => handleCategorybyName("illustration")}
                >
                  <img src={illustrationicon} />
                  illustration
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
      </div>
      <img src={img2} className="w-100" />
      <WeWorkWith />

      <div className="bg-black">
        <div className="box-contact">
          <img src={title} />
          {/* <div className="container__subtitle">
            <h1>{t("contact-getting")}</h1>
          </div> */}
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default Home;
