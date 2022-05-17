import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./sass/Style.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
