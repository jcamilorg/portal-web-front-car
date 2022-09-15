import React from "react";
import Dropdown from "./Dropdown";
import HrCAR from "./HrCAR";
import LinkGeneral from "./LinkGeneral";
import Image from "./Image";

const images = require.context("../../assets/img/", true);

let Idiomas = [
  {
    name: "Espanol",
    destination_uri: "http://rae.es",
  },
  {
    name: "Ingles",
    destination_uri: "http://rae.es",
  },
];

export default function Header({
  handleIncreaseFontSize,
  handleDecreaseFontSize,
  handleInvertColors,
}) {
  return (
    <>
      <header>
        <div
          className="d-flex justify-content-between bg-acua align-items-center text-light"
          style={styles.paddingX}
        >
          <div className="col-1 ">
            <Image src={images("./footer/footerGov.svg")} alt="Colombia" />
          </div>
          <div className="d-flex align-items-center ">
            <div className="vertical-line my-2 mx-2"></div>
            <Dropdown
              className="bg-transparent text-light f-antipasto fw-bold"
              name="Selecionar idioma"
              items={Idiomas}
            />
            <div className="vertical-line my-2 mx-2"></div>
            <span>
              <b role="button" onClick={handleIncreaseFontSize}>
                A+
              </b>
            </span>
            <div className="vertical-line my-2 mx-2"></div>
            <span>
              <b role="button" onClick={handleDecreaseFontSize}>
                A-
              </b>
            </span>
            <div className="vertical-line my-2 mx-2"></div>
            <i
              role="button"
              onClick={handleInvertColors}
              className="fa-solid fa-circle-half-stroke"
            ></i>
            <div className="vertical-line my-2 mx-2"></div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>

        <div
          className="row  py-3 justify-content-between align-items-center"
          style={styles.paddingX}
        >
          <div className="row col-5 col-md-4 col-lg-3">
            <LinkGeneral href="/">
              <Image
                classNameDiv="col-10"
                src={require("../../assets/logos/logo_car.png")}
                alt="Logo CAR"
              />
            </LinkGeneral>
          </div>
          <div className="col-4 col-lg-2 ">
            <input
              className="input-header px-2 py-0 my-1 border rounded-3 w-100"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <HrCAR style={styles.paddingHr} type2 />
      </header>
    </>
  );
}

const styles = {
  paddingX: { paddingRight: "10%", paddingLeft: "10%" },
  paddingHr: { paddingBottom: "2px" },
};
