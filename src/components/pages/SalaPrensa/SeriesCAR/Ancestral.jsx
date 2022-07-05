import React from "react";
import TitleCar from "../../../utils/TitleCar";
import Acordion from "../../../utils/Acordion";

const LastChapter = ({ title }) => (
  <div className="row">
    <h3 className="text-acua">
      <b>{title}</b>
    </h3>
    <div className="col-7">
      <div className="border" style={{ height: "250px", width: "95%" }}>
        <img className="img-flui border" alt="principal" />
      </div>
    </div>
    <div className="col-5">
      <h5 className="text-acua">
        <b>Sinopsis</b>
      </h5>
      <div>
        Con un típico cocido cundiboyacense a base de productos cultivados en
        huertos caseros damos fin a esta aventura que llamamos Ancestral, una
        expedición que nos llevó por los aromas, saberes y sabores tradicionales
        de nuestro territorio CAR.
      </div>
    </div>
  </div>
);

export default function Ancestral() {
  return (
    <>
      <TitleCar>
        <b>Ancestral: memoria de la tierra y el fogón</b>
      </TitleCar>
      <div className="container px-5 py-5 fs-responsive-m text-main">
        <p>
          Relata casos de éxito en procesos de producción más limpia de
          productores y emprendimientos vinculados a la estrategia de
          <b> Negocios Verdes de la Corporación.</b>
        </p>
        <LastChapter title="Capítulo 15" />
        <div className="py-4">
          <Acordion></Acordion>
        </div>
      </div>
    </>
  );
}
