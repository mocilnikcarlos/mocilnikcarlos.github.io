import React from "react";
import {
  CardProfessionalPassionDown,
  CardProfessionalPassionUp,
} from "../../components/cards/CardProfessionalPassion";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import dataProfessional from "../../json/cardProfessionalPassion.json";
import useRefScroll from "../../hooks/useScrollShow";
import "./ProfessionalPassion.scss";

const ProfessionalPassion = () => {
  const { refScroll, elementIsVisible } = useRefScroll();

  const dataUp = dataProfessional.getProfessional[0];
  const dataDown = dataProfessional.getProfessional[1];

  return (
    <section className="section-professionalpassion">
      <article className="article-professionalpassion">
        <TitleWeb1 titleweb="Pasión profesional" />
        <div
          ref={refScroll}
          className={`box-cardsprofessionalpassion hide ${elementIsVisible &&
            "show"}`}
        >
          <div className="boxcards">
            {dataUp.dataProfessionalUp.map((el) => (
              <CardProfessionalPassionUp key={el.id} Professional={el} />
            ))}
          </div>
          <div className="boxcards">
            {dataDown.dataProfessionalDown.map((el) => (
              <CardProfessionalPassionDown key={el.id} Professional={el} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProfessionalPassion;
