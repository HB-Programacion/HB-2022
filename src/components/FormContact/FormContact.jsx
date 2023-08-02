import React, { useState } from "react";
import { uploadDocToFirebase } from "../../firebase";
import {
  validateNames,
  validateCity,
  validateEmail,
  validatePhone,
} from "../../helpers/validators";
import Modal from "../Modal/Modal";
import ModalResponse from "../ModalResponse/ModalResponse";
import "./FormContact.css";
import { useTranslation } from "react-i18next";

const FormContact = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      nombre: "Content",
      id: 1,
    },
    {
      nombre: "Design",
      id: 2,
    },
    {
      nombre: "Strategy",
      id: 3,
    },
    {
      nombre: "Web Design",
      id: 4,
    },
    {
      nombre: "Events",
      id: 5,
    },
    {
      nombre: "Productions",
      id: 6,
    },
  ];

  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
  };

  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [values, setValues] = useState(initialState);
  const [alert, setAlert] = useState(undefined);

  const [services, setServices] = useState(servicesData);
  const [serviceSelected, setServiceSelected] = useState("");
  const [modalVisibleSubmit, setModalVisibleSubmit] = useState(false);
  const [formularioCompleto, setFormularioCompleto] = useState(false);



  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues((valoresPrevios) => ({ ...valoresPrevios, [name]: value }));
    verificarCompletitudFormulario(); // Verificar la completitud del formulario cuando cambie un campo
  };
  
  const handleCheckPrivacyChange = (e) => {
    setCheckPrivacy(e.target.checked);
    verificarCompletitudFormulario(); // Verificar la completitud del formulario cuando cambie la casilla de verificación
  };

  const verificarCompletitudFormulario = () => {
    if (
      serviceSelected &&
      values.name &&
      values.company &&
      values.email &&
      values.phone &&
      checkPrivacy
    ) {
      setFormularioCompleto(true);
    } else {
      setFormularioCompleto(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkPrivacy) {
      setAlert({
        title: "error",
        subtitle: "Debes aceptar los términos y condiciones.",
        type: "error",
        logo: false,
        open: true,
      });
      return;
    } else {
      if (!validateNames(values.name)) {
        setAlert({
          title: "Error",
          subtitle: "Debes de ingresar tu nombre y apellidos completos.",
          type: "error",
          logo: false,
          open: true,
        });
        return;
      } else if (!validateNames(values.company)) {
        setAlert({
          title: "Error",
          subtitle: "Debes de ingresar tu nombre de su compañía.",
          type: "error",
          logo: false,
          open: true,
        });
        return;
      } else if (!validateEmail(values.email)) {
        setAlert({
          title: "Error",
          subtitle: "Debes de ingresar una dirección de correo válida.",
          type: "error",
          logo: false,
          open: true,
        });
        return;
      } else if (!validatePhone(values.phone)) {
        setAlert({
          title: "Error",
          subtitle: "Debes de ingresar un número de contacto válido.",
          subtitle3: "*Máximo 9 dígitos",
          type: "error",
          logo: false,
          open: true,
        });
        return;
      } else {
        try {
          await uploadDocToFirebase(values.phone, {
            ...values,
            services: serviceSelected,
          });
          setValues(initialState);
          setServiceSelected("");
        } catch (error) {
          return setAlert({
            title: "Error",
            subtitle: "Hubo un error al registrar el usuario.",
            type: "error",
            logo: false,
            open: true,
          });
        }
      }
    }
  };

  return (
    <div className="box-form-contact">
      <p className="text-contact">
        — Getting to know each other? Working together? Meet up? Leave your
        details and we will get back to you soon{" "}
      </p>
      <form onSubmit={handleSubmit} className="container-form">
        <div className="selectContainer">
          <select
            value={serviceSelected}
            onChange={(e) => setServiceSelected(e.target.value)}
          >
            <option value="" disabled selected>
              {t("contact-form.for-me")}
            </option>
            {services.map((op) => (
              <option key={op.value} value={op.value}>
                {op.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="inputContainer">
          <input
            className="name"
            id="name"
            name="name"
            type="text"
            value={values.name}
            placeholder={t("contact-form.name")}
            onChange={handleChangeInput}
          />
        </div>
        <div className="inputContainer">
          <input
            className="company"
            id="company"
            name="company"
            type="text"
            value={values.company}
            placeholder={t("contact-form.company")}
            onChange={handleChangeInput}
          />
        </div>
        <div className="container-two">
          <div className="inputContainer">
            <input
              className="email"
              id="email"
              name="email"
              type="email"
              value={values.email}
              placeholder={t("contact-form.email")}
              onChange={handleChangeInput}
            />
          </div>
          <div className="inputContainer">
            <input
              className="phone"
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              placeholder={t("contact-form.phone")}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="checkContainer">
          <label className="checkboxLabel">
            <input
              className="privacy"
              type="checkbox"
              value={checkPrivacy}
              name="checkPrivacy"
              onChange={(e) => {
                setCheckPrivacy(e.target.checked);
              }}
              checked={checkPrivacy}
            />
            <span className="checkboxCustom"></span>
            <div className="privacy-text">{t("contact-form.check")}</div>
          </label>
        </div>
        <div className="button__send ">
          <button type="submit" disabled={!formularioCompleto}>{t("contact-form.send")}</button>
        </div>
      </form>
      {modalVisibleSubmit && (
        <Modal
          logo={true}
          title="¡Formulario recibido!"
          subtitle="Te enviaremos un correo electrónico con 
            la confirmación de tu registro"
          onClick={() => setModalVisibleSubmit(false)}
        />
      )}
      {alert && alert.open && (
        <ModalResponse
          type={alert.type}
          title={alert.title}
          subtitle={alert.subtitle}
          subtitle3={alert.subtitle3}
          logo={alert.logo}
          close={() => setAlert({ open: false })}
        />
      )}
    </div>
  );
};

export default FormContact;
