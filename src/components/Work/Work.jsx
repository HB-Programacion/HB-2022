import React, { useEffect, useState } from "react";
import { buttons, imagesHome } from "../data/imagesHome";
import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import arrowbtnBlack from "../../assets/arrow-btn-black.svg";
import arrowbtn from "../../assets/arrow-btn.svg";
import { useNavigate, useLocation } from "react-router-dom";
import WorkDetails from "../WorkDetails/WorkDetails";
import { useWindowDimensions } from "../CustomHooks/UseWindowDimensions/UseWindowDimensions";

import "./Work.css";

import fw from "../../assets/work/7.Work.gif";
import bulevard from "../../assets/work/bulevard.svg";
import jokr1 from "../../assets/work/jokr1.svg";
import centria from "../../assets/work/centria.svg";
import SliderComponentWork from "./sliderComponentWork/SliderComponentWork";

const Work = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [loadMoreImage, setLoadMoreImage] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [dataInterna, setDataInterna] = useState(null);
  const [matchedImage, setMatchedImage] = useState(0);
  const [imageClasses, setImageClasses] = useState([]);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const filteredByCategory = filterHomeType(category);

  useEffect(() => {
    setFilteredImages(
      filteredByCategory.length === 0
        ? getImagesHome()
        : filterHomeType(filteredByCategory[0].type)
    );
    setActiveButton(
      filteredByCategory.length === 0 ? "all" : filteredByCategory[0].type
    );
  }, []);

  const navigate = useNavigate();

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesHome = e.target.value;

    setActiveButton(typeImagesHome);

    typeImagesHome !== "all"
      ? setFilteredImages(filterHomeType(typeImagesHome))
      : setFilteredImages(getImagesHome());

    queryParams.delete("category");
    navigate(`?${queryParams.toString()}`, { replace: true });
  };

  const handleLoadImage = () => {
    setLoadMoreImage(getImagesHome());
  };

  const handleDataClick = (type) => {
    const index = imagesHome.findIndex((image) => image.id === type.id);

    if (index !== -1 && index < imagesHome.length - 1) {
      const matchedImage = imagesHome[index];
      setMatchedImage(matchedImage);

      localStorage.setItem("work-details", JSON.stringify(filteredImages));
      localStorage.setItem("work-specific", JSON.stringify(matchedImage.id));

      navigate(`/workDetails/${matchedImage.id}`);
    }
  };

  const { width } = useWindowDimensions();
  const breakpoint = 576;

  const handleImageLoad = (event, image) => {
    const width = event.target.naturalWidth;
    const newClasses = [...imageClasses];

    newClasses[image.index] = getImageClass(width);
    setImageClasses(newClasses);
  };

  const getImageClass = (width) => {
    console.log(width)
    const smallImageWidth = 760;
    const largeImageWidth = 1450;

    if (width <= smallImageWidth) {
      return 'small-image';
    } else if (width <= largeImageWidth) {
      return 'large-image';
    }

    return '';
  };

  return (
    <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
        <h2 className="titleHb-white container__text">
          work & <span className="titleHb-white-italic">wonders</span>
        </h2>

        <p className="text-feature-work container__text">
          Content, branding, events, trade marketing – we do it all. Choose a
          category or take a tour through our work.
        </p>
        <div className="container__buttons">
          {buttons &&
            buttons.map((type, index) => (
              <div className="buttons__style" key={index}>
                <button
                  key={index}
                  value={type.value}
                  onClick={handleImagesHome}
                  style={{
                    background:
                      activeButton === type.value ? "#FF4040" : "none",
                    color: activeButton === type.value ? "#000000" : "#ffffff",
                    border: activeButton === type.value && "#000000",
                  }}
                >
                  {type.name}
                </button>
              </div>
            ))}
        </div>

        <div className="box-work">
          <div className="gallery__container-work">
            {filteredImages &&
              filteredImages.map((type, index) => (
                <div
                  className={`gallery__items ${imageClasses[index] || 'small-image'}`}
                  key={type.id}
                  onClick={() => handleDataClick(type)}
                >
                  <img
                    src={type.url}
                    alt={type.name}
                    className="gallery__img"
                    onLoad={(e) => handleImageLoad(e, { index })}
                  />
                  <h5 className="filter-title">{type.title}</h5>
                  <p className="filter-subtitle">{type.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="box-work">
          <p className="p-gray text-center parrafo container__text">
          We create brand launch campaigns, gadgets, signage, websites, digital assets and much more.  All of this happens in our in-house production studios.{" "}
          </p>
        </div>
        <div className="button__load-work">
          <button onClick={handleLoadImage}>
            LOAD MORE <img src={arrowbtnBlack} alt="arrow-right" />
          </button>
        </div>

        <div className="box-work-w bg-white">
          <h2 className="titleHb-black">quicklys</h2>
          <p className="p-black text-center  ">
            A collection of projects we've whipped up in record time. They may
            not have taken ages to conceive, but they radiate our commitment to
            quality and creativity.{" "}
          </p>
          {width > breakpoint ? (
            <div className="gallery__container-img">
            <div className="gallery__item">
              <img src={bulevard} alt="bulevard" className="single-image" />
              <h5 className="filter-title-item">Hendrick’s OOH Asia Bulevard</h5>
            </div>
            <div className="gallery__item">
              <img src={jokr1} alt="jokr1" className="single-image" />
              <h5 className="filter-title-item">JOKR Christmas Illustrations</h5>
            </div>
            <div className="gallery__item">
              <img src={centria} alt="centria" className="single-image" />
              <h5 className="filter-title-item">Centria Rebranding</h5>
            </div>
          </div>
          ) : (
            <div className="box-slider-component-work"><SliderComponentWork /></div>
          )}

          {/* <div className="button__load">
            <a href="/quickly" className="btn-black">
              See all
              <img src={arrowbtn} alt="arrow-right" />
            </a>
          </div> */}
          {dataInterna && <WorkDetails />}
        </div>
      </div>
    </>
  );
};

export default Work;
