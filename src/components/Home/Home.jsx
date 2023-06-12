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
import wwwLogos from "../../assets/home/www-logos.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Home.css";
import Contact from "../Contact/Contact.jsx"
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";

import i18n  from "../../i18n/i18n";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

const handleLanguageClick = () => {
  console.log('handle leng', i18n.language)
  const currentLanguage = i18n.language;

  if (currentLanguage === 'en') {
    changeLanguage('es');
  } else {
    changeLanguage('en');
  }
};

const Home = () => {
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
      ? setFilteredImages(filterPokemon(typeImagesHome))
      : setFilteredImages(getImagesHome());
  };

  return (
    <>
      <h1>{t('test')}</h1>
      <span 
        onClick={handleLanguageClick}
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        >
        {i18n.language === 'en' ? 'Español' : 'English'}
      </span>
      <div>
        <Link to="/contact">Go to Contact</Link>
        <Link to="/heinekenFest">Go to heinekenFest</Link>
        <Link to="/rappi">Go to rappi</Link>
        <Link to="/umana">Go to umana</Link>
      </div>
      {/* <div
        className="box-marquee"
        style={{
        width: '100%',
        whiteSpace: 'nowrap',
        }}
      >
        <Marquee
          speed={0.10}
          scrollWhen="overflow"
          direction="left"
          delay={0}
        >
          <span className="marquee">
            always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy.
          </span>
        </Marquee>
      </div> */}
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
          {/* <img src={divider} className="gif" /> */}
          <div className="container__text">
            <h1>
            {t('home-we-anticipate')}
            </h1>
            {/* <img src={logoGift} className="logo-gift" /> */}
          </div>
        </div>
      </div>
      <div id="box-filter-parallax" className="box-test">
        <h1 className="word">work</h1>
        <div className="container__parallax">
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
          <h1>
            {t('home-the-world')}
          </h1>
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
        <img src={wwwLogos} className="www-logos" />
        <p className="p-1">We make our clients lives easier and their brands stronger.</p>
      </div>
    
    </>
  );
};

export default Home;
