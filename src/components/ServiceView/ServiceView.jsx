import React, { useEffect, useState } from "react";
import { buttonService } from "../data/imagesHome";
import { getDataServices, filterServiceType } from "../services/servicesFilter";
import Marquee from "react-fast-marquee";

import title from "../../assets/services/barrett-services.gif";
import img1 from "../../assets/services/img-services1.png";
import welove from "../../assets/services/we-love-creating.svg";
import asterisco from "../../assets/about/asterisco.svg";
import letstalk from "../../assets/services/lets-talk.svg";

import "./ServiceView.css";
import WeWorkWith from "../WeWorkWith/WeWorkWith";

const ServiceView = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setFilteredImages(getDataServices());
  }, []);

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesService = e.target.value;

    setActiveButton(typeImagesService);

    typeImagesService !== "content"
      ? setFilteredImages(filterServiceType(typeImagesService))
      : setFilteredImages(getDataServices());
  };

  return (
    <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
        <img src={title} className="m-auto d-block title-services" />
        <img src={img1} className=" w-90 m-auto d-block" />
        <div className="box-services">
          <p className="text-gray">
            /// Our team is ready to spar with you over the brand’s evolution
            plan, future opportunities and dedicated solutions
          </p>
        </div>
        <div className="">
          <img src={welove} className=" m-auto d-block" />

          {buttonService &&
            buttonService.map((type, index) => (
              <div className="" style={{ margin: "1rem 0.5rem" }} key={index}>
                <button
                  key={index}
                  value={type.value}
                  onClick={handleImagesHome}
                  style={{
                    background:
                      activeButton === type.value ? "#FF4040" : "none",
                    color: activeButton === type.value ? "#ffffff" : "#000000",
                    border: activeButton === type.value && "#000000",
                  }}
                >
                  {type.name}
                </button>
              </div>
            ))}
        </div>
        <div className="">
          <div className="">
            <div>
              {filteredImages &&
                filteredImages.map((type) => (
                  <>
                    <div className="" key={type.id}>
                      <div style={{ backgroundColor: "#1111" }}>
                        <img
                          src={type.urlHbArea}
                          alt={type.service}
                          className=""
                        />
                      </div>
                      <h5 className="">{type.title}</h5>
                      <p className="">{type.key}</p>
                    </div>
                    <div className="">
                      {type.urlMarcaByService &&
                        type.urlMarcaByService.map((url, index) => (
                          <img key={index} src={url} alt={`Image ${index}`} />
                        ))}
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="box-marquee">
          <Marquee direction="left" speed={100} delay={5}>
            <span className="marquee">
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />
            </span>
          </Marquee>
        </div>
        <div className="box-marquee">
          <Marquee direction="right" speed={100} delay={5} loop={0}>
            <span className="marquee">
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />{" "}
              always watching <img src={asterisco} className="asterisco" /> the
              curiosity is sexy <img src={asterisco} className="asterisco" />
            </span>
          </Marquee>
        </div>
      </div>
      <WeWorkWith />
      <div className="box-services bg-black">
        <img src={letstalk} className="m-auto d-block" />
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
