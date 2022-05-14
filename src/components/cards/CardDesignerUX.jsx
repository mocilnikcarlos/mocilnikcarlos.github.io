import React from "react";
import "./CardDesignerUX.scss";

const CardDesignerUX = (props) => {
  return (
    <div className="card-designerux">
      <div className="box-card-designerux">
        <div className="box-border-gradient box-shadow-gradient">
          <div className="box-shadow-gradient-shadow"></div>
          <img
            src={require("../../assets/svg/" + props.CardDesigUx.icon + ".svg")}
            alt={props.CardDesigUx.alt}
            className="icon"
          />
        </div>

        <div className="text">
          <p className="title">{props.CardDesigUx.title}</p>
        </div>
        <div className="text1">
          <p className="title1">{props.CardDesigUx.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDesignerUX;
