import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";

export default function Sigespu() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=SIGESPU_FriAug26103555COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>SIGESPU</b>
      </TitleCar>
    </Layout>
  );
}
