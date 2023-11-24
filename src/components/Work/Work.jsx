import React, { useEffect, useState } from "react";
import { buttons, imagesHome } from "../data/imagesHome";
import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import arrowbtnBlack from "../../assets/arrow-btn-black.svg";
import arrowbtn from "../../assets/arrow-btn.svg";
import unionBtn from "../../assets/home/union.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import WorkDetails from "../WorkDetails/WorkDetails";
import { useWindowDimensions } from "../CustomHooks/UseWindowDimensions/UseWindowDimensions";

import "./Work.css";

import fw from "../../assets/work/7.Work.gif";
import quicklys from "../../assets/work/quickly-all.svg";
import SliderComponentWork from "./sliderComponentWork/SliderComponentWork";

const Work = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [loadMoreImage, setLoadMoreImage] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [dataInterna, setDataInterna] = useState(null);
  const [matchedImage, setMatchedImage] = useState(0);

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
      //const nextImage = imagesHome[index + 1];

      localStorage.setItem("work-details", JSON.stringify(filteredImages));
      localStorage.setItem("work-specific", JSON.stringify(matchedImage.id));

      navigate(`/workDetails/${matchedImage.id}`);
    }
  };

  const { width } = useWindowDimensions();
  const breakpoint = 576;

  return (
    <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
        {/* <img src={fw} className="fw-title" /> */}
        <h2 className="titleHb-white">
          work & <span className="titleHb-white-italic">wonders</span>
        </h2>

        <p className="text-feature-work">
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
            <div>
            {filteredImages &&
              filteredImages.map((type) => (
                type.title && (
                  <div
                    className="gallery__items"
                    key={type.id}
                    onClick={() => handleDataClick(type)}
                  >
                    <div>
                      <img
                        src={type.url}
                        alt={type.name}
                        className="gallery__img"
                      />
                    </div>
                    <h5 className="filter-title">{type.title}</h5>
                    <p className="filter-subtitle">{type.description.toUpperCase()}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
        <div className="box-work">
          <p className="p-gray text-center">
            Brands are more than logos; they're experiences, emotions, and
            connections. We harness this essence, optimizing every touchpoint
            for maximum impact. Discover how we amplify brand value,
            transforming clients' visions into victories.{" "}
          </p>
        </div>
        <div className="button__load-work">
          <button onClick={handleLoadImage}>
            LOAD MORE <img src={arrowbtnBlack} alt="arrow-right" />
          </button>
        </div>

        <div className="box-work-w bg-white">
          {/* <img src={quicklys} /> */}
          <h2 className="titleHb-black">quicklys</h2>
          <p className="p-black text-center">
            A collection of projects we've whipped up in record time. They may
            not have taken ages to conceive, but they radiate our commitment to
            quality and creativity.{" "}
          </p>

          {/* <div className="bg-white">
          <div className="button__load">
            <button onClick={() => console.log("click load more")}>
              See all
              <img src={arrowbtn} alt="arrow-right" />
            </button>
          </div>
        </div> */}

          {width > breakpoint ? (
            <img src={quicklys} />
          ) : (
            <div className="box-slider-component-work"><SliderComponentWork /></div>
          )}

          <div className="button__load">
            <a href="/quickly" className="btn-black">
              See all
              <img src={arrowbtn} alt="arrow-right" />
            </a>
          </div>
          {dataInterna && <WorkDetails />}
        </div>
      </div>
    </>
  );
};

export default Work;
