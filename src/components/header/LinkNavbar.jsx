import React from "react";
import { Link } from "react-router-dom";
import "./LinkNavbar.scss";

const ListNavbar = (props) => {
  return (
    <li>
      <Link to={props.PropertyLink.url} className="linknav">
        <span className="mask-navbar">
          <div className="link-container">
            <span className="link-visible block-fx">
              {props.PropertyLink.name}
            </span>
            <span className="link-hide block-fx">
              {props.PropertyLink.name}
            </span>
          </div>
        </span>
      </Link>
    </li>
  );
};

export default ListNavbar;
