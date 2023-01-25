import React, { useState } from "react";
import close from "../../assets/header/close.svg"
import logoHB from "../../assets/header/logohb.svg"

import './DropMenuMobile.css';

const DropMenuMobile = ({ active, setActive }) => {

    return(
    <>
        <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
            <div className="container-close">
                <div className="icon-close-sidebar" onClick={setActive}>
                    <div className="container-image-icon">
                        <img className="image-icon" src={close}  alt="icon close menu" />
                    </div>
                </div>
            </div>
            <div className="container-logo">
                <img className="image-logo" src={logoHB} alt="logo hb"></img>
            </div>
            <div className="contenedor-items">
                <div className="container-options">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div>
                                <h6 className="text-navbar">Studio</h6>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <h6 className="text-navbar">Work</h6>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <h6 className="text-navbar">Weeckly</h6>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <h6 className="text-navbar">Work with us</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default DropMenuMobile
