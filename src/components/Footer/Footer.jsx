import React from "react";
import "./Footer.css";
import hbCredits from "../../assets/footer/hb-creditos.svg";
import derechosCredits from "../../assets/footer/derechos-creditos.svg";

const Footer = () => {
  return (
    <>
      <div className="container__footer">
        {/* <div className="container__footer-boxItem">
          <div className="container__footer-item">HOME</div>
          <div className="container__footer-item">WORK</div>
          <div className="container__footer-item">MANIFIESTO</div>
          <div className="container__footer-item">CONTACT</div>
        </div> */}
        <div className="container__footer-boxItem">
          <div className="container__footer-item">info@henribarrett.com</div>
          <div className="container__footer-item">+51 (1) 965 087 557</div>
          <div className="container__footer-item">AV. PETHIT THOARS 4162</div>
          <div className="container__footer-item">MIRAFLORES - pERÚ</div>
        </div>
        <div className="container__footer-boxItem">
          <div className="container__footer-item">INSTAGRAM</div>
          <div className="container__footer-item">BEHANCE</div>
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
