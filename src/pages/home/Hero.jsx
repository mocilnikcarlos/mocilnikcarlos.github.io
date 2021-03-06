import React from "react";
import Designer from "../../components/pages/home/Designer";
import EpigraphName from "../../components/pages/home/EpigraphName";
import { City, Work } from "../../components/pages/home/SubtitleHero";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <section className="section-hero">
      <div className="content-hero">
        <EpigraphName />

        <Designer />

        <div className="box-subtitle">
          <City title="Argentina" text="Zarate -Buenos Aires" />
          <Work title="Freelancer" text="Designer and Dev. Front-End" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
