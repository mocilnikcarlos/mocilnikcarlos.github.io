import React from "react";
import "./TitleWeb.scss";

const TitleWeb1 = (props) => {
  return (
    <div className="box-titleweb">
      <h2 className="titleweb">{props.titleweb}</h2>
      <div className="row-title1">
        <div className="row1"></div>
        <div className="row2"></div>
      </div>
    </div>
  );
};

const TitleWeb2 = (props) => {
  return (
    <div className="box-titleweb">
      <h2 className="titleweb">{props.titleweb}</h2>
      <div className="row-title2">
        <div className="row1"></div>
        <div className="row2"></div>
      </div>
    </div>
  );
};

export { TitleWeb1, TitleWeb2 };
