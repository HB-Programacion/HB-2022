import React, { useEffect, useState } from "react";
import { buttonService } from "../data/imagesHome";
import { getDataServices, filterServiceType } from "../services/servicesFilter";


import "./ServiceView.css";

const ServiceView = () => {
   const [filteredImages, setFilteredImages] = useState(null);
   const [activeButton, setActiveButton] = useState(null);

   useEffect(() => {
      setFilteredImages(getDataServices());
   }, [])
   

   const handleImagesHome = (e) => {
      e.preventDefault();
      let typeImagesService = e.target.value;
  
      setActiveButton(typeImagesService);

      typeImagesService !== "content"
      ? setFilteredImages(filterServiceType(typeImagesService))
      : setFilteredImages(getDataServices());

   }

   return (
      <>
         <div className="">
            {buttonService &&
               buttonService.map((type, index) => (
               <div className="" style={{ margin: '1rem 0.5rem' }} key={index}>
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
                        <div
                        className=""
                        key={type.id}
                        >
                           <div style={{ backgroundColor: 'white' }}>
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
                              ))
                           }
                        </div>
                     </>
               ))}
               </div>
            </div>
         </div>
      </>
   )
} 

export default ServiceView;