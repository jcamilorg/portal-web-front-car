import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function JurisdiccionCAR({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Jurisdicci%C3%B3n_car_MonAug22121637COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Jurisdicción</b> CAR
      </TitleCar>
    </Layout>
  );
}
