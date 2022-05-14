import React from "react";
import "./LinkSocialDesk.scss";

const LinkSocialDesk = (props) => {
  return (
    <li className="items-socialdesk">
      <a
        href={props.social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-socialdesk ${props.social.tag}`}
      >
        <span className="img">
          <img
            src={require("../../assets/svg/iconsocial" +
              props.social.img +
              ".svg")}
            alt="{props.social.name}"
          />
        </span>
      </a>
      <span className={`tooltip ${props.social.tag}`}>{props.social.name}</span>
    </li>
  );
};

export default LinkSocialDesk;