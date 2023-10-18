import React from "react";
import "./Footer.css";
import hbCredits from "../../assets/footer/credits.svg";
import derechosCredits from "../../assets/footer/derechos-creditos.svg";

const Footer = () => {
  return (
    <>
      <div className="container__footer">
        <div className="container__footer-boxItem">
          <div className="container__footer-item uppercase">
            <a href="/">HOME</a>
          </div>
          <div className="container__footer-item uppercase">
            <a href="/about">about us</a>
          </div>
          <div className="container__footer-item uppercase">
            <a href="/work">WORK</a>
          </div>
          <div className="container__footer-item uppercase">
            <a href="/">services</a>
          </div>
          <div className="container__footer-item uppercase">
            <a href="/quickly">quicklys</a>
          </div>
          <div className="container__footer-item uppercase">
            <a href="/">CONTACT</a>
          </div>
        </div>
        <div className="container__footer-boxItem info-text">
          <div className="container__footer-item ">
            info@henribarrett.com
          </div>
          <div className="container__footer-item ">
            +51 965 087 557
          </div>
          <div className="container__footer-item ">
          Av. Petit Thouars 4162
          </div>
          <div className="container__footer-item ">
          Miraflores, Lima - Perú
          </div>
        </div>
        <div className="container__footer-boxItem">
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.behance.net/henribarrettstudio?tracking_source=search_users%7Chenri+barrett"
              target="blank"
              className="underline"
            >
              Behance
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.linkedin.com/company/henri-barrett-studio/"
              target="blank"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.youtube.com/@henribarrettstudio"
              target="blank"
              className="underline"
            >
              Youtube
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://instagram.com/henribarrettstudio?igshid=ZWQyN2ExYTkwZQ=="
              target="blank"
              className="underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="box-credits">
        <img src={hbCredits} />
      </div>
    </>
  );
};

export default Footer;
