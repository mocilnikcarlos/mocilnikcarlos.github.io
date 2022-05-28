import React from "react";
import DescriptionAboutMe from "./DescriptionAboutMe";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import DescriptionCatQuantum from "./DescriptionCatQuantum";
import MyPick from "../../components/pages/aboutme/MyPick";
import ParticleQuantum from "../../components/pages/aboutme/ParticleQuantum";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <article className="article-aboutme">
        <TitleWeb1 titleweb="Sobre mi y Cat Quantum" />
        <div className="box-me">
          <MyPick />
          <DescriptionAboutMe />
        </div>
        <div className="box-catquantum">
          <DescriptionCatQuantum />
          <ParticleQuantum />
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
