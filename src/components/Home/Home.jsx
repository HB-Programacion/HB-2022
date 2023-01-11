import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import gif from "../../assets/home/gif.png";
import logoGift from "../../assets/home/HB gift.png";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Home.css";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

const Home = () => {
  const { ref } = useParallax({ speed: 100 });
  const [filteredImages, setFilteredImages] = useState(null);

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
    <div>
      <Marquee gradient={false} loop={0} speed={50}>
        <p class="marquee">
          {" "}
          always watching. the curiosity is sexy. always watching. the curiosity
          is sexy.
        </p>
      </Marquee>
      {/* <div class="wrapper">
        <p class="target">always watching. the curiosity is sexy</p>
      </div> */}
      <img src="https://via.placeholder.com/1420x616" width={"100%"} />
      <img src={divider} className="gif" />
      <div className="container__text">
        <h1>
          Nos adelantamos al futuro, nos anticipamos a las posibilidades,
          proponemos soluciones que van más alla de lo evidente y del brief,
          somos analíticos y pensamos siempre en la mejor solución de acuerdo al
          problema.
        </h1>
        <img src={logoGift} className="logo-gift" />
      </div>
      <div className="container__parallax">
        <ParallaxBanner
          layers={[{ image: "../../assets/header/Logo-hb.svg", speed: -15 }]}
          className="aspect-[2/1]"
        />

        <div className="container__buttons">
          {buttons &&
            buttons.map((type, index) => (
              <div className="buttons__style">
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
                <img src={type.url} width={"100%"} />
              </div>
            ))}
        </div>
      </div>

      {/* <div className='container__filter'>
          <img src={tabs} width={"90%"} />
        </div>

        <div className="container__projects">
            <div>
                <img src={img1} width={"100%"}/>
            </div>
            <div>
                <img src={img2} width={"100%"}/>
            </div>
            <div>
                <img src={img3} width={"100%"}/>
            </div>
            <div>
                <img src={img4} width={"100%"}/>
            </div>
            <div>
                <img src={img5} width={"100%"}/>
            </div>
            <div>
                <img src={img6} width={"100%"}/>
            </div>
        </div> */}
      <img src={load} width={"23%"} />
    </div>
  );
};

export default Home;