import React from "react";
import MyPick from "./MyPick";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <article className="article-aboutme">
        <MyPick />
      </article>
    </section>
  );
};

export default AboutMe;
