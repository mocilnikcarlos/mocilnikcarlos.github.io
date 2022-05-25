import React from "react";
// import figmaicon from "../../assets/svg/figmaicon.svg";
import dataIcon from "../../json/iconSoftware.json";
import "./DescriptionAboutMe.scss";

const DescriptionAboutMe = () => {
  return (
    <div className="box-descriptionaboutme">
      <h3 className="title-descriptionaboutme">
        Hola, mi nombre es Carlos Mocilnik
      </h3>
      <p className="textweb">
        Hace aproximadamente 15 años que estoy inmerso en el mundo del diseño y
        el desarrollo web. Actualmente evocándome en el Diseño UX/UI.
        <br />
        <br />
        Mi alta capacidad de aprendizaje, rapidez y obsesión por el detalle
        logran en mí generar mindset pixel perfect.
        <br />
        <br />
        Mi fuerte es una mentalidad analítica, permitiéndome comprometerme con
        las dolencias de los usuarios para cada situación, plasmarlo en el
        diseño y así lograr el objetivo deseado.
      </p>
      <ul className="list-icons-descriptionaboutme">
        {dataIcon.getIconSoftware.map((item) => (
          <li key={item.id}>
            <img
              src={require("../../assets/svg/" + item.src + ".svg")}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionAboutMe;
