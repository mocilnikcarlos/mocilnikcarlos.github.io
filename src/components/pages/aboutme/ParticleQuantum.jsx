import React from "react";
import dataparticle from "../../../json/particleMap.json";
import "./ParticleQuantum.scss";

const ParticleQuantum = () => {
  return (
    <div className="box-glitch-catquantum">
      {dataparticle.getPositionParticle.map((item) => (
        <div key={item.id} className={`glitch-catquantum position-${item.id}`}>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
        </div>
      ))}
    </div>
  );
};

export default ParticleQuantum;
