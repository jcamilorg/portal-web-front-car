import React from "react";
import TitleCar from "../../../utils/TitleCar";
import styled from "styled-components";
import { ButtonPdf } from "../../../utils/ButtonCAR";

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
    <>
      <TitleCar>
        <b>Caracterizacion</b> Procesos
      </TitleCar>
      <Grid>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de TICs">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión de atención y servicio al ciudadano">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>

        <div className="pb-5">
          <hr></hr>
          <ButtonPdf title="Gestión del Conocimiento I+D+I">
            <div class="fs-responsive-xs">publicado: 01/2022</div>
          </ButtonPdf>
        </div>
      </Grid>
    </>
  );
};

export default CaracterizacionProcesos;
