import React from "react";
import "./BtnWeb.scss";

const BtnWeb = (props) => {
  return (
    <button type={props.type} className="btnweb">
      {props.content}
      <div className="arrow">
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </button>
  );
};

export default BtnWeb;
