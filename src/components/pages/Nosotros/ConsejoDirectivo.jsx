import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import { ButtonPdf } from "../../utils/ButtonCAR";
import { HrGreen } from "../../utils/HrCAR";
import TitleCar from "../../utils/TitleCar";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  border: solid 1px #ccc;
  line-height: 22px;
`;

const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`;

const Card = ({ name, description }) => (
  <CardContainer className=" f-antipasto-bold">
    <div className="fw-bold  text-acua text-center fs-responsive-m">{name}</div>
    <div className="fw-bold fs-responsive-xs text-center ">{description}</div>
  </CardContainer>
);

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
      <div className="py-5 px-5">
        <ButtonPdf title="Funciones del Consejo Directivo">
          <div className="text-acua">
            Acuerdo No 48 de 23 de febrero de 2021
          </div>
          <span className="text-main" style={{ fontSize: "10px" }}>
            Publicado: febrero 3, 2021
          </span>
        </ButtonPdf>
      </div>
      <h4 className="text-acua fw-bold">Integrantes Consejo Directivo</h4>
      <HrGreen />
      <Grid4>
        <Card name="Dr. presidente" description="Presidente de la República" />
        <Card
          name="Dr. Julio César Turbay Quintero"
          description="Representante del señor Presidente de la República"
        />
        <Card
          name="Dr. Nicolás García Bustos"
          description="Gobernador de Cundinamarca y Presidente del Consejo Directivo"
        />
        <Card
          name="Dra. Nidia Clemencia Riaño Rincon"
          description="Delegada del señor Gobernador de Cundinamarca"
        />
        <Card
          name="Dr. Ramiro Barragán Adame"
          description="Gobernador de Boyacá"
        />
        <Card
          name="Dr. John Edickson Amaya Rodríguez"
          description="Delegado del señor Gobernador de Boyacá
"
        />
        <Card
          name="Dra. Claudia Nayibe López Hernández"
          description="Alcaldesa Mayor de Bogotá D.C."
        />
        <Card
          name="Dra. Carolina Urrutia Vázquez"
          description="Delegada de la señora Alcaldesa Mayor de Bogotá D.C."
        />
        <Card
          name="Dr. Carlos Eduardo Correa Escaf"
          description="Ministro de Ambiente y Desarrollo Sostenible"
        />
        <Card
          name="Dr. Carlos Alberto Frasser Arrieta"
          description="Delegado del señor Ministro de Ambiente y Desarrollo Sostenible"
        />
        <Card
          name="Dr. Gonzalo Ramírez Gaitán"
          description="Alcalde Municipal de Caparrapí, Cundinamarca"
        />
        <Card
          name="Dr. Juan Manuel Lobo Beltrán"
          description="Alcalde Municipal de Guayabal de Síquima, Cundinamarca"
        />
        <Card
          name="Dr. Edson Erasmo Montoya Camargo"
          description="Alcalde Municipal de Sibate, Cundinamarca"
        />
        <Card
          name="Dr. Oscar Triviño Gil"
          description="Alcalde Municipal de San Miguel de Sema, Boyaca"
        />
        <Card
          name="Dr. Danilo Ramírez Vargas"
          description="Representante del Sector Privado"
        />
        <Card
          name="Dr. Luis Alfonso Rubiano López"
          description="Representante del Sector Privado"
        />
        <Card
          name="Dr. Julio Hernando Balsero"
          description="Representante de las Comunidades Indígenas"
        />
        <Card
          name="Dr. Andrés Iván Garzón"
          description="Representante principal de Entidades Sin Ánimo de Lucro"
        />
        <Card
          name="Dr. Juan Carlos Calderón España"
          description="Representante Suplente de Entidades Sin Ánimo de Lucro"
        />
      </Grid4>
    </Layout>
  );
}
