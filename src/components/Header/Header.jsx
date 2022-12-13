import React from "react";
import logo from "../../assets/header/Logo-hb.svg";

import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} className="logo" />
      <div className="header__container-item">
        <h6>studio</h6>
      </div>
      <div className="header__container-item">
        <h6>WORK</h6>
      </div>
      <div className="header__container-item">
        <h6>weeCKLY</h6>
      </div>
      <div className="header__container-item">
        <h6>work with us</h6>
      </div>
      <div className="header__container-item container__social">
        <div>be-</div>
        <div>ig</div>
      </div>
    </div>
  );
};

export default Header;
