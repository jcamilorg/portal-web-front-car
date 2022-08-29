import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import styled from "styled-components";

const TableDirectoriesContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 33.3% 16.6% 16.6% 16.6% 17%;
  padding: 5px 0;
  background-color: #017185;
  border-radius: 10px 10px 0 0;

  .header-title {
    background-color: #017185;
    font-weight: bold;
    color: #fff;
    border-right: solid 2px #fff;
    padding: 0 20px;
  }
`;
const TableDirectoriesContainerBody = styled.div`
  display: grid;
  grid-template-columns: 50% 16.6% 16.6% 17%;
  padding: 5px 0;

  .header {
    border-left: 3px solid #89d335;
    padding-left: 10px;
    margin: 8px 0;
    font-weight: bold;
    margin: 0 10px;
  }
  .item {
    padding-left: 15px;
    margin: 0 10px;
  }
  .box-container {
    //box-shadow: 1px 1px 5px #ccc;
    padding: 10px;
    margin: 10px;
  }

  .table-info {
    display: grid;
    grid-template-columns: 66% 33%;
  }
`;

const DireccionAreaInfo = () => (
  <div className="box-container table-info border">
    <div className="header text-acua">Sede Central</div>
    <div className="header text-acua">580 11 11</div>

    <div className="item text-main">Dirección General</div>
    <div className="item text-main">Ext: 1000</div>

    <div className="item text-main">Secretaria General</div>
    <div className="item text-main">Ext: 1100</div>

    <div className="item text-main">
      Dirección de Control Disciplinario Interno
    </div>
    <div className="item text-main">Ext: 1200</div>

    <div className="item text-main">Oficina de Control Interno</div>
    <div className="item text-main">Ext: 1300</div>

    <div className="item text-main">
      Oficina de las Tecnologías de la Información y las Comunicaciones
    </div>
    <div className="item text-main">Ext: 1400</div>

    <div className="item text-main">Oficina de Talento Humano</div>
    <div className="item text-main">Ext: 1500</div>
  </div>
);

const TelefonosInfo = () => (
  <div className="box-container border">
    <div className="header text-acua">580 11 11</div>
    <div className="item text-main">Ext: 1000</div>
    <div className="item text-main">Ext: 1100</div>
    <div className="item text-main">Ext: 1200</div>
    <div className="item text-main">Ext: 1300</div>
    <div className="item text-main">Ext: 1400</div>
    <div className="item text-main">Ext: 1500</div>
  </div>
);

const TableDirectories = () => (
  <div className="pt-5 px-4">
    <TableDirectoriesContainerHeader>
      <div className="header-title">Dirección o área</div>
      <div className="header-title text-center">Teléfono</div>
      <div className="header-title text-center">Dirección</div>
      <div className="header-title text-center">Correo</div>
      <div className="header-title text-center">Horario de atención</div>
    </TableDirectoriesContainerHeader>
    <TableDirectoriesContainerBody>
      <DireccionAreaInfo />
      <TelefonosInfo />
    </TableDirectoriesContainerBody>
  </div>
);

export default function DirectorioCorporativo() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Directorio_Corporativo_FriAug26103457COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Directorio áreas y Direcciones Regionales CAR</b>
      </TitleCar>
      <TableDirectories></TableDirectories>
    </Layout>
  );
}
