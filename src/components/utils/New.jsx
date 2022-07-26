import React from "react";
import ButtonCAR from "./ButtonCAR";
import Image from "./Image";
const New = (props) => {
  return (
    <div className="row border-end-0 border-start-0 border-top-0 border pt-4 pb-3">
      <Image
        classNameDiv="col-4 px-1"
        classNameImg="rounded-2"
        src={props.ImgSrc}
        alt="Noticia de la pagina web"
      />

      <div className="col-8">
        <h6 className="fs-responsive-m">{props.title}</h6>
        <p className="fs-responsive-s">{props.description}</p>
        <br />
        <div className="row justify-content-between">
          <div className="col-5">
            <i className="fa-regular fa-clock" />

            <span>{" " + props.date}</span>
          </div>
          <div className="col-6">
            <ButtonCAR>
              leer mas <i className="fa-solid fa-circle-plus" />
            </ButtonCAR>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
