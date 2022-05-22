import React from "react";
import "./InfoService.scss";

const InfoService = (props) => {
  return (
    <div className="box-infoservice">
      <div className="shape-infoservice">
        <div className="img-infoservice">
          <img
            src={require("../../assets/svg/" + props.InforService.src + ".svg")}
            loading="lazy"
            alt={props.InforService.alt}
            className="icon-infoservice"
          />
        </div>
      </div>
      <div className="content-infoservice">
        <h3 className="title-infoservice">{props.InforService.title}</h3>
        <p className="text-infoservice">{props.InforService.content}</p>
      </div>
    </div>
  );
};

export default InfoService;
