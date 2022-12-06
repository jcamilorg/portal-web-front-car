import React from "react";
import TitleCar from "../../../components/TitleCar";
import styled from "styled-components";
import { ButtonPdf } from "../../../components/ButtonCAR";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

const Grid = styled.div`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5rem;

  hr {
    height: 5px;
    background-color: #aaa;
  }
`;

const CaracterizacionProcesos = () => {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=SIGESPU_FriAug26103555COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        <b>Caracterizacion</b> Procesos
      </TitleCar>
      <Grid>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div className="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
      </Grid>
    </Layout>
  );
};

export default CaracterizacionProcesos;
