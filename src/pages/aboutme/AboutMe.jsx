import React from "react";
import "./AboutMe.scss";
import MyPick from "./MyPick";

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
