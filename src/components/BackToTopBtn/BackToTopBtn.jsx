import React, { useEffect, useState } from "react";
import BackToTopImg from "../../assets/header/btt.svg"
import "./BackToTopBtn.css";

const BackToTopBtn = () => {

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <>
            <button onClick={scrollToTop} className="back-to-top">
                <img src={BackToTopImg}/>
            </button>
        </>
    );
    };

export default BackToTopBtn;