import React, { useEffect, useState, useRef } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

import fw from "../../assets/quickly/10.Quicklys.gif";
import { buttons } from "../data/imagesHome";
import {
  getImagesQuickly,
  filterQuicklyType,
} from "../services/servicesFilter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import quicklys from "../../assets/work/quicklys.svg";
import ReactModal from "react-modal";
import hb from "../../assets/quickly/hb-back.svg";
import thankYou from "../../assets/quickly/thanks for watching_GIF.gif";
import arrowBtnBlack from "../../assets/arrow-btn-black.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import unionBtn from "../../assets/home/union.svg";
import { useWindowDimensions } from "../CustomHooks/UseWindowDimensions/UseWindowDimensions";

import "./Quickly.css";

const Quickly = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [loadMoreImage, setLoadMoreImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [videoRefs, setVideoRefs] = useState({});

  const videoRef = useRef(null);

  useEffect(() => {
    setFilteredImages(getImagesQuickly());
    setActiveButton("all");
  }, []);

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesHome = e.target.value;
    setActiveButton(typeImagesHome);
    typeImagesHome !== "all"
      ? setFilteredImages(filterQuicklyType(typeImagesHome))
      : setFilteredImages(getImagesQuickly());
  };

  const handleMouseEnter = (id) => {
    if (videoRefs[id]) {
      videoRefs[id].play();
    }
  };

  const handleMouseLeave = (id) => {
    if (videoRefs[id]) {
      videoRefs[id].pause();
      videoRefs[id].currentTime = 0;
    }
  };

  const updateVideoRef = (id, ref) => {
    if (videoRefs[id] !== ref) {
      setVideoRefs((prevRefs) => ({ ...prevRefs, [id]: ref }));
    }
  };

  const handleLoadImage = () => {
    setLoadMoreImage(getImagesQuickly());
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const { width } = useWindowDimensions();
  const breakpoint = 1200;

  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
        {/* <img src={fw} className="fw-title" /> */}
        <h2 className="titleHb-white">
          see our<br></br>{" "}
          <span className="titleHb-white-italic">quicklys</span>
        </h2>
        <p className="text-feature-work container__text">
          Explore to see what we can craft, even on the fly! Remember, a quickly
          is always a good idea.{" "}
        </p>

        <div className="container__buttons ">
          {/* <div className="filter__style"></div> */}
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
        <div className="box-quicklys">
          <div className="gallery__container">
            <Masonry columnsCount={width > breakpoint ? 3 : 2} gutter="10px">
              {filteredImages &&
                filteredImages.map((type) => (
                  <div className="gallery__items-quickly" key={type.id}>
                    <a
                      onClick={() => openModal(type)}
                      onMouseEnter={() => handleMouseEnter(type.id)}
                      onMouseLeave={() => handleMouseLeave(type.id)}
                    >
                      <video
                        ref={(ref) => updateVideoRef(type.id, ref)}
                        className="gallery__img"
                        controls={false}
                        autoPlay={/iPad|iPhone|iPod/.test(navigator.userAgent)}
                        muted
                        playsInline
                        loop={true}
                        style={{ cursor: 'pointer' }}
                      >
                        <source src={type?.url} type="video/mp4" />
                      </video>
                    </a>
                    <h5 className="filter-title-quickly">{type.title}</h5>
                  </div>
                ))}
            </Masonry>
            {/* </ResponsiveMasonry> */}
            <Masonry columnsCount={2} gutter="10px">
              {loadMoreImage &&
                loadMoreImage.map((type) => (
                  <div className="gallery__items-quickly" key={type.id}>
                    <a onClick={() => openModal(type)}>
                      <img
                        src={type.url}
                        alt={type.name}
                        className="gallery__img"
                      />
                    </a>
                    <h5 className="filter-title-quickly">{type.title}</h5>
                  </div>
                ))}
            </Masonry>
          </div>
        </div>
        <div className="box-btn">
          <Link to="/work" className="btn-white">
            LOAD MORE
            <img src={unionBtn} alt="arrow-right" className="arrow-black" />
          </Link>
        </div>
      </div>
      <Modal
        open={selectedImage !== null}
        onClose={closeModal}
        onOpen={() => window.scrollTo(0, 0)}
        style={{
          textAlign: "center",
        }}
      >
        {/* Contenido personalizado del modal */}
        <div className="container-internaQuickly">
          <div className="topInternaButton">
            <div className="topInternaButton-left">
              <img src={hb} alt="union" />
              <div className="topInternaText-container">
                <div className="topInternaText-title">
                  {selectedImage?.titleInterTop}
                </div>
                <div className="topInternaText-subtitle">
                  {selectedImage?.subtitleInterTop}
                </div>
              </div>
            </div>
            <div className="category-interna">{selectedImage?.category}</div>
          </div>
          <div className="topInternaText">
            <div className="imgInternaTop">
              {/* <img
                src={selectedImage?.urlInterno1}
                alt={selectedImage?.title}
              /> */}
              <video
                className="w-100"
                controls={false}
                autoPlay
                muted
                playsInline
                loop={true}
              >
                <source src={selectedImage?.urlInterno1} type="video/mp4" />
              </video>
            </div>
            <div
              className="topInterna-content"
              dangerouslySetInnerHTML={{
                __html: selectedImage?.internaContent,
              }}
            ></div>
            <div className="gif-thankYou">
              <img src={thankYou} alt="union" className="thanYouGif" />
            </div>
          </div>
        </div>
        <div className="similarCategory">
          <div className="textCategorySimilar">You might like</div>
          <div className="box-quicklyst-a">
            <p>More about campaign</p>
            <a href="/quickly">
              <p className="all-work">View all</p>
            </a>
          </div>
          <Masonry columnsCount={width > breakpoint ? 3 : 2} gutter="8px">
            {filteredImages &&
              filteredImages.map((type) => (
                <div className="" key={type.id}>
                  <a onClick={() => openModal(type)}>
                    <img
                      src={type.imageUrl}
                      alt={type.name}
                      className="gallery__img"
                    />
                  </a>
                  <h5 className="filter-title-quickly">{type.title}</h5>
                </div>
              ))
            }
          </Masonry>
        </div>
        {/* Agrega aquí los detalles adicionales de la imagen si es necesario */}
      </Modal>
    </>
  );
};

export default Quickly;
