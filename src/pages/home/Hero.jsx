import React from "react";
import Designer from "../../components/common/pages/home/Designer";
import EpigraphName from "../../components/common/pages/home/EpigraphName";
import { City, Work } from "../../components/common/pages/home/SubtitleHero";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="box-hero">
        <EpigraphName />

        <Designer />

        <div className="box-subtitle">
          <City title="Argentina" text="Zarate -Buenos Aires" />
          <Work title="Freelancer" text="Designer and Dev. Front-End" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
