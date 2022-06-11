import React from "react";
import BtnWeb from "../../components/common/BtnWeb";
import {
  InputEmail,
  InputName,
  InputSelect,
  TextArea,
} from "../../components/forms/Inputs";
import CardInputs from "../../components/pages/contacts/CardInputs";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import handleForm from "../../hooks/useForm";
import "./Contacts.scss";

const Contacts = () => {
  const { handleSubmit } = handleForm();
  return (
    <section className="contact">
      <article className="article-contact">
        <TitleWeb1 titleweb="Pedí un presupuesto o escribí tu duda" />
        <div className="box-form">
          <CardInputs />
          <form className="form-inputs" onSubmit={handleSubmit}>
            <div className="box1">
              <InputName type="text" placeholder="Nombre*" />
              <InputEmail type="text" placeholder="Email*" />
            </div>
            <div className="box2">
              <InputSelect placeholder="Elije una opción*" />
              <TextArea placeholder="Dejame tu mensaje*" />
            </div>
            <div className="box-btn-web">
              <BtnWeb type="submit" content="Enviar mensaje" />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
