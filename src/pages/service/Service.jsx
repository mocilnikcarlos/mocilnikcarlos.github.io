import React from "react";
import TableService from "./TableService";
import "./Service.scss";
import { TitleWeb1 } from "../../components/pages/TitleWeb";
import Hiring from "./Hiring";
import Explanation from "./Explanation";
import InfoService from "./InfoService";
import dataInforBanner from "../../json/cardBannerService.json";

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

      <div className="box-banner-service">
        <div className="content-banner-service">
          {dataInforBanner.getInforService.map((item) => (
            <InfoService key={item.id} InforService={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
