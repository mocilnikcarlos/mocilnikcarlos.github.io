import React from "react";
import eyeview from "../../assets/svg/eyeview.svg";
import "./CardProfessionalPassion.scss";

const CardProfessionalPassionUp = (props) => {
  return (
    <div className="box-cardprofessionalpassionup">
      <div className="content-cardprofessionalpassion">
        <a
          href={props.Professional.url}
          target="_blank"
          rel="noopener noreferrer"
          className="linkeye-cardprofessionalpassion"
        >
          <div className="backeye-cardprofessionalpassion"></div>
          <img
            loading="lazy"
            src={eyeview}
            alt=""
            className="eye-cardprofessionalpassion"
          />
        </a>
        <div
          className={`img-cardprofessionalpassion ${props.Professional.img}`}
        ></div>
        <div className="boxtext-cardprofessionalpassion">
          <span className="title-cardprofessionalpassion">
            {props.Professional.title}
          </span>
          <span className="text-cardprofessionalpassion">
            {props.Professional.content}
          </span>
        </div>
      </div>
    </div>
  );
};

const CardProfessionalPassionDown = (props) => {
  return (
    <div className="box-cardprofessionalpassiondown">
      <div className="content-cardprofessionalpassion">
        <a
          href={props.Professional.url}
          target="_blank"
          rel="noopener noreferrer"
          className="linkeye-cardprofessionalpassion"
        >
          <div className="backeye-cardprofessionalpassion"></div>
          <img src={eyeview} alt="" className="eye-cardprofessionalpassion" />
        </a>
        <div
          className={`img-cardprofessionalpassion ${props.Professional.img}`}
        ></div>
        <div className="boxtext-cardprofessionalpassion">
          <span className="title-cardprofessionalpassion">
            {props.Professional.title}
          </span>
          <span className="text-cardprofessionalpassion">
            {props.Professional.content}
          </span>
        </div>
      </div>
    </div>
  );
};

export { CardProfessionalPassionUp, CardProfessionalPassionDown };
