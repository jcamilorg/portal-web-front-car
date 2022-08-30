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
    font-weight: 900;
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
    margin: 8px 10px;
    font-weight: bold;
  }
  .header-number {
    padding-left: 10px;
    margin: 8px 0;
    font-weight: bold;
    margin: 0 10px;
  }
  .item {
    padding-left: 15px;
    margin: 0 10px;
    border-bottom: solid 1px #ccc;
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
const TableItems = styled.div`
  display: grid;
  grid-template-columns: 33.3% 16.6% 16.6% 16.6% 17%;
  padding: 5px 0;
  border-radius: 10px 10px 0 0;
  grid-row-gap: 15px;

  .item {
    border: 1px solid #ccc;
    margin: 0 10px;
    text-align: center;
    padding: 10px;
  }

  .header {
    border-left: 3px solid #89d335;
    padding-left: 10px;
    margin: 8px 10px;
    font-weight: bold;
  }
  .card-info {
    border: 1px solid #ccc;
    margin: 0 10px;
  }
  .card-city {
    border-left: 3px solid #89d335;
    padding-left: 10px;
    margin: 8px 10px;
    font-weight: bold;
  }
`;

const DireccionAreaInfo = () => (
  <div className="box-container table-info border fs-responsive-xs">
    <div className="header text-acua fs-responsive-s">Sede Central</div>
    <div className="header-number text-main text-center">580 11 11</div>

    <div className="item text-main">Dirección General</div>
    <div className="item text-main text-center">Ext: 1000</div>

    <div className="item text-main">Secretaria General</div>
    <div className="item text-main text-center">Ext: 1100</div>

    <div className="item text-main">
      Dirección de Control Disciplinario Interno
    </div>
    <div className="item text-main text-center">Ext: 1200</div>

    <div className="item text-main">Oficina de Control Interno</div>
    <div className="item text-main text-center">Ext: 1300</div>

    <div className="item text-main">
      Oficina de las Tecnologías de la Información y las Comunicaciones
    </div>
    <div className="item text-main text-center">Ext: 1400</div>

    <div className="item text-main">Oficina de Talento Humano</div>
    <div className="item text-main text-center">Ext: 1500</div>
  </div>
);

const CardInfo = ({ title, cities }) => (
  <div className="card-info">
    <div className="header text-acua fs-responsive-s">{title}</div>
    {cities ? (
      <>
        <div className="card-city">Municipios de su jurisdicción:</div>
        <div className="card-city fw-normal">{cities}</div>
      </>
    ) : null}
  </div>
);

const TableDirectories = () => (
  <>
    <TableDirectoriesContainerHeader className="fs-responsive-xs">
      <div className="header-title">Dirección o área</div>
      <div className="header-title text-center">Teléfono</div>
      <div className="header-title text-center">Dirección</div>
      <div className="header-title text-center">Correo</div>
      <div className="header-title text-center">Horario de atención</div>
    </TableDirectoriesContainerHeader>
    <TableDirectoriesContainerBody>
      <DireccionAreaInfo />
      <div className="text-main box-container border fs-responsive-xs text-center">
        Av. Esperanza # 60-50
        <br /> Centro Empresarial Gran Estación - Costado Esfera, pisos 6 y 7
        Bogotá.
      </div>
      <div className="text-main box-container border fs-responsive-xs text-center">
        sau@car.gov.co
      </div>

      <div className="text-main box-container border fs-responsive-xs ">
        Lunes a viernes:
        <br /> 8:00 a.m. a 5:00 p.m.
      </div>
    </TableDirectoriesContainerBody>
  </>
);

const RowInfo = ({ title, cities, number, ext, location, mail, schedule }) => (
  <>
    <CardInfo title={title} cities={cities}></CardInfo>
    <div className="item">
      {number ? number : "580 11 11"}
      <br /> Ext. {ext}
    </div>
    <div className="item">{location}</div>
    <div className="item">{mail}</div>
    <div className="item">{schedule}</div>
  </>
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
      <div className="pt-5 px-4">
        <TableDirectories />
        <TableItems className="text-main fs-responsive-xs">
          <RowInfo
            title="Dirección de Laboratorio e Innovación Ambiental"
            ext="4300"
            location="Centro Empresarial Santo Domingo (Avenida Troncal de Occidente
            #18-76) Manzana C - Bodega 13 Mosquera, Cundinamarca"
            mail="laboratorio@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Casa CAR - Centro de Documentación Ambiental"
            ext="4200"
            location="Carrera 20 #37 - 34 Barrio Teusaquillo"
            mail="cendoc@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Bogotá - La Calera"
            cities="Bogotá y La Calera."
            ext="4200"
            location="Carrera 20 #37 - 34 Barrio Teusaquillo"
            mail="cendoc@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
        </TableItems>
      </div>
    </Layout>
  );
}
