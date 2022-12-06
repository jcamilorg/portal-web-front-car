import React from "react";
import TitleCar from "../../../components/TitleCar";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

export default function EquipoDirectivo() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Recurso_Humano_FriAug26103322COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        <b>Equipo Directivo </b>CAR
      </TitleCar>
    </Layout>
  );
}
