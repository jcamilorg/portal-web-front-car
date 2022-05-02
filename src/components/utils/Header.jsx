import React from "react";
import Dropdown from "./Dropdown";
import StickyMenu from "./StickyMenu";

let Idiomas = [
  {
    name: "Espanol",
    link: "http://rae.es",
  },
  {
    name: "Ingles",
    link: "http://rae.es",
  },
];

let urlData = "../data.json";

export default function Header() {
  //let increaseNumber = 0;
  //let decreaseNumber = 0;

  function handleIncreaseFontSize() {
    const fsXSmall = document.querySelectorAll(".fs-responsive-xs");
    const fsSmall = document.querySelectorAll(".fs-responsive-s");
    const fsMedium = document.querySelectorAll(".fs-responsive-m");
    const fsLarge = document.querySelectorAll(".fs-responsive-l");

    fsXSmall.forEach((element) => {
      element.classList.remove("fs-responsive-xs");
      element.classList.add("fs-responsive-s");
    });

    fsSmall.forEach((element) => {
      element.classList.remove("fs-responsive-s");
      element.classList.add("fs-responsive-m");
    });

    fsMedium.forEach((element) => {
      element.classList.remove("fs-responsive-m");
      element.classList.add("fs-responsive-l");
    });

    fsLarge.forEach((element) => {
      element.classList.remove("fs-responsive-l");
      element.classList.add("fs-responsive-xl");
    });
  }

  function handleDecreaseFontSize() {
    const fsSmall = document.querySelectorAll(".fs-responsive-s");
    const fsMedium = document.querySelectorAll(".fs-responsive-m");
    const fsLarge = document.querySelectorAll(".fs-responsive-l");
    const fsXLarge = document.querySelectorAll(".fs-responsive-xl");

    fsSmall.forEach((element) => {
      element.classList.remove("fs-responsive-s");
      element.classList.add("fs-responsive-xs");
    });

    fsMedium.forEach((element) => {
      element.classList.remove("fs-responsive-m");
      element.classList.add("fs-responsive-s");
    });

    fsLarge.forEach((element) => {
      element.classList.remove("fs-responsive-l");
      element.classList.add("fs-responsive-m");
    });

    fsXLarge.forEach((element) => {
      element.classList.remove("fs-responsive-xl");
      element.classList.add("fs-responsive-l");
    });
  }

  return (
    <>
      <header>
        <div className="conintainer d-flex justify-content-end pe-5 bg-acua align-items-center text-light">
          <input
            className="input-header px-2 py-0 my-1 border"
            type="text"
            placeholder=""
          />
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
        <div>
          <div className="row ps-5 ms-5 py-3">
            <div className="row col-3 col-lg-2">
              <img
                className="col-10 img-fluid "
                src={require("../../assets/logos/logo_car.png")}
                alt="..."
              />
            </div>
            <div className="col-5 col-lg-3">
              <img
                className="img-fluid col-10"
                src={require("../../assets/logos/logo_gobierno_colombia.png")}
                alt="..."
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <hr className="hr-car hr-type-one bg-green-f" />
            <hr className="hr-car hr-type-two bg-green" />
          </div>
        </div>
      </header>
      <StickyMenu url={urlData} />
    </>
  );
}
