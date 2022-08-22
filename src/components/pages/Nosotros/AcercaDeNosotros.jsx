import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function AcercaDeNosotros({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Acerca_de_nosotros_MonAug22121501COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Misión</b> y visión
      </TitleCar>
    </Layout>
  );
}
