import React from "react";
import LinksHirings from "./LinksHirings";
import "./Hiring.scss";

const Hiring = () => {
  return (
    <div className="box-hiring">
      <div className="btns-hiring">
        <ul className="list-btns-hiring">
          <LinksHirings name="Consultoría UX/UI" />
          <LinksHirings name="Contratación por proyecto" />
          <LinksHirings name="Contratación directa" />
        </ul>
      </div>
      <p className="text-hiring">
        Podés contratar mi servicio de estas tres maneras. No obstante, si es
        una necesidad más especifica, podés ponerte en contacto conmigo de forma
        directa para conocer sobre tu necesidad.
      </p>
    </div>
  );
};

export default Hiring;
