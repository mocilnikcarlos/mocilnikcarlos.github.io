import React from "react";
import NavbarMap from "../../../json/navbarMap.json";
import ListNavbar from "./LinkNavbar";
import "./Header.scss";

const NavbarHeader = () => {
  return (
    <ul className="listnav">
      {NavbarMap.navbar.map((el) => (
        <ListNavbar key={el.id} PropertyLink={el} />
      ))}
    </ul>
  );
};

export default NavbarHeader;
