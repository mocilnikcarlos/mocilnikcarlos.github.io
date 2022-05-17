import React from "react";
import BackgroundFooter from "../fig/BackgroundFooter";
import Logo from "../../assets/svg/Logo.svg";
import socialFooterMap from "../../json/socialFooterMap.json";
import LinkSocialFooter from "./LinkSocialFooter";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="box-footer">
      <div className="box-figure-footer">
        <BackgroundFooter />
      </div>
      <div className="content-footer">
        <div className="box-logo">
          <img src={Logo} alt="" />
          <p className="text-footer">
            Cat Quantum Design es un proyecto personal para mostrar mis
            habilidades, brindar mi servicio como Diseñador UX/UI.
          </p>
        </div>
        <div className="box-social-copy">
          <div className="icons-socialfooter">
            {socialFooterMap.getSocialFooter.map((item) => (
              <LinkSocialFooter key={item.id} socialfooter={item} />
            ))}
          </div>
          <p className="text-copy">
            Sitio web diseñado y desarrollado por Carlos Mocilnik | Cat Quantum
            Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
