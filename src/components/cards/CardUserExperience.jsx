import React from "react";
import "./CardUserExperience.scss";

const CardUserExperience = (props) => {
  return (
    <div className="box-carduserexperience">
      <span className="linehover"></span>
      <span className="linehover"></span>
      <span className="linehover"></span>
      <span className="linehover"></span>
      <div className="content-carduserexperience">
        <div className="img-title-carduserexperience">
          <img
            src={require("../../assets/svg/" + props.CardUx.icon + ".svg")}
            alt={props.CardUx.alt}
            className="icon-carduserexperience"
          />
          <p className="title-carduserexperience">{props.CardUx.title}</p>
        </div>

        <p className="text-carduserexperience">{props.CardUx.content}</p>
      </div>
    </div>
  );
};

export default CardUserExperience;
