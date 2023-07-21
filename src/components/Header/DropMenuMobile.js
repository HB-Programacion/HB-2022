import React, { useState } from "react";
import close from "../../assets/header/close.png";
import img from "../../assets/header/img-menumobile.png";

import "./DropMenuMobile.css";

const DropMenuMobile = ({ active, setActive }) => {
  return (
    <>
      <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
        <div className="container-fullview">
          <div className="container-close">
            <div>SPANISH</div>
            <div className="icon-close-sidebar" onClick={setActive}>
              <div className="container-image-icon">
                <img className="image-icon" src={close} alt="icon close menu" />
              </div>
            </div>
          </div>
          <div className="contenedor-items">
            <div className="container-options">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">Home</h6>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">About us</h6>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">Work</h6>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">services</h6>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">QUICKLYS</h6>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <h6 className="text-navbar">Contact</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-social">
          <div className="title-socials">Socials</div>
          <ul className="list-group">
            <li className="list-group-item item-social">
              <h6>Behance</h6>
            </li>
            <li className="list-group-item item-social">
              <h6>LinkedIn</h6>
            </li>

            <li className="list-group-item item-social">
              <h6>Youtube</h6>
            </li>

            <li className="list-group-item item-social">
              <h6>Instagram</h6>
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
              <img src={img} className="img-menumobile"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropMenuMobile;
