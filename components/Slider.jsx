/*Este es un Slider de uso generico, para ser utilizado se necesita estar utilizando bootstrap ya que se 
utilizan sus componentes expecificar las imagenes para las flechas de izquierda y derecha (genera error si no se hace)

Recibe dos propidades de entrada
1. Un arrgelo de componentes - que son los objetos que se veran en el Slider 
2. El Id unico del Slider
att. jcamilorg
*/

import React from "react";
//Importacion de imagenes

function SliderItem(props) {
  let CaroulseClass = "carousel-item";
  if (props.active) {
    CaroulseClass = "carousel-item active";
  }
  return (
    <div className={CaroulseClass}>
      <div className="d-flex justify-content-center">
        <div className={props.classItems}>
          <React.Fragment>{props.item}</React.Fragment>
        </div>
      </div>
    </div>
  );
}

function SliderAuto(props) {
  const Items = props.data;
  const Carditems = Items.map((card, index) => (
    <SliderItem
      classItems={props.classItems}
      key={index}
      item={card}
      active={index === 0 ? true : false}
    />
  ));

  const idTarget = "#" + props.id;

  return (
    <div
      id={props.id}
      className="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{Carditems}</div>

      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
        <img
          style={{ marginRight: "80%" }}
          width="25px"
          src={"/assets/icons/btn-slider-izquierda.png"}
          onError={() => "this.style.display='none'"}
          alt="<"
        />
      </button>

      <button
        className="carousel-control-next "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
        <img
          style={{ marginLeft: "80%" }}
          width="25px"
          src={"/assets/icons/btn-slider-derecha.png"}
          onError={() => "this.style.display='none'"}
          alt=">"
        />
      </button>
    </div>
  );
}

export default SliderAuto;
