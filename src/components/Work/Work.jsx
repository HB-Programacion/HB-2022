import React, { useEffect, useState } from "react";
import { buttons, imagesHome } from "../data/imagesHome";
import { getImagesHome, filterHomeType } from "../services/servicesFilter";
import arrowbtn from "../../assets/arrow-btn.svg";
import unionBtn from "../../assets/home/union.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import WorkDetails from "../WorkDetails/WorkDetails";

import "./Work.css";

import fw from "../../assets/work/7.Work.gif";
import quicklys from "../../assets/work/quicklys.svg";

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

  return (
    <>
      <div className="fondo-header"> </div>
      <div className="bg-black ">
        <img src={fw} className="fw-title" />
        <p className="text-feature-work">
          Things we’ve made Content, branding, events, trade marketing – we do
          it all. Choose a category or take a tour through our diverse work.
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
                    <p className="filter-subtitle">{type.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="box-work p-gray">
          // We create brand launch campaigns, gadgets, signage, websites,
          digital assets and much more. All of this happens in our in-house
          production studios.{" "}
        </div>
        <div className="button__load-work">
          <button onClick={handleLoadImage}>
            LOAD MORE <img src={unionBtn} alt="arrow-right" />
          </button>
        </div>

        {/* <div className="box-work-w bg-white">
          <img src={quicklys} />
        </div> */}
        {/* <div className="bg-white">
          <div className="button__load">
            <button onClick={() => console.log("click load more")}>
              See all
              <img src={arrowbtn} alt="arrow-right" />
            </button>
          </div>
        </div> */}
      </div>

      <div className="box-work-w bg-white">
        <img src={quicklys} />
        <p className="p-black">
        Content, branding, events, trade marketing – we do it all. Choose a category or take a tour through our diverse work.
        </p>
      </div>
      <div className="bg-white">
        <div className="button__load">
          <a href="/quickly" className="btn-black">
            See all
            <img src={arrowbtn} alt="arrow-right" />
          </a>
        </div>
      </div>

      {dataInterna && <WorkDetails />}
    </>
  );
};

export default Work;
