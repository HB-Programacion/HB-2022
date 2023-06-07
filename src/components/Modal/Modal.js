import React from "react";
import "./Modal.css";
import project from "../../assets/home/project 5.png";
import { IconClose } from "./IconClose";

const Modal = ({ onClick, logo = false, title, subtitle }) => {
  return (
    <div className="modal">
      <div className={`modal__container ${logo && "modal__container--submit"}`}>
        {logo && <img src={project} alt="Logo Amstel" />}
        {title && <h4 className="modal__title">{title}</h4>}
        {subtitle && <p className="modal__subtitle">{subtitle}</p>}
        <div className="modal__close" onClick={onClick}>
          <IconClose />
        </div>
      </div>
    </div>
  );
};

export default Modal;
