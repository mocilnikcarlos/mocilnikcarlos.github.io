import React from "react";
import "./CardDesignerUX.scss";

const CardDesignerUX = (props) => {
  return (
    <div className="box-carddesignerux">
      <div className="content-carddesignerux">
        <div className="border-gradient shadow-gradient">
          <div className="shadow-gradient-shadow"></div>
          <img
            src={require("../../assets/svg/" + props.CardDesigUx.icon + ".svg")}
            alt={props.CardDesigUx.alt}
            className="icon-carddesignerux"
          />
        </div>

        <div className="box-text">
          <p className="title-carddesignerux">{props.CardDesigUx.title}</p>
        </div>
        <div className="box-text1">
          <p className="text-carddesignerux">{props.CardDesigUx.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDesignerUX;
