import React from "react";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../../utils/TitleCar";
import { Outlet, useLocation } from "react-router-dom";
import CardPopUp from "../../../utils/CardPopUp";

const SigespuMain = () => (
  <>
    <TitleCar>
      Recurso <b>humano</b>
    </TitleCar>
    <div className="row py-5">
      <CardPopUp
        title="Caracterización de procesos"
        description="Conócelos aquí"
        href="/nosotros/sigespu/caracterizacion-procesos"
      ></CardPopUp>
    </div>
  </>
);

export default function Sigespu() {
  let location = useLocation();
  console.log(location);
  location = location.pathname;
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=SIGESPU_FriAug26103555COT2022.png&mimetype=image/png"
      }
    >
      {location === "/nosotros/sigespu" ? <SigespuMain /> : <Outlet />}
    </Layout>
  );
}
