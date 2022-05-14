import React from "react";
import { LineColumn } from "../../fig/LineColumn";
import "./SubtitleHero.scss";

//* Subtitulo Ciudad *
const City = (props) => {
  return (
    <div className="box-subtitle">
      <LineColumn />
      <div className="information-subtitle">
        <span className="title-subtitle">{props.title}</span>
        <span className="text-subtitle">{props.text}</span>
      </div>
    </div>
  );
};

//* Subtitulo Trabajo *
const Work = (props) => {
  return (
    <div className="box-subtitle">
      <LineColumn />
      <div className="information-subtitle">
        <span className="title-subtitle">{props.title}</span>
        <span className="text-subtitle">{props.text}</span>
      </div>
    </div>
  );
};

export { City, Work };
