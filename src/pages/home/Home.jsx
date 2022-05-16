import React from "react";
import SocialDesk from "../../components/pages/SocialDesk";
import Hero from "./Hero";
import DesignerUX from "./DesignerUX";
import UserExperience from "./UserExperience";
import ProfessionalPassion from "./ProfessionalPassion";
import Contactme from "./Contactme";

const Home = () => {
  return (
    <section className="home">
      <SocialDesk />
      <Hero />
      <DesignerUX />
      <UserExperience />
      <ProfessionalPassion />
      <Contactme />
    </section>
  );
};

export default Home;
