import React from "react";
import handleForm from "../../hooks/useForm";
import { InputName, InputEmail, TextArea } from "./Inputs";
import "./FormHome.scss";

const FormHome = () => {
  const { handleSubmit } = handleForm();
  return (
    <form onSubmit={handleSubmit} className="formhome">
      <div className="content-form">
        <div className="inputs">
          <InputName placeholder="Nombre*" type="text" />
          <InputEmail placeholder="Email*" type="text" />
        </div>
        <div className="box-textarea">
          <TextArea placeholder="Deja tu mensaje*" />
        </div>
      </div>
      <button type="submit" className="btn-form">
        Enviar mensaje
      </button>
    </form>
  );
};

export default FormHome;
