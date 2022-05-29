import React, { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutMe from "./pages/aboutme/AboutMe";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Service from "./pages/service/Service";
import "./sass/Style.scss";

const App = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
    return () => {
      window.removeEventListener("beforeunload", () => window.scrollTo(0, 0));
    };
  }, []);
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="contacto" element={<Contacts />} />
        <Route path="sobremi" element={<AboutMe />} />
        <Route path="proyecto" element={<Project />} />
        <Route path="servicio" element={<Service />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
