import React from "react";
import Layout from "./Layout";
import TitleCar from "../../utils/TitleCar";

export default function GaleriaFotos({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Galeria_de_fotos_WedJun29183235COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>Eventos CAR</TitleCar>
      <br />
    </Layout>
  );
}
