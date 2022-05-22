import React, { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
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
        <Route path="servicio" element={<Service />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
