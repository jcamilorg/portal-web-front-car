import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import CardPopUp from "../../components/CardPopUp";
import TitleCar from "../../components/TitleCar";
import { HrGreen } from "../../components/HrCAR";
import { ButtonPdf } from "../../components/ButtonCAR";

const Objetivos = () => (
  <div style={{ width: "600px" }}>
    <h4 className="text-acua fw-bold">Objetivos</h4>
    <HrGreen />
    <div className="fs-responsive-m">
      Ley 99 de 1993 (Artículo 31)
      <br /> La CAR al igual que las demás corporaciones tienen por objeto la
      ejecución de las políticas, planes, programas y proyectos sobre medio
      ambiente y recursos naturales renovables, así como el cumplimiento y
      oportuna aplicación a las disposiciones legales vigentes sobre su
      disposición, administración, manejo y aprovechamiento, Documentos anexos
      conforme a las regulaciones, pautas y directrices expedidas por el
      MINISTERIO DEL MEDIO AMBIENTE
    </div>
  </div>
);

export default function ObjetivosYFunciones() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Objetivos_y_funciones_MonAug22121548COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        Objetivos y <b>funciones</b>
      </TitleCar>
      <div className="row py-5 my-5">
        <div className="col-6">
          <CardPopUp
            title="Objetivos"
            description="Conócelos aquí"
            iconSrc="/assets/icons/capture.png"
            pdf={undefined}
            href={undefined}
          >
            <Objetivos />
          </CardPopUp>
        </div>
        <div className="col-6">
          <CardPopUp
            title="Funciones"
            description="Conócelas aquí"
            iconSrc="/assets/icons/toDoList.png"
            pdf
            href={undefined}
          >
            {""}
          </CardPopUp>
        </div>
      </div>

      <TitleCar title={undefined} type2={undefined}>
        Documentos <b>anexos</b>
      </TitleCar>
      <div className="row">
        <div className="col-6 my-4 py-4">
          <ButtonPdf title="Acuerdo 48 del 23 de febrero de 2021">
            Por medio del cual se adopta la reforma de los Estatutos de la
            Corporación Autónoma Regional de Cundinamarca - CAR
          </ButtonPdf>
        </div>
        <div className="col-3 my-4 py-4">
          <ButtonPdf title="Ley 99 de 1993">{""}</ButtonPdf>
        </div>
        <div className="col-3 my-4 py-4">
          <ButtonPdf title="Estatutos de la CAR">{""}</ButtonPdf>
        </div>
      </div>
    </Layout>
  );
}
