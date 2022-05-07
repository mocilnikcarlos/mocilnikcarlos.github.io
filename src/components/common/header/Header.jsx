import React from "react";
import Logo from "../../../assets/svg/Logo.svg";
import NavbarHeader from "./NavbarHeader";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="box-header">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-header" />
        </div>
        <nav className="menu">
          <NavbarHeader />
        </nav>
      </div>
    </header>
  );
};

export default Header;
