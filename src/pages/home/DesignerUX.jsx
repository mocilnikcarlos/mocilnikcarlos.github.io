import React from "react";
import CardDesignerUX from "../../components/common/cards/CardDesignerUX";
import { TitleWeb1 } from "../../components/common/pages/TitleWeb";
import dataCardUx from "../../json/cardDesignerUX.json";
import "./DesignerUX.scss";

const DesignerUX = () => {
  return (
    <div className="designer-ux">
      <article className="box-designer-ux cta hide show">
        <TitleWeb1 titleweb="El trabajo de un Designer UX" />
        <p className="text-web">
          En pocas palabras, un diseñador UX está encargado de lograr generar la
          mejor experiencia para el usuario. Tan simple y tan complejo a la vez,
          se necesitan de muchas herramientas, desde psicológicas hasta
          tecnológicas. Aun así, no solo es pensar en el usuario. Tener bien en
          claro cuál es el objetivo de la empresa también entra en estos
          requisitos, ya que será este el propósito que se verá reflejado en el
          usuario.
        </p>
        <div className="box-cardsux">
          {dataCardUx.dataCardUx.map((el) => (
            <CardDesignerUX key={el.id} CardUx={el} />
          ))}
        </div>
        <p className="text-web">
          Para entrar en detalles de como se logra una buena experiencia de
          usuario primero hay que entender que este proceso es un bucle y que no
          acaba una vez obtenido un resultado. La sociedad avanza y con ella las
          necesidades. Quedarse con un solo resultado implica estancarse en un
          grupo reducido de personas, perdiendo así una gran cantidad de
          tráfico.
        </p>
      </article>
    </div>
  );
};

export default DesignerUX;