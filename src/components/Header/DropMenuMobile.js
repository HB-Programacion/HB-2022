import React, { useState } from "react";
import close from "../../assets/header/close.png";
import img from "../../assets/header/img-menumobile.png";

import "./DropMenuMobile.css";
import { BrowserRouter, a } from "react-router-dom";

const DropMenuMobile = ({ active, setActive }) => {
  return (
    <BrowserRouter>
      <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
        <div className="container-fullview">
          <div className="container-close">
            <div>SPANISH</div>
            <div className="icon-close-sidebar" onClick={setActive}>
              <div className="container-image-icon">
                {/* <img className="image-icon" src={close} alt="icon close menu" /> */}
              </div>
            </div>
          </div>
          <div className="contenedor-items">
            <div className="container-options">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="/">
                    <h6 className="text-navbar">Home</h6>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/about">
                    <h6 className="text-navbar">About us</h6>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/work">
                    <h6 className="text-navbar">Work</h6>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/services">
                    <h6 className="text-navbar">services</h6>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/quickly">
                    <h6 className="text-navbar">QUICKLYS</h6>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/contact">
                    <h6 className="text-navbar">Contact</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-social">
          <div className="title-socials">Socials</div>
          <ul className="list-group">
            <li className="list-group-item item-social">
              <a
                href="https://www.behance.net/henribarrettstudio?tracking_source=search_users%7Chenri+barrett"
                target="blank"
              >
                <h6>Behance</h6>
              </a>
            </li>
            <li className="list-group-item item-social">
              <a
                href="https://www.linkedin.com/company/henri-barrett-studio/"
                target="blank"
              >
                <h6>LinkedIn</h6>
              </a>
            </li>

            <li className="list-group-item item-social">
              <a
                href="https://www.youtube.com/@henribarrettstudio"
                target="blank"
              >
                <h6>Youtube</h6>
              </a>
            </li>

            <li className="list-group-item item-social">
              <a
                href="https://instagram.com/henribarrettstudio?igshid=ZWQyN2ExYTkwZQ=="
                target="blank"
              >
                <h6>Instagram</h6>
              </a>
            </li>
          </ul>
        </div>
        <div className="container-contact-dropdown">
          <div className="title-socials">Say Hi!</div>
          <ul className="list-group">
            <li className="list-group-item item-social">
              <h6>info@henribarrett.com</h6>
            </li>
            <li className="list-group-item">
              <img src={img} className="img-menumobile" />
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DropMenuMobile;
