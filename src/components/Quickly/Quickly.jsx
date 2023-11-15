import React, { useEffect, useState, useRef } from "react";
import fw from "../../assets/quickly/10.Quicklys.gif";
import { buttons } from "../data/imagesHome";
import { getImagesQuickly, filterHomeType } from "../services/servicesFilter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import quicklys from "../../assets/work/quicklys.svg";
import ReactModal from "react-modal";
import hb from "../../assets/quickly/hb-back.svg";
import arrowBtnBlack from "../../assets/arrow-btn-black.svg";



import "./Quickly.css";

const Quickly = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [loadMoreImage, setLoadMoreImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeButton, setActiveButton] = useState(null);


  const ref = useRef(null);
  useEffect(() => {
    setFilteredImages(getImagesQuickly());
    setActiveButton('all');
  }, []);

  const handleImagesHome = (e) => {
    e.preventDefault();
    let typeImagesHome = e.target.value;
    setActiveButton(typeImagesHome);
    typeImagesHome !== "all"
      ? setFilteredImages(filterHomeType(typeImagesHome))
      : setFilteredImages(getImagesQuickly());
  };

  const handleLoadImage = () => {
    setLoadMoreImage(getImagesQuickly());
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  }
  return (
    <>
      <div className="fondo-header"></div>
      <div className="bg-black ">
        <img src={fw} className="fw-title" />
        <p className="text-feature-work">Explore to see what we can craft, even on the fly! Remember, a quickly is always a good idea. </p>
        <div className="container__buttons">
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
        <div className="box-work">
          <div className="gallery__container">
            <Masonry columnsCount={2} gutter="10px">
              {filteredImages &&
                filteredImages.map((type) => (
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
              ))}</Masonry>
          </div>
        </div>
        <div className="button__load-quickly">
            <button onClick="">
            Load more <img src={arrowBtnBlack} alt="arrow-right" className="w-100" />
            </button>
        </div>
      </div>
      <ReactModal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Image Detail Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 9999,
            // Estilos del overlay del modal
            // Puedes personalizar el fondo, la opacidad, etc.
          },
          content: {
            // Estilos del contenido del modal
            top: "0px", // Posición superior
            left: "0px", // Posición izquierda
            right: "0px", // Posición derecha
            bottom: "0px", // Posición inferior
            borderRadius: "10px", // Bordes redondeados
            border: "none", // Sin borde
            padding: "0px", // Espaciado interno
            margin: "0", // Sin márgenes
            backgroundColor: "#111111", // Fondo negro
            color: "#ffffff",
            // Puedes personalizar otros estilos según tus necesidades
          }
        }}
      >
        {/* Contenido personalizado del modal */}
        <div className="container-internaQuickly">
          <div className="topInternaButton">
              <img src={hb} alt="union"/>
              <div className="category-interna">
                {selectedImage?.category}
              </div>
          </div>
          <div className="topInternaText">
              <div className="topInternaText-container">
                <div className="topInternaText-title">
                  {selectedImage?.titleInterTop}
                </div>
                <div className="topInternaText-subtitle">
                  {selectedImage?.subtitleInterTop}
                </div>
              </div>
              <div className="imgInternaTop">
                <img src={selectedImage?.urlInterno1} alt={selectedImage?.title} />
              </div>
              <div className="topInterna-content"
                dangerouslySetInnerHTML={{ __html: selectedImage?.internaContent }}
              >
              </div>
              <div className="gif-hb">
                <img src={hb} alt="union"/>
              </div>
          </div>
        </div>
        <div className="similarCategory">
          <div className="textCategorySimilar">
            You make also like
          </div>
          <Masonry columnsCount={2} gutter="10px">
            {filteredImages &&
              filteredImages.map((type) => (
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
        {/* Agrega aquí los detalles adicionales de la imagen si es necesario */}
      </ReactModal>
    </>
  );
};

export default Quickly;
