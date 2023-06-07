import React, { useEffect, useState, useRef } from "react";
import gif from "../../assets/home/gif.png";
import homeContact from "../../assets/contact/home-contact.png";
import hireUs from "../../assets/contact/hireus.png";
import arrow from "../../assets/contact/arrow.png";
import divider from "../../assets/home/Divider.svg";
import load from "../../assets/home/load-more.png";
import arrowRightWhite from "../../assets/home/arrow-right-white.svg";
import { buttons } from "../data/imagesHome";
import { getImagesHome, filterPokemon } from "../services/servicesFilter";
import "./Contact.css";
import Marquee from "react-double-marquee";
// import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import word from "../../assets/home/work.svg";
import FormContact from "../FormContact/FormContact";

import { useTranslation, Trans } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from '../../locales/es.json';
import translationEN from '../../locales/en.json';

i18n.use(initReactI18next).init({
   lng: 'en', // Establece el idioma inicial
   resources: {
      en: {
         translation: translationEN, // Traducciones en inglés
      },
      es: {
         translation: translationES, // Traducciones en español
      },
   },
});

const Contact = () => {
   const { t } = useTranslation();
// const { ref } = useParallax({ speed: 100 });
const [filteredImages, setFilteredImages] = useState(null);
const ref = useRef(null);

useEffect(() => {
   setFilteredImages(getImagesHome());
}, []);

const handleImagesHome = (e) => {
   e.preventDefault();
   let typeImagesHome = e.target.value;
   typeImagesHome !== "all"
      ? setFilteredImages(filterPokemon(typeImagesHome))
      : setFilteredImages(getImagesHome());
};

return (
   <>
      <div>
         <div className="box-text-home">
            <div className="container__text">
               <img src={hireUs} className="hireusContact" />
               <h1 className="title__contact">
                  <img src={arrow} className="arrowContact" />
                  <div className="text__title">
                     Let's create <br/> <span>something</span> <br/> sexy
                  </div>
               </h1>
               <img src={homeContact} className="homeContact" />
            </div>
            <div className="container__subtitle">
               <h1>
                  <div>{t('welcomeMessage')}</div>
                  — Getting to know each other? Working together? Meet up? Leave your details and we will get back to you soon
               </h1>
            </div>
            <FormContact/>
         </div>
      </div>
   </>
);
};

export default Contact;
