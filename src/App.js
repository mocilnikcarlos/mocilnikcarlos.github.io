import React, { Fragment } from "react";
import { Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import "./sass/Style.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes></Routes>
    </Fragment>
  );
};

export default App;
