import React from "react";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../../components/TitleCar";
import CardPopUp from "../../../components/CardPopUp";
import styled from "styled-components";

const Grid3 = styled.div`
  padding-top: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 70px;
  grid-auto-rows: minmax(100px, auto);
`;

const RecursoHumanoMain = () => (
  <>
    <TitleCar title={undefined} type2={undefined}>
      Recurso <b>humano</b>
    </TitleCar>
    <div className="row justify-content-center pt-5 mt-5">
      <div className="col-6">
        <CardPopUp
          title="Equipo Directivo CAR"
          description="Conócelo aquí"
          href="/nosotros/recurso-humano/equipo-directivo"
          pdf={undefined}
        >
          {""}
        </CardPopUp>
      </div>
    </div>
    <Grid3>
      <CardPopUp
        title="Instrumentos de Planeación Estratégica del Recurso Humano"
        description="Conócelos aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>

      <CardPopUp
        title="Manual de Funciones y Competencias Laborales"
        description="Conócelo aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>

      <CardPopUp
        title="Plan Anual de Vacantes y Plan de Previsión del Recurso Humano"
        description="Conócelos aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>

      <CardPopUp
        title="Procesos de selección meritocráticos para la provisión de empleos de carrera administrativa"
        description="Conócelos aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>
      <CardPopUp
        title="Orientaciones y documentación trámite de posesión"
        description="Conócelo aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>
      <CardPopUp
        title="Actos de nombramiento servidores CAR"
        description="Conócelos aquí"
        href="/"
        pdf={undefined}
      >
        {""}
      </CardPopUp>
    </Grid3>
  </>
);

export default function RecursoHumano() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Recurso_Humano_FriAug26103322COT2022.png&mimetype=image/png"
      }
    >
      <RecursoHumanoMain />
    </Layout>
  );
}
