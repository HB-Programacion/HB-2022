import React, { useEffect, useState } from "react";
import { buttonService } from "../data/imagesHome";
import { getDataServices, filterServiceType } from "../services/servicesFilter";
import Marquee from "react-fast-marquee";

import title from "../../assets/services/barrett-services.gif";
import img1 from "../../assets/services/img-services1.png";
import welove from "../../assets/services/we-love-creating.gif";
import asterisco from "../../assets/about/asterisco.svg";
import letstalk from "../../assets/services/lets-talk.svg";

import "./ServiceView.css";
import WeWorkWith from "../WeWorkWith/WeWorkWith";
import MarqueeHB from "../MarqueeHB/MarqueeHB";

const ServiceView = () => {
const [filteredImages, setFilteredImages] = useState(null);
const [activeButton, setActiveButton] = useState(null);

useEffect(() => {
   setFilteredImages(filterServiceType('content'));
   setActiveButton('content');
}, []);

const handleImagesHome = (e) => {
   e.preventDefault();
   let typeImagesService = e.target.value;
   console.log('typeImagesService', typeImagesService)

   setActiveButton(typeImagesService);

   typeImagesService !== "all"
      ? setFilteredImages(filterServiceType(typeImagesService))
      : setFilteredImages(filterServiceType());
};

return (
   <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
      <img src={title} className="w-90 m-auto d-block title-services" />
      <img src={img1} className=" w-90 m-auto d-block" />
      <div className="box-services">
         <p className="text-gray">
            /// Our team is ready to spar with you over the brand’s evolution
            plan, future opportunities and dedicated solutions
         </p>
      </div>
      <div>
         <img src={welove} className=" w-90 m-auto d-block" />

         <div className="box-btn-filter-services">
            {" "}
            {buttonService &&
            buttonService.map((type, index) => (
               <div style={{ margin: "1rem 0rem" }} key={index}>
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
                  {type.name}
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
                  <div className="">
                     {type.urlMarcaByService &&
                        type.urlMarcaByService.map((url, index) => (
                        <img key={index} src={url} alt={`Image ${index}`} className="w-80 m-auto d-block"/>
                        ))}
                  </div>
                  </>
               ))}
            </div>
         </div>
      </div>
      </div>
      <div>
      <MarqueeHB />
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
