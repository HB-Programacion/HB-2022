import React from "react";
import "./Footer.css";
import hbCredits from "../../assets/footer/hb-creditos.svg";
import derechosCredits from "../../assets/footer/derechos-creditos.svg";

const Footer = () => {
  return (
    <>
      <div className="container__footer">
        <div className="container__footer-boxItem">
          <div className="container__footer-item">HOME</div>
          <div className="container__footer-item">about us</div>
          <div className="container__footer-item">WORK</div>
          <div className="container__footer-item">services</div>
          <div className="container__footer-item">quicklys</div>
          <div className="container__footer-item">CONTACT</div>
        </div>
        <div className="container__footer-boxItem info-text">
          <div className="container__footer-item lowercase">info@henribarrett.com</div>
          <div className="container__footer-item lowercase">+51 (1) 965 087 557</div>
          <div className="container__footer-item lowercase">AV. PETHIT THOARS 4162</div>
          <div className="container__footer-item lowercase">MIRAFLORES - pERÚ</div>
        </div>
        <div className="container__footer-boxItem">
          <div className="container__footer-item lowercase">behance</div>
          <div className="container__footer-item lowercase">linkedin</div>
          <div className="container__footer-item lowercase">youtube</div>
          <div className="container__footer-item lowercase">instagram</div>
        </div>
      </div>
      <div className="box-credits">
        <img src={hbCredits} />
        <img src={derechosCredits} />
      </div>
    </>
  );
};

export default Footer;
