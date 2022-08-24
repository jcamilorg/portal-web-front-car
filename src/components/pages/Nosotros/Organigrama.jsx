import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import styled from "styled-components";
import { ButtonPdf } from "../../utils/ButtonCAR";

const ItemContainer = styled.div`
  color: #fff;
  font-weight: bold;
  padding: 18px;
  border-radius: 10px;
  text-align: center;
  margin: 10px;
`;

const OrganigramaGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  gap: 2rem;
`;
const OrganigramaGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  margin: 50px 0;
`;

const OrganigramaGrid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  margin: 50px 0;
`;

const OrganigramaGrid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 50px 0;
`;
const Item = ({ children, bgColor }) => (
  <ItemContainer style={{ backgroundColor: bgColor }}>{children}</ItemContainer>
);

export default function Organigrama({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Organigrama_MonAug22121706COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Estructura</b> CAR
      </TitleCar>
      <div className="fs-responsive-m py-5" style={{ textAlign: "center" }}>
        Acuerdo 22 - 2014 / acuerdo 28 - 2017
      </div>
      <OrganigramaGrid1 className="fs-responsive-s">
        <div />
        <Item bgColor="#89d335">Asamblea Corporativa</Item>
        <div />
        <div />
        <Item bgColor="#89d335">Consejo Directivo</Item>
        <div />
        <Item bgColor="#015473">FIAB</Item>
        <Item bgColor="#89d335">Dirección General</Item>
        <div />
        <div className="d-flex flex-column justify-content-around">
          <Item bgColor="#015473">
            Dirección de Control Disciplinario Interno
          </Item>
          <Item bgColor="#015473">Oficina de Control Interno</Item>
          <Item bgColor="#015473">Oficina Asesora de Comunicaciones</Item>
        </div>
        <div />
        <div className="d-flex flex-column justify-content-around">
          <Item bgColor="#015473">Secretaría General</Item>
          <Item bgColor="#015473">
            Oficina de las Tecnologías de la Información y las Comunicaciones -
            TIC
          </Item>
          <Item bgColor="#015473">Oficina de Talento Humano</Item>
          <Item bgColor="#015473">Oficina Asesora de Planeación</Item>
        </div>
      </OrganigramaGrid1>
      <OrganigramaGrid2 className="fs-responsive-xs">
        <Item bgColor="#017182">Dirección de Recursos Naturales</Item>
        <Item bgColor="#017182">
          Dirección de Laboratorio e Innovación Ambiental
        </Item>
        <Item bgColor="#017182">
          Dirección de Gestión del Ordenamiento Ambiental y Territorial
        </Item>
        <Item bgColor="#017182">
          Dirección de Evaluación, Seguimiento y Control Ambiental
        </Item>
        <Item bgColor="#017182">Dirección Jurídica</Item>
        <Item bgColor="#017182">Dirección de Infraestructura Ambiental</Item>
        <Item bgColor="#017182">
          Dirección de Cultura Ambiental y Servicio al Ciudadano
        </Item>
        <Item bgColor="#017182">
          Dirección de Cultura Ambiental y Servicio al Ciudadano
        </Item>
      </OrganigramaGrid2>
      <OrganigramaGrid1 className="fs-responsive-s">
        <div />
        <Item bgColor="#06909C">Direcciones Regionales</Item>
        <div />
      </OrganigramaGrid1>
      <OrganigramaGrid3 className="fs-responsive-s">
        <Item bgColor="#06909C">Bogotá - La Calera</Item>
        <Item bgColor="#06909C">Bajo Magdalena</Item>
        <Item bgColor="#06909C">Magdalena Centro</Item>
        <Item bgColor="#06909C">Sabana Occidente</Item>
        <Item bgColor="#06909C">Tequendama</Item>
      </OrganigramaGrid3>
      <OrganigramaGrid4 className="fs-responsive-s px-5 mx-5">
        <Item bgColor="#06909C">Alto Magdalena</Item>
        <Item bgColor="#06909C">Gualivá</Item>
        <Item bgColor="#06909C">Sabana Centro</Item>
        <Item bgColor="#06909C">Sumapaz</Item>
      </OrganigramaGrid4>
      <OrganigramaGrid3 className="fs-responsive-s">
        <Item bgColor="#06909C">Almeidas y Guatavita</Item>
        <Item bgColor="#06909C">Chiquinquirá</Item>
        <Item bgColor="#06909C">Rionegro</Item>
        <Item bgColor="#06909C">Soacha</Item>
        <Item bgColor="#06909C">Ubaté</Item>
      </OrganigramaGrid3>
      <TitleCar>
        <b>Acuerdos</b>
      </TitleCar>
      <div className="row pt-5 px-5">
        <div className="col-4">
          <ButtonPdf title="Acuerdo 28 de 2017">
            <p className="fs-responsive-xs mb-0">
              “Por el cual se modifica el Acuerdo CAR 22 de 2014 que determina
              la estructura interna de la CAR Cundinamarca"
            </p>
            <span className=" text-acua" style={{ fontSize: "10px" }}>
              Publicado: octubre 10, 2017
            </span>
          </ButtonPdf>
        </div>
        <div className="col-4">
          <ButtonPdf title="Acuerdo 022 de 2014">
            <p className="fs-responsive-xs mb-0">
              Determina la estructura de la Corporación
            </p>
            <span className=" text-acua" style={{ fontSize: "10px" }}>
              Publicado: octubre 21, 2014
            </span>
          </ButtonPdf>
        </div>
        <div className="col-4">
          <ButtonPdf title="Acuerdo 44 de 2005">
            <p className="fs-responsive-xs mb-0">
              Determina la estructura de la Corporación
            </p>
            <span className=" text-acua" style={{ fontSize: "10px" }}>
              Publicado: diciembre 28, 2005
            </span>
          </ButtonPdf>
        </div>
      </div>
    </Layout>
  );
}
