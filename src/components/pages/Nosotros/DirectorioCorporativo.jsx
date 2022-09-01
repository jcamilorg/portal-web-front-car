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

    <div className="item text-main">Oficina Asesora de Planeación</div>
    <div className="item text-main text-center">Ext: 1600</div>

    <div className="item text-main">Oficina Asesora de Comunicaciones</div>
    <div className="item text-main text-center">Ext: 1700</div>

    <div className="item text-main">
      Fondo para las Inversiones Ambientales en la Cuenca del Río Bogotá - FIAB
    </div>
    <div className="item text-main text-center">Ext: 1800</div>

    <div className="item text-main">Dirección de Recursos Naturales</div>
    <div className="item text-main text-center">Ext: 1900</div>

    <div className="item text-main">
      Dirección de Gestión del Ordenamiento Ambiental y Territorial
    </div>
    <div className="item text-main text-center">Ext: 2100</div>

    <div className="item text-main">
      Dirección de Evaluación, Seguimiento y Control Ambiental
    </div>
    <div className="item text-main text-center">Ext: 2200</div>

    <div className="item text-main">Dirección Jurídica</div>
    <div className="item text-main text-center">Ext: 2300</div>

    <div className="item text-main">Dirección de Infraestructura Ambiental</div>
    <div className="item text-main text-center">Ext: 2400</div>

    <div className="item text-main">
      Dirección de Cultura Ambiental y Servicio al Ciudadano
    </div>
    <div className="item text-main text-center">Ext: 2500</div>

    <div className="item text-main">Dirección Administrativa y Financiera</div>
    <div className="item text-main text-center">Ext: 2600</div>
  </div>
);

const CardInfo = ({ title, cities }) => (
  <div className="card-info">
    <div className="header">
      <div className="text-acua fs-responsive-s">{title}</div>
      {cities ? (
        <>
          <div>Municipios de su jurisdicción:</div>
          <div className="fw-normal">{cities}</div>
        </>
      ) : null}
    </div>
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
            ext="2700"
            location="Carrera 10 #16 – 82 Piso 4, Edificio Manuel Mejía, Bogotá"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                7:30 a.m. a 4:30 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Almeidas y Guatavita"
            cities="Chocontá, Guatavita, Machetá, Manta, Sesquilé, Suesca, Tibirita y Villapinzón."
            number={
              <>
                856 1189 <br /> 856 1297
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="2800"
            location="Carrera 5 #5 - 73 Piso 4 Chocontá, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Alto Magdalena"
            cities="Agua de Dios, Nilo, Jerusalén, Tocaima, Ricaurte, Girardot, Guataquí y Nariño."
            number={
              <>
                835 2042
                <br />
                835 2043
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="2900"
            location="Calle 21 #8 – 23 Barrio Granada Girardot, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 12:00 p.m.
                <br />
                1:00 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Bajo Magdalena"
            cities="Caparrapí, Guaduas y Puerto Salgar."
            number={
              <>
                841 7246
                <br /> 841 6821
                <br /> 841 6077
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3000"
            location="Calle 4 #5 -68 Guaduas, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 12:30 m
                <br />
                1:30 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Chiquinquirá"
            cities="Buenavista, Caldas, Chiquinquirá, Ráquira, Saboyá y San Miguel de Sema"
            number={
              <>
                726 2425
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3100"
            location="Carrera 6 #9 – 40 Chiquinquirá, Boyacá"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Gualivá"
            cities="Albán, La Peña, La Vega, Nimaima, Nocaima, Quebrada Negra, San Francisco, Sasaima, Supatá, Útica, Vergara y Villeta."
            number={
              <>
                8444 660
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3201, 3202 o 3203"
            location="Calle8#10A–41 Barrio El Recreo Villeta, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 12:00 p.m.
                <br />
                1:00 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Magdalena Centro"
            cities="Beltrán, Bituima, Changuaní, Guayabal de Síquima, Pulí, San Juan de Río Seco y Vianí."
            ext="3300"
            location="Carrera 5 #3 -02 Vianí, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Rionegro"
            cities="El Peñón, La Palma, Pacho, Paime, San Cayetano, Topaipí, Villagómez y Yacopí."
            number={
              <>
                854 2553
                <br />
                854 2554
                <br />
                854 1077
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3400"
            location="Calle10No.19–72 Barrio Antonio Nariño Pacho, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Sabana Centro"
            cities="Cajicá, Chía, Cogua, Cota, Gachancipá, Nemocón, Sopó, Tabio, Tenjo, Tocancipá y Zipaquirá."
            ext="3500, 3501, 3502 y 3511 Cel: 3204888214"
            location="Calle 7 A #11 – 40 Barrio Algarra Zipaquirá, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Sabana Occidente"
            cities="Bojacá, El Rosal, Facatativá, Funza, Madrid, Mosquera, Subachoque y Zipacón."
            number={
              <>
                843 0590
                <br />
                843 5620
                <br />
                842 4836
                <br />
                842 2801
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3600"
            location="Carrera4#4–38 Facatativá, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Soacha"
            cities="Sibaté y Soacha."
            number={
              <>
                781 8948
                <br />
                781 8953
                <br />
                781 8966
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3700"
            location="Trasversal 7F #26 – 38 Barrio El Nogal Soacha, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 12:30 p.m.
                <br />
                1:30 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Sumapaz"
            cities="Arbeláez, Cabrera, Fusagasugá, Granada, Pasca, Pandi, San Bernardo, Silvania, Tibacuy y Venecia."
            number={
              <>
                867 6759
                <br />
                867 4084
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3800"
            location="Av. Las Palmas #15 – 17 Fusagasugá, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 1:00 p.m.
                <br />
                2:00 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Tequendama"
            cities="Anapoima, Anolaima, Apulo, Cachipay, El Colegio, La Mesa, Quipile, San Antonio del Tequendama, Tena y Viotá."
            number={
              <>
                847 0065
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="3900"
            location="Carrera 21 - Calle 2 Esquina La Mesa, Cundinamarca"
            mail="sau@car.gov.co"
            schedule={
              <>
                Lunes a viernes: <br />
                8:00 a.m. a 12:00 p.m.
                <br />
                1:00 p.m. a 5:00 p.m.
              </>
            }
          />
          <RowInfo
            title="Dirección Regional Ubaté"
            cities="Carmen de Carupa, Cucunubá, Fúquene, Guachetá, Lenguazaque, Simijaca, Susa, Sutatausa, Tausa y Ubaté."
            number={
              <>
                847 0065
                <br />
                855 3609
                <br />
                <b>En bogotá:</b>
                <br />
                580 1111
              </>
            }
            ext="4000"
            location="Transversal 2 #1E – 40 Ubaté, Cundinamarca"
            mail="sau@car.gov.co"
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
