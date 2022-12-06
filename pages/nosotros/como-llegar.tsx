import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import Iframe from "../../components/Iframe";
import TitleCar from "../../components/TitleCar";

export default function ComoLlegar() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Como_llegar_FriAug26103530COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        <b>¿Cómo</b> llegar?
      </TitleCar>
      <div className="px-5 py-5">
        <div className="px-5 mx-5 pb-5">
          <Iframe link="https://www.youtube.com/embed/wR4jxPt8krk"></Iframe>
          <div className="text-main fs-responsive-m py-3">
            60 años por la vida en el territorio
          </div>
        </div>

        <h3 className="fw-bold text-acua fs-responsive-l">¿Cómo llegar?</h3>
        <div className="fs-responsive-m text-main">
          Como antecedentes que tuvo en cuenta el legislador: para expedir la
          Ley 3a. de 1961 se deben resaltar: creación de la CVC y la creación de
          la Corporación Autónoma Regional de los Valles del Magdalena y el
          Sinú, la cual en 1968 fue transformada para dar nacimiento al
          Instituto Nacional de Recursos Naturales Renovables Inderena. <br />
          <br />
          El proyecto de ley fue presentado por el representante Enrique Pardo
          Parra quien planteó la iniciativa ante la Cámara, y como ponente fue
          designado Aurelio Camacho Rueda, quien amplió las funciones
          consignadas para la nueva Corporación Autónoma Regional en el proyecto
          original. En el Senado fue designado como ponente el senador Virgilio
          Barco Vargas, y luego de su paso por el Congreso, la ley fue
          sancionada por el presidente Alberto Lleras Camargo.
        </div>
      </div>
    </Layout>
  );
}
