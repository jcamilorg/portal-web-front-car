import React from "react";
import ButtonCAR from "./ButtonCAR";
import Image from "./Image";

const MainNew = (props) => {
  return (
    <div className="px-3 pb-3 pt-4">
      <Image
        classNameImg="rounded-2 w-100"
        src={props.ImgSrc}
        alt="Noticia más reciente"
      />

      <h5 className="text-main py-3 mb-0 fs-responsive-l">{props.title}</h5>
      <p className="text-main fs-responsive-s ">{props.description}</p>
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
  );
};

export default MainNew;
