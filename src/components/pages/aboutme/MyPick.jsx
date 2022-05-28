import React from "react";
import CirclesGreen from "../../fig/CirclesGreen";
import "./MyPick.scss";

const MyPick = () => {
  return (
    <div className="box-mypick">
      <CirclesGreen />
      <div className="line-red"></div>
      <div className="img-mypick">
        <div className="img-me"></div>
      </div>
    </div>
  );
};

export default MyPick;
