import React from "react";
import logo from "../../assets/header/Logo-hb.svg";
import logoGift from "../../assets/header/logo-gift.gif";
import behance from "../../assets/header/Behance.png";
import ig from "../../assets/header/Instagram.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <a href="/">
        <div className="container__gifLogo">
          <img src={logoGift} className="logoGift" />
          <img src={logo} className="logo" />
        </div>
      </a>
      <div className="header__container-item container__social">
        <div className="container-social-img">
          <a href="https://www.behance.net/henribarrettstudio" target="blank">
            <img src={behance} />
          </a>
        </div>
        <div className="container-social-img">
          <a
            href="https://www.instagram.com/henribarrettstudio/?hl=es"
            target="blank"
          >
            <img src={ig} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;