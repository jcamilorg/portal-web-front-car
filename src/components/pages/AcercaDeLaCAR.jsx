import React, { Component } from "react";
//Import de componentes
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "../utils/StickyMenu";
import Iframe from "../utils/Iframe";
// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
//Variables definitions
let urlData = "../data.json";

export default class AcercaDeLaCar extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <StickyMenu url={urlData} />
        <div className="container text-center">
          <h2 className="text-green-f py-3">
            <b>Acerca de la CAR</b>
          </h2>
          <div className="row px-5 pb-3">
            <div className="col-8">
              <Iframe
                link={"https://www.youtube.com/embed/P3MY6vPdgZM"}
              ></Iframe>
            </div>
            <div className="col-4">
              <div>
                <img
                  className="img-fluid"
                  src={images("./acercaDe.png")}
                  alt="acerca de la car"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
