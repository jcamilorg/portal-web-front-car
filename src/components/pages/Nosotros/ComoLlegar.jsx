import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function ComoLlegar() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Como_llegar_FriAug26103530COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>¿Cómo</b> llegar?
      </TitleCar>
    </Layout>
  );
}
