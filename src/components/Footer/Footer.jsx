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
          <div className="container__footer-item lowercase">
            info@henribarrett.com
          </div>
          <div className="container__footer-item lowercase">
            +51 (1) 965 087 557
          </div>
          <div className="container__footer-item lowercase">
            AV. PETHIT THOARS 4162
          </div>
          <div className="container__footer-item lowercase">
            MIRAFLORES - pERÚ
          </div>
        </div>
        <div className="container__footer-boxItem">
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.behance.net/henribarrettstudio?tracking_source=search_users%7Chenri+barrett"
              target="blank"
            >
              Behance
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.linkedin.com/company/henri-barrett-studio/"
              target="blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://www.youtube.com/@henribarrettstudio"
              target="blank"
            >
              Youtube
            </a>
          </div>
          <div className="container__footer-item ">
            {" "}
            <a
              href="https://instagram.com/henribarrettstudio?igshid=ZWQyN2ExYTkwZQ=="
              target="blank"
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
