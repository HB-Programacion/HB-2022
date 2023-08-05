import React from "react";
import success from "../../assets/home/success.svg";
import error from "../../assets/home/error.svg";
import warning from "../../assets/warning.svg";
import { IconClose } from "./IconClose";

import "./ModalResponse.css";

const ModalResponse = ({ close, logo = false, title, subtitle, subtitle3, type }) => {
  return (
    <div className="modal-response">
      <div className="modal-response__container">
        <h4 className="modal-response__title">¡{title}!</h4>
        <p className="modal-response__subtitle1">Parece que ocurrió un problema</p>
        <div className="modal-response__warning-cont">
          <img src={warning} alt="Logo Warning" className="logo-modal" />
          <div className="modal-response__subtitle-cont">
            <p className="modal-response__subtitle2">{subtitle}</p>
            <p className="modal-response__subtitle3">{subtitle3}</p>
          </div>
        </div>
        <div className="modal-response__close" onClick={close}>
          <IconClose />
        </div>
      </div>
    </div>
  );
};

export default ModalResponse;
