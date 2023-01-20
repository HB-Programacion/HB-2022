import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import logoGift from "../../assets/header/logo-gift.gif";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Home.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";

const Home = () => {
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
      <div
        className="box-marquee"
        style={{
        width: '100%',
        whiteSpace: 'nowrap',
        }}
      >
        <Marquee
          speed={0.25}
          scrollWhen="overflow"
          direction="left"
          delay="0"
        >
          <span className="marquee">
            {/* always watching. the curiosity is sexy. always watching. always watching. the curiosity is sexy. always watching. */}
            always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy. always watching. the curiosity is sexy.
          </span>
        </Marquee>
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
              src="https://res.cloudinary.com/henribarrett/video/upload/v1673456899/hb-2023/video-hnk_wczrbk.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="box-text-home">
          <img src={divider} className="gif" />
          <div className="container__text">
            <h1>
              Nos adelantamos al futuro, nos anticipamos a las posibilidades,
              proponemos soluciones que van más alla de lo evidente y del brief,
              somos analíticos y pensamos siempre en la mejor solución de
              acuerdo al problema.
            </h1>
            <img src={logoGift} className="logo-gift" />
          </div>
        </div>
      </div>
      <div id="box-filter-parallax" className="box-test">
        <h1 className="word">work</h1>
        <div className="container__parallax">
          <div className="container__buttons">
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
          </div>
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

export default Home;
