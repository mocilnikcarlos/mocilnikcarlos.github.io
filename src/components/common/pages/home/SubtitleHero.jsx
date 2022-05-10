import React from "react";
import { LineColumn } from "../../fig/LineColumn";
import "./SubtitleHero.scss";

//* Subtitulo Ciudad *
const City = (props) => {
  return (
    <div className="subtitle">
      <LineColumn />
      <div className="subtitle-information">
        <span className="subtitle-title">{props.title}</span>
        <span className="subtitle-text">{props.text}</span>
      </div>
    </div>
  );
};

//* Subtitulo Trabajo *
const Work = (props) => {
  return (
    <div className="subtitle">
      <LineColumn />
      <div className="subtitle-information">
        <span className="subtitle-title">{props.title}</span>
        <span className="subtitle-text">{props.text}</span>
      </div>
    </div>
  );
};

export { City, Work };
