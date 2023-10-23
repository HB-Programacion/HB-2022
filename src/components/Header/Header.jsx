import React, { useState } from "react";
import logo from "../../assets/header/logo-blanco.svg";

import "./Header.css";
import DropMenuMobile from "./DropMenuMobile";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log('here')
    setActive(!active);
  };

  const handleClickBurguer = () => {
    setActive(!active);
    setOpen(false);
  };

  return (
    <div className="header__container">
      <nav className="navbar-hb">
        <a href="/" className="a-logo">
          <div className="container__gifLogo">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </a>
        <div className="burger-hb" onClick={handleClick}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={22}
            color={`${isOpen ? "#000" : "#fff"}`}
          />
        </div>
      </nav>
      <DropMenuMobile active={active} setActive={handleClickBurguer} />
    </div>
  );
};

export default Header;
