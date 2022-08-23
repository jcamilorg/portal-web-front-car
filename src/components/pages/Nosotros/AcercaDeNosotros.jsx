import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import CardPopUp from "../../utils/CardPopUp";

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
      <div className="row py-5 my-5 px-5">
        <div className="col-6">
          <CardPopUp
            title="Misión"
            description="Conócela aquí"
            iconSrc="./bullseye.png"
          />
        </div>
        <div className="col-6">
          <CardPopUp
            title="Visión"
            description="Conócela aquí"
            iconSrc="./telescope.png"
          />
        </div>
      </div>

      <TitleCar>
        <b>Valores</b> y Principios
      </TitleCar>
      <div className="row pt-5 mt-5 px-5">
        <div className="col-4">
          <CardPopUp
            title="Código de ética"
            description="Conócelo aquí"
            iconSrc="./badget.png"
          />
        </div>
        <div className="col-4">
          <CardPopUp
            title="Decálogo de valores"
            description="Conócelo aquí"
            iconSrc="./hands.png"
          />
        </div>
        <div className="col-4">
          <CardPopUp
            title="Principios"
            description="Conócelos aquí"
            iconSrc="./ligthbullheart.png"
          />
        </div>
      </div>
    </Layout>
  );
}
