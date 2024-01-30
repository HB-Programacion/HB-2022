import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import title from "../../assets/contact/tiltle-contact-home.svg";
import titleD from "../../assets/contact/title-contact-desktop.png";

import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import "./Home.css";

import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import FormContact from "../FormContact/FormContact";
import WeWorkWith from "../WeWorkWith/WeWorkWith";
import { getImageUrl } from "../../services/s3services";

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

const handleLanguageClick = () => {
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

  const hnkD = getImageUrl('hnkD');
  const rappiD = getImageUrl('rappiD');
  const img2 = getImageUrl('img2');
  const img2D = getImageUrl('img2D');
  const workParallax = getImageUrl('workParallax');
  const union = getImageUrl('union');
  const groupwwd = getImageUrl('groupwwd');
  const groupwwdD = getImageUrl('groupwwdD');
  const hnk = getImageUrl('hnk');
  const umana = getImageUrl('umana');
  const teclab = getImageUrl('teclab');
  const rappi = getImageUrl('rappi');
  const umanaD = getImageUrl('umanaD');
  const teclabD = getImageUrl('teclabD');
  const arrowbtn = getImageUrl('arrowbtn');

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
    setShowWork(true);
  };

  const handleCategorybyName = (category) => {
    navigate(`/work?category=${category}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="box-video-background">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop={true}
          playsInline
          className="video-mp4"
          controls={false}
        >
          <source
            src="https://webhb.s3.us-east-2.amazonaws.com/video-hb.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="bg-black">
        <div className="box-text-home">
          <div className="container__text">
            <h1 className="text-title">{t("home-we-anticipate")}</h1>
          </div>
        </div>
        <div id="box-filter-parallax" className="box-test">
          <img src={workParallax} className="word" alt="work" />
          <div className="container-img-home">
            <div className="items-img-home">
              <img src={hnk} className="w-100 mobile" alt="hnk" />
              <img src={hnkD} className="w-100 desktop" alt="hnkD" />
            </div>
            <div>
              <img src={rappi} className="w-100 mobile" alt="rappi" />
              <img src={rappiD} className="w-100 desktop" alt="rappiD" />
            </div>
            <div>
              <img src={umana} className="w-100 mobile" alt="umana" />
              <img src={umanaD} className="w-100 desktop" alt="umanaD" />
            </div>
            <div>
              <img src={teclab} className="w-100 mobile" alt="teclab" />
              <img src={teclabD} className="w-100 desktop" alt="teclabD" />
            </div>
          </div>

          {/* </div> */}
        </div>
        <div className="bg-black">
          <div className="box-btn">
            <Link to="/work" className="btn-white">
              EXPLORE MORE
              <img src={union} alt="arrow-right" className="arrow-black" />
            </Link>
          </div>
        </div>
        {/* </div> */}
        <div className="box-bg-gray">
          <div className="box-titleHb">
            <h2 className="titleHb-black">
              SETTING <br></br>THE COOL<br></br> STANDARD
            </h2>
          </div>
          <div className="container__text-wwd">
            <h1 className="subtitle-wwd text-title">{t("home-the-world")}</h1>
          </div>
          <div className="container__buttons">
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("branding")}
              >
                branding
              </button>
            </div>
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("event")}
              >
                event
              </button>
            </div>
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("trade")}
              >
                trade
              </button>
            </div>
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("content")}
              >
                content
              </button>
            </div>
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("campaing")}
              >
                campaigns
              </button>
            </div>
            <div>
              {" "}
              <button
                className="btn-services"
                onClick={() => handleCategorybyName("illustration")}
              >
                illustration
              </button>
            </div>
          </div>
          <div className="container_groupwwd">
            <img src={groupwwd} alt="" className="mobile" />
            <img src={groupwwdD} alt="" className="desktop" />
          </div>
          <div className="box-img-ourservices">
            <div className="button__load">
              <button onClick={() => console.log("click load more")}>
                OUR SERVICES
                <img src={arrowbtn} alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <img src={img2} className="w-100 mobile" />
        <img src={img2D} className="w-100 desktop" />
      </div>

      <WeWorkWith />

      <div className="bg-black">
        <div className="box-contact">
          <img src={title} className="img-title-contact mobile" />
          <img src={titleD} className="img-title-contact-desktop desktop" />
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default Home;
