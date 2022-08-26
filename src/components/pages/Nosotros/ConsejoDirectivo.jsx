import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function ConsejoDirectivo() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Consejo_Directivo_FriAug26103411COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Consejo</b> Directivo
      </TitleCar>
    </Layout>
  );
}
