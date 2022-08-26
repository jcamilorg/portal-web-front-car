import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function DirectorioCorporativo() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Directorio_Corporativo_FriAug26103457COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Directorio áreas y Direcciones Regionales CAR</b>
      </TitleCar>
    </Layout>
  );
}
