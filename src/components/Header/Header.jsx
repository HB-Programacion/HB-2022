import React, { useState } from "react";
import logo from "../../assets/header/logo-blanco.svg";
import logoGift from "../../assets/header/logo-gift.gif";
import behance from "../../assets/header/Behance.png";
import ig from "../../assets/header/Instagram.png";
import burger from "../../assets/header/burger-blanco.svg";

import "./Header.css";
import DropMenuMobile from "./DropMenuMobile";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    console.log("hi");
    setActive(!active);
  };

  return (
    <div className="header__container">
      <nav className="navbar-hb">
        <a href="/" className="a-logo">
          <div className="container__gifLogo">
            {/* <img src={logoGift} className="logoGift" /> */}
            <img src={logo} className="logo" />
          </div>
        </a>
        <div className="burger-hb" onClick={handleClick}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={22} 
            color={`${isOpen ? "#000" : "#fff"}`}
          />
          {/* <img className="img-burger" src={burger} alt="burger hb" /> */}
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
