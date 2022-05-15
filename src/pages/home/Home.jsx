import React from "react";
import SocialDesk from "../../components/pages/SocialDesk";
import Hero from "./Hero";
import DesignerUX from "./DesignerUX";
import UserExperience from "./UserExperience";
import ProfessionalPassion from "./ProfessionalPassion";

const Home = () => {
  return (
    <section className="home">
      <SocialDesk />
      <Hero />
      <DesignerUX />
      <UserExperience />
      <ProfessionalPassion />
    </section>
  );
};

export default Home;
