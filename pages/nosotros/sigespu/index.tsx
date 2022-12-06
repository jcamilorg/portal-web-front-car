import React from "react";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../../components/TitleCar";
import CardPopUp from "../../../components/CardPopUp";

const SigespuMain = () => (
  <>
    <TitleCar title={undefined} type2={undefined}>
      Recurso <b>humano</b>
    </TitleCar>
    <div className="row py-5">
      <div className="col-6 py-5">
        <CardPopUp
          title="SIGESPU"
          description="Conócelo aquí"
          href="/nosotros/sigespu/caracterizacion-procesos"
          iconSrc={undefined}
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
      <div className="col-6 py-5">
        <CardPopUp
          title="Modelo de operaciones y procesos"
          description="Conócelo aquí"
          href="/nosotros/sigespu/caracterizacion-procesos"
          iconSrc={undefined}
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
      <div className="col-4 py-5">
        <CardPopUp
          title="Manual de Gestión"
          description="Conócelo aquí"
          href="/nosotros/sigespu/caracterizacion-procesos"
          iconSrc={undefined}
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
      <div className="col-4 py-5">
        <CardPopUp
          title="Manual de Gestión Política de Gestión integral SIGESPU"
          description="Conócelo aquí"
          href="/nosotros/sigespu/caracterizacion-procesos"
          iconSrc={undefined}
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
      <div className="col-4 py-5">
        <CardPopUp
          title="Caracterización de procesos"
          description="Conócelos aquí"
          href="/nosotros/sigespu/caracterizacion-procesos"
          iconSrc={undefined}
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
    </div>
  </>
);

export default function Sigespu() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=SIGESPU_FriAug26103555COT2022.png&mimetype=image/png"
      }
    >
      <SigespuMain />
    </Layout>
  );
}
