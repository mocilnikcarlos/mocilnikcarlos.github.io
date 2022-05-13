import React from "react";
import SocialDesk from "../../components/pages/SocialDesk";
import DesignerUX from "./DesignerUX";
import Hero from "./Hero";

const Home = () => {
  return (
    <section className="home">
      <SocialDesk />
      <Hero />
      <DesignerUX />
    </section>
  );
};

export default Home;
