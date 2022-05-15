import React from "react";
import { CardProfessionalPassionUp } from "../../components/cards/CardProfessionalPassion";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import dataProfessional from "../../json/cardProfessionalPassion.json";
import "./ProfessionalPassion.scss";

const ProfessionalPassion = () => {
  const dataUp = dataProfessional.getProfessional[0];
  const dataDown = dataProfessional.getProfessional[1];

  return (
    <section className="section-professionalpassion">
      <article className="article-professionalpassion">
        <TitleWeb1 titleweb="Pasión profesional" />
        <div className="box-cardsprofessionalpassion">
          <div className="boxcards">
            {dataUp.dataProfessionalUp.map((el) => (
              <CardProfessionalPassionUp key={el.id} Professional={el} />
            ))}
          </div>
          <div className="boxcards">
            {dataDown.dataProfessionalDown.map((el) => (
              <CardProfessionalPassionUp key={el.id} Professional={el} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProfessionalPassion;
