import React, { Component } from "react";
//Import de componentes
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "../utils/StickyMenu";
import Iframe from "../utils/Iframe";
// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
const icons = require.context("../../assets/icons/", true);
//Variables definitions
let urlData = "../data.json";

const AsiTrabajamosGrid = () => {
  return (
    <div className="text-center">
      <b>Así trabajamos </b>por nuestro territorio
      <div className="row">
        <AsiTrabajamosItem />
        <AsiTrabajamosItem />
        <AsiTrabajamosItem />
        <AsiTrabajamosItem />
        <AsiTrabajamosItem />
        <AsiTrabajamosItem />
      </div>
    </div>
  );
};

const AsiTrabajamosItem = (props) => {
  return (
    <div className="col-4 bg-light ">
      <hr />
      <img className="img-fluid" src={images("./new1.png")} alt="noticia" />
      <div className="bg-white mx-2 topN15px position-relative fs-12px">
        <h5>Un titulo va aqui</h5>
        <p>Aqui va la descripcion de la noticia como seria </p>
      </div>
    </div>
  );
};

const FormNewsCard = () => {
  return (
    <div>
      <button className="btn my-2 text-main bg-acua text-light w-100 px-2">
        <img width="40px" src={icons("./sucribirse.png")} alt="..." />{" "}
        <b>Suscribase al newsCAR</b>
      </button>
      <form>
        <label for="nombre" className="my-0 d-block">
          Nombre <b>*</b>
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="nombre"
          className="me-2 input"
        />
        <input
          type="text"
          id="apellido"
          placeholder="apellidos"
          className="input"
        />
        <br />
        <br />
        <label for="email" className="my-0 d-block">
          Email <b>*</b>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-100 input"
        />
        <br />
        <br />
        <label for="comment" className="my-0 d-block">
          Comentarios (opcional)
        </label>
        <textarea id="comment" rows="4" className="w-100"></textarea>
        <input
          type="submit"
          value="Enviar"
          className="py-2 px-3 border border"
        ></input>
      </form>
    </div>
  );
};

export default class AsiTrabajamosNuestroTerrritorio extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <StickyMenu url={urlData} />
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-10 py-3">
              <img
                className="img-fluid"
                src={images("./bannerAsiTrabajamos.png")}
                alt="GranJero"
              />
            </div>
            <div className="col-6">
              <AsiTrabajamosGrid />
              <img
                className="img-fluid pb-4"
                src={images("./img1AsiTrabajamos.png")}
                alt="..."
              />
              <img
                className="img-fluid pb-4"
                src={images("./img2AsiTrabajamos.png")}
                alt="..."
              />
            </div>
            <div className="col-4">
              <FormNewsCard />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
