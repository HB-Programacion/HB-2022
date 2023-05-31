import React, { useState } from "react";
import logo from "../../assets/header/logohb-2023.svg";
import logoGift from "../../assets/header/logo-gift.gif";
import behance from "../../assets/header/Behance.png";
import ig from "../../assets/header/Instagram.png";
import burger from "../../assets/header/burger-hb.svg";

import "./Header.css";
import DropMenuMobile from "./DropMenuMobile";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    console.log("hi");
    setActive(!active);
  };

  return (
    <div className="header__container">
      <nav className="navbar-hb">
        <a href="/">
          <div className="container__gifLogo">
            {/* <img src={logoGift} className="logoGift" /> */}
            <img src={logo} className="logo" />
          </div>
        </a>
        <div className="burger-hb" onClick={handleClick}>
          <img className="img-burger" src={burger} alt="burger hb" />
        </div>
      </nav>
      {/* <div className="header__container-item container__social">
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
      </div> */}
      <DropMenuMobile active={active} setActive={handleClick} />
    </div>
  );
};

export default Header;
