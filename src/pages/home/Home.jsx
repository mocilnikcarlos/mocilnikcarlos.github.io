import React from "react";
import SocialDesk from "../../components/pages/SocialDesk";
import Hero from "./Hero";
import DesignerUX from "./DesignerUX";
import UserExperience from "./UserExperience";

const Home = () => {
  return (
    <section className="home">
      <SocialDesk />
      <Hero />
      <DesignerUX />
      <UserExperience />
    </section>
  );
};

export default Home;
