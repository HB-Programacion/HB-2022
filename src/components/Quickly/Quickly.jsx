import React, { useEffect, useState, useRef } from "react";
import fw from "../../assets/quickly/quickly.svg";
import { buttons } from "../data/imagesHome";
import { getImagesQuickly, filterPokemon } from "../services/servicesFilter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import quicklys from "../../assets/work/quicklys.svg";

import "./Quickly.css";

const Quickly = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [loadMoreImage, setLoadMoreImage] = useState(null);

  const ref = useRef(null);
  useEffect(() => {
    setFilteredImages(getImagesQuickly());
  }, []);

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesHome = e.target.value;
    typeImagesHome !== "all"
      ? setFilteredImages(filterPokemon(typeImagesHome))
      : setFilteredImages(getImagesQuickly());
  };

  const handleLoadImage = () => {
    setLoadMoreImage(getImagesQuickly());
  };

  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
        <img src={fw} className="fw-title" />
        <p className="text-feature-work">Things we’ve made</p>

        <div className="container__buttons">
          {/* <div className="filter__style"></div> */}
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
        <div className="box-work">
          <div className="gallery__container">
            {/* <ResponsiveMasonry
        columnCountBreakPoints={{ 350: 3, 750: 3, 900: 3 }}
      >
        <Masonry columnsCount={3} gutter="40px"> */}
            {filteredImages &&
              filteredImages.map((type) => (
                <div className="gallery__items" key={type.id}>
                  <a href={type.href}>
                    <img
                      src={type.url}
                      alt={type.name}
                      className="gallery__img"
                    />
                  </a>
                  <h5 className="filter-title">{type.title}</h5>
                </div>
              ))}
            {/* </Masonry>
      </ResponsiveMasonry>  */}
            {loadMoreImage &&
              loadMoreImage.map((type) => (
                <div className="gallery__items" key={type.id}>
                  <a href={type.href}>
                    <img
                      src={type.url}
                      alt={type.name}
                      className="gallery__img"
                    />
                  </a>
                  <h5 className="filter-title">{type.title}</h5>
                </div>
              ))}
          </div>
        </div>
        <div className="p-white">
          // We create brand launch campaigns, gadgets, signage, websites,
          digital assets and much more. All of this happens in our in-house
          production studios.
        </div>
      </div>
    </>
  );
};

export default Quickly;
