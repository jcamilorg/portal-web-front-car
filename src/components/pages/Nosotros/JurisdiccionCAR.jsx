import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import CardPopUp from "../../utils/CardPopUp";

export default function JurisdiccionCAR({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Jurisdicci%C3%B3n_car_MonAug22121637COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Jurisdicción</b> CAR
      </TitleCar>

      <div className="py-5 px-5 fs-responsive-m">
        <p>
          El 31 de enero de 1961 se creó la Corporación Autónoma Regional de los
          Valles de Ubaté y Suárez, hoy, CORPORACIÓN AUTÓNOMA REGIONAL DE
          CUNDINAMARCA, trasladándole la responsabilidad de proteger el medio
          ambiente de un territorio con un <b>área de 18.706,4 Km2</b>, que
          equivale a 1870.640 hectáreas, donde se encuentran{" "}
          <b>104 municipios</b>: 98 pertenecientes al departamento de
          Cundinamarca, 6 al departamento de Boyacá y la zona rural del Distrito
          Capital de Bogotá D.C.
        </p>
        <p>
          En 1996 la CAR inició un proceso de descentralización que distribuyó
          su jurisdicción en siete regionales: Sabana de Occidente con sede en
          Funza, que agrupa a 9 municipios; Sumapaz en Fusagasugá con 10
          municipios; Tequendama y Alto Magdalena en Girardot con 20 municipios;
          Rionegro con sede en Pacho y 8 municipios; Gualivá y Magdalena Centro
          con sede en Villeta y Sabana Norte y Almeidas en Zipaquirá con 21
          municipios cada una.{" "}
        </p>
        <p>
          Los asuntos de la capital, por tratarse del mayor centro urbano del
          país, son abordados desde las oficinas centrales con sede en Bogotá
          D.C. Actualmente, en la jurisdicción el número de habitantes es de
          2.071.972. Al incluir los 7.500.000 de personas que viven en la
          capital de la república, suman cerca de 10.000.000.
        </p>{" "}
        <p>
          El territorio está integrado por nueve cuencas hidrográficas de primer
          orden con los ríos Bogotá, Negro, Sumapaz, Magdalena, Ubaté-Suárez,
          Minero, Machetá, Blanco y Gachetá, que suman los 18.658 Km2. En la
          parte inferior de esta página encontrará dos mapas en formato jpg, que
          describen la jurisdicción de la CAR y su ubicación en el país.
        </p>
        <p></p>
      </div>
      <div className="row px-5">
        <div className="col-6">
          <CardPopUp
            title="Mapa Jurisdicción CAR-Colombia"
            iconSrc={"./mapaColombia.png"}
          />
        </div>
        <div className="col-6">
          <CardPopUp
            title="Mapa de la Jurisdicción CAR"
            iconSrc={"./mapaCundinamarca.png"}
            href={
              "https://datosgeograficos.car.gov.co/datasets/d42a06efae8c4f769da577c2d669c4d0_0/explore?location=4.681371%2C-74.083145%2C8.66"
            }
          />
        </div>
      </div>
    </Layout>
  );
}
