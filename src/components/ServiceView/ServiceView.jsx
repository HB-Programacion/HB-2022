import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

import { buttonService } from "../data/imagesHome";
import { filterServiceType } from "../services/servicesFilter";

import title from "../../assets/services/8.Services.gif";
import welove from "../../assets/services/9.Help.gif";
import letstalk from "../../assets/services/lets-talk.svg";
import union from "../../assets/services/arrowLeft.svg";
import groupServices from "../../assets/services/group-services.png";
import unionBtn from "../../assets/home/union.svg"

import "./ServiceView.css";
import WeWorkWith from "../WeWorkWith/WeWorkWith";
import MarqueeHB from "../MarqueeHB/MarqueeHB";
import SliderComponent from "../SliderComponent/SliderComponent";

const ServiceView = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setFilteredImages(filterServiceType("content"));
    setActiveButton("content");
  }, []);

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesService = e.target.value;
    console.log("typeImagesService", typeImagesService);

    setActiveButton(typeImagesService);

    typeImagesService !== "all"
      ? setFilteredImages(filterServiceType(typeImagesService))
      : setFilteredImages(filterServiceType());
  };

  return (
    <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
        <img
          src={title}
          className="w-90 m-auto d-block title-services"
          alt="title"
        />
        <div className=" container-sliderComponent">
          <SliderComponent />
        </div>
        <div className="box-services">
          <p className="text-gray text-center">
            From brainstorm to brilliance. Our services aren't just about
            deliverables; they're about the journey of turning visions into
            brand realities. Explore, engage, and see how we transform ideas in
            actions.
          </p>
        </div>
        <div>
          <img src={welove} className=" w-90 m-auto d-block" alt="weLove" />

          <div className="box-btn-filter-services">
            {" "}
            {buttonService &&
              buttonService.map((type, index) => (
                <div style={{ margin: ".5rem 0rem" }} key={index}>
                  <button
                    key={index}
                    value={type.value}
                    onClick={handleImagesHome}
                    className="btn-filter-services"
                    style={{
                      // background:
                      //   activeButton === type.value ? "#none" : "none",
                      color: activeButton === type.value ? "#fff" : "#575757",
                      border: activeButton === type.value && "#000000",
                    }}
                  >
                    {activeButton === type.value && "/"}
                    {type.name}
                    {activeButton === type.value && (
                      <div className="btn-icon-services">
                        <img src={union} alt="union" />
                      </div>
                    )}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div className="">
          <div className="">
            <div>
              {filteredImages &&
                filteredImages.map((type) => (
                  <>
                    <div className="box-services" key={type.id}>
                      <h5 className="description-filter-services">
                        {type.title}
                      </h5>
                      <div className="box-subtitle-img">
                        <p className="subtitle-filter-services">{type.key}</p>
                        <div className="icon-services">
                          {" "}
                          <img
                            src={type.urlHbArea}
                            alt={type.service}
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="">
                      {type.urlMarcaByService &&
                        type.urlMarcaByService.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`${index}`}
                            className="w-80 m-auto d-block"
                          />
                        ))}
                    </div> */}
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className="">
          <img src={groupServices} className="w-100" />
          <div className="box-btn">
            <Link to="/work" className="btn-white">
              SEE OUR WORK
              <img src={unionBtn} alt="arrow-right" className="arrow-black" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <MarqueeHB />
      </div>
      <WeWorkWith />
      <div className="box-services bg-black">
        <img src={letstalk} className="m-auto d-block" alt="letsTalk" />
        <p className="text-gray text-lets-talk">
          We can help you and your brand stand out in today's competitive
          market, can build new brands from start to finish, or revive existing
          ones.
        </p>
        <div className="btn-white">hire us!</div>
      </div>
    </>
  );
};

export default ServiceView;
