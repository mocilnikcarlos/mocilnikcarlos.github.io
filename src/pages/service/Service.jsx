import React from "react";
import TableService from "./TableService";
import "./Service.scss";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import Hiring from "./Hiring";
import Explanation from "./Explanation";

const Service = () => {
  return (
    <section className="service">
      <article className="article-service">
        <TitleWeb1 titleweb="Servicio" />
        <TableService />
        <div className="hiring-explanation">
          <Hiring />
          <Explanation />
        </div>
      </article>
    </section>
  );
};

export default Service;
