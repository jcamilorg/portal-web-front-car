import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function ObjetivosYFunciones({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Objetivos_y_funciones_MonAug22121548COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        Objetivos y <b>funciones</b>
      </TitleCar>
    </Layout>
  );
}
