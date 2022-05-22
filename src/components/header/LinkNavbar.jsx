import React from "react";
import { Link } from "react-router-dom";
import "./LinkNavbar.scss";

const ListNavbar = (props) => {
  function refreshPage() {
    window.scrollTo(0, 0);
  }

  return (
    <li>
      <Link
        to={props.PropertyLink.url}
        onClick={refreshPage}
        className="linknav"
      >
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
