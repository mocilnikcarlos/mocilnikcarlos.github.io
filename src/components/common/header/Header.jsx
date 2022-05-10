import React from "react";
import Logo from "../../../assets/svg/Logo.svg";
import NavbarHeader from "./NavbarHeader";
import "./Header.scss";
import useHeader from "../../../hooks/useHeader";

const Header = () => {
  const navColor = useHeader();

  return (
    <header className={`header ${navColor && "active"}`}>
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
