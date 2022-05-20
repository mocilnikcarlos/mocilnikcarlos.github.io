import React from "react";
// import search from "../../assets/svg/searchtable.svg";
import dataTable from "../../json/tableService.json";
import "./TableService.scss";

const TableService = () => {
  return (
    <div className="box-table">
      <div className="header-table">
        <h2 className="title-header-table">Cat Quantum</h2>
        <p className="text-header-table">
          Creación de soluciones en los puntos de contacto entre los usuarios y
          tu empresa
        </p>
      </div>
      {dataTable.getRow.map((item) => (
        <div className="row-table" key={item.id}>
          <img
            src={require("../../assets/svg/" + item.src + ".svg")}
            alt={item.alt}
            className="iconrow"
          />
          <p className="text-row-table">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TableService;
