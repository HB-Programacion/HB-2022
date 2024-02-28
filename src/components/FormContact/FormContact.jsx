import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./FormContact.css";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../services/s3services";


const FormContact = () => {
  const { t } = useTranslation();

  const servicesData = [
    { nombre: "Content", id: 1 },
    { nombre: "Design", id: 2 },
    { nombre: "Strategy", id: 3 },
    { nombre: "Web Design", id: 4 },
    { nombre: "Events", id: 5 },
    { nombre: "Productions", id: 6 },
  ];

  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
  };

  const successContact =  getImageUrl("successContact");

  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!values.service) {
      newErrors.service = "Debes seleccionar un servicio";
    }

    if (!values.name || !/^[a-zA-Z\s]+$/.test(values.name)) {
      newErrors.name = "Debes ingresar tu nombre y apellidos completos.";
    }

    if (!values.company) {
      newErrors.company = "Debes ingresar el nombre de tu compañía.";
    }

    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Debes ingresar una dirección de correo válida.";
    }

    if (!values.phone  || !/^\+?\d+$/.test(values.phone)) {
      newErrors.phone = "Debes ingresar un número de contacto válido.";
    }

    if (!checkPrivacy) {
      newErrors.privacy = "Debes aceptar los términos y condiciones.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Aquí iría tu lógica para enviar el formulario
        console.log("Formulario enviado:", values);
        setValues(initialState);
        setCheckPrivacy(true);
        setSuccess(true)
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
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
            className={errors.service ? "error" : ""}
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
          >
            <option value="" disabled selected>
              {t("contact-form.for-me")}
            </option>
            {servicesData.map((op, index) => (
              <option key={index} value={op.nombre}>
                {op.nombre}
              </option>
            ))}
          </select>
          {errors.service && <p className="error-message-select">{errors.service}</p>}
        </div>
        <div className="inputContainer">
          <input
            className={errors.name ? "error" : ""}
            id="name"
            name="name"
            type="text"
            autocomplete="off"
            value={values.name}
            // placeholder={t("contact-form.name")}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <label
            className={`label-form ${values.name ? "has-value" : ""}`}
            for="name"
          >
            Full name
          </label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="inputContainer">
          <input
            className={errors.company ? "error" : ""}
            id="company"
            name="company"
            type="text"
            autocomplete="off"
            value={values.company}
            // placeholder={t("contact-form.company")}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          <label
            className={`label-form ${values.company ? "has-value" : ""}`}
            for="company"
          >
            Company name
          </label>
          {errors.company && <p className="error-message">{errors.company}</p>}
        </div>
        <div className="container-two">
        <div className="inputContainer">
          <input
            className={errors.email ? "error" : ""}
              id="email"
              name="email"
              type="text"
              autocomplete="off"
              value={values.email}
              // placeholder={t("contact-form.email")}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <label
              className={`label-form ${values.email ? "has-value" : ""}`}
              for="email"
            >
              Email
            </label>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="inputContainer">
          <input
              className={errors.phone ? "error" : ""}
              id="phone"
              name="phone"
              type="text"
              autocomplete="off"
              value={values.phone}
              // placeholder={t("contact-form.phone")}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <label
              className={`label-form ${values.phone ? "has-value" : ""}`}
              for="phone"
            >
              Phone
            </label>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
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
        { !errors.checkPrivacy  && <p className="error-message">{errors.privacy}</p>}
        <div className="button__load-send">
          <button onClick="" type="submit">
            {t("contact-form.send")}
            {/* <img src={unionBtn} alt="arrow-right" className="w-100 arrow-black" /> */}
          </button>
        </div>
        { !success && (
          <div className="cont-success-message">
            <img src={successContact} alt="arrow-right" className="w-100 arrow-success" />
            <p className="success-message">Thank You! We recieve your form</p>
          </div>
        )
        }
      </form>
    </div>
  );
};

export default FormContact;
