import React from "react";
import Dropdown from "./Dropdown";

let Idiomas = [
  {
    name: "Espanol",
    link: "http://rae.es",
  },
  {
    name: "Ingles",
    link: "http://rae.es",
  },
  {
    name: "Italiano",
    link: "http://rae.es",
  },
];

export default function Header() {
  return (
    <header>
      <div className="conintainer d-flex justify-content-end pe-5 bg-acua align-items-center text-light">
        <input
          className="input-header p-1 py-2"
          type="text"
          placeholder="Buscar 🔍"
        />
        <div className="vertical-line my-2 mx-2"></div>
        <Dropdown
          className="bg-transparent text-light"
          name="Selecionar idioma"
          items={Idiomas}
        />
        <div className="vertical-line my-2 mx-2"></div>
        <span>
          <b>A+</b>
        </span>
        <div className="vertical-line my-2 mx-2"></div>
        <span>
          <b>A-</b>
        </span>
        <div className="vertical-line my-2 mx-2"></div>
        <i className="fa-solid fa-circle-half-stroke"></i>
        <div className="vertical-line my-2 mx-2"></div>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
      <div>
        <div className="d-flex px-5 py-4">
          <img
            height="50px"
            src={require("../../assets/logos/logo_car.png")}
            alt="..."
          />
          <img
            height="50px"
            src={require("../../assets/logos/logo_gobierno_colombia.png")}
            alt="..."
          />
        </div>
        <div className="d-flex justify-content-between">
          <hr className="hr-header hr-type-one bg-green-f" />
          <hr className="hr-header hr-type-two bg-green" />
        </div>
      </div>
    </header>
  );
}
