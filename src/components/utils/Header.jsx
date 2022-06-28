import React from "react";
import Dropdown from "./Dropdown";

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
}) {
  return (
    <>
      <header>
        <div
          className="d-flex justify-content-between bg-acua align-items-center text-light"
          style={styles.paddingX}
        >
          <div className="col-1 ">
            <img
              className="img-fluid"
              src={images("./footer/footerGov.svg")}
              alt="colombia"
            />
          </div>
          <div className="d-flex align-items-center ">
            <div className="vertical-line my-2 mx-2"></div>
            <Dropdown
              className="bg-transparent text-light"
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
            <i className="fa-solid fa-circle-half-stroke"></i>
            <div className="vertical-line my-2 mx-2"></div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>

        <div
          className="row  py-3 justify-content-between align-items-center"
          style={styles.paddingX}
        >
          <div className="row col-1 col-lg-3">
            <img
              className="col-10 img-fluid "
              src={require("../../assets/logos/logo_car.png")}
              alt="..."
            />
          </div>
          <div className="col-2 ">
            <input
              className="input-header px-2 py-0 my-1 border rounded-3 w-100"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <div className="d-flex justify-content-between my-1">
          <hr className="hr-car hr-type-one bg-green-f" />
          <hr className="hr-car hr-type-two bg-green" />
        </div>
      </header>
    </>
  );
}

const styles = {
  paddingX: { paddingRight: "10%", paddingLeft: "10%" },
};
