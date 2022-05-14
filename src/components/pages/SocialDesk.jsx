import React from "react";
import socialDeskMap from "../../json/socialDeskMap.json";
import LinkSocialDesk from "./LinkSocialDesk";
import { LineColumnSocial } from "../fig/LineColumn";
import "./SocialDesk.scss";

const SocialDesk = () => {
  return (
    <div className="box-socialdesk">
      <nav className="nav-socialdesk">
        <ul className="list-socialdesk">
          {socialDeskMap.socialDesk.map((el) => (
            <LinkSocialDesk key={el.id} social={el} />
          ))}
        </ul>
      </nav>
      <LineColumnSocial />
      <span className="text-socialhero">Sigueme</span>
    </div>
  );
};

export default SocialDesk;
