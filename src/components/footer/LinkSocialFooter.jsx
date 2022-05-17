import React from "react";
import "./LinkSocialFooter.scss";

const LinkSocialFooter = (props) => {
  return (
    <li className="item-socialfooter">
      <span className={`tooltip-socialfooter ${props.socialfooter.tag}`}>
        {props.socialfooter.name}
      </span>
      <a
        href={props.socialfooter.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-socialfooter ${props.socialfooter.tag}`}
        // className="link-socialfooter"
      >
        <span className="img">
          <img
            src={require("../../assets/svg/" + props.socialfooter.src + ".svg")}
            // src={icofooter}
            alt={props.socialfooter.name}
            loading="lazy"
          />
        </span>
      </a>
    </li>
  );
};

export default LinkSocialFooter;
