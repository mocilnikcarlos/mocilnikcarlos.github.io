import React from "react";
import CardUserExperience from "../../components/cards/CardUserExperience";
import { TitleWeb2 } from "../../components/pages/TitleWeb";
import dataCardUx from "../../json/cardUserExperience.json";
import useRefScroll from "../../hooks/useScrollShow";
import "./UserExperience.scss";

const UserExperience = () => {
  const { refScroll, elementIsVisible } = useRefScroll();
  return (
    <section className="section-userexperience">
      <article className="article-userexperience">
        <TitleWeb2 titleweb="Mejorando la experiencia del usuario" />
        <div
          ref={refScroll}
          className={`box-cardsuserexperience hide ${
            elementIsVisible && "show"
          }`}
        >
          {dataCardUx.dataCardUx.map((el) => (
            <CardUserExperience key={el.id} CardUx={el} />
          ))}
        </div>
        <div className="curves">
          <div className="backcurve"></div>
          <div className="backcurve1"></div>
        </div>
      </article>
    </section>
  );
};

export default UserExperience;
