import React from "react";
import "./LinksHirings.scss";

const LinksHirings = (props) => {
  return (
    <li className="item-btns-hiring">
      <a href="/contacto">
        <div className="btn-hiring">
          <div className="cicle-text-btn-hiring">
            <div className="circle-btn-hiring"></div>
            <p className="text-btn-hiring">{props.name}</p>
          </div>
          <div className="arrow">
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default LinksHirings;
