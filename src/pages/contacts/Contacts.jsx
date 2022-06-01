import React from "react";
import { InputEmail, InputName } from "../../components/forms/Inputs";
import CardInputs from "../../components/pages/contacts/CardInputs";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contact">
      <article className="article-contact">
        <div className="card-inputs-contact">
          <CardInputs />
          <form className="box-inputs-contact">
            <InputName type="text" placeholder="Nombre*" />
            <InputEmail type="text" placeholder="Email*" />
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
