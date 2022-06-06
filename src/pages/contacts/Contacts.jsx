import React from "react";
import {
  InputEmail,
  InputName,
  InputSelect,
  TextArea,
} from "../../components/forms/Inputs";
import CardInputs from "../../components/pages/contacts/CardInputs";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contact">
      <article className="article-contact">
        <TitleWeb1 titleweb="Pedí un presupuesto o escribí tu duda" />
        <div className="box-form">
          <CardInputs />
          <form className="form-inputs">
            <div className="box1">
              <InputName type="text" placeholder="Nombre*" />
              <InputEmail type="text" placeholder="Email*" />
            </div>
            <div className="box2">
              <InputSelect placeholder="Elije una opción*" />
              <TextArea placeholder="Dejá tu mensaje*" />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
