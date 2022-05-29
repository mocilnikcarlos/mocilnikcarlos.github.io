import React from "react";
import CardInputs from "../../components/pages/contacts/CardInputs";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contact">
      <article className="article-contact">
        <CardInputs />
      </article>
    </section>
  );
};

export default Contacts;
