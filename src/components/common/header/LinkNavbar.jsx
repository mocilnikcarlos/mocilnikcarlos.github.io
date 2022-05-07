import React from "react";
import "./LinkNavbar.scss";

const ListNavbar = (props) => {
  return (
    <li>
      <a href={props.PropertyLink.url} className="linknav">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">{props.PropertyLink.name}</span>
            <span className="link-title2 title">{props.PropertyLink.name}</span>
          </div>
        </span>
      </a>
    </li>
  );
};

export default ListNavbar;
