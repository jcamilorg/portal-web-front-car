import React from "react";
import ButtonCAR from "../../../utils/ButtonCAR";
import Image from "../../../utils/Image";
import TitleCar from "../../../utils/TitleCar";

const AudioTemplate = ({ title, description, children, href, imgSrc }) => {
  return (
    <div>
      <TitleCar>
        <b>{title}</b>
      </TitleCar>
      <div className="row px-3">
        <div className="col-4">
          <Image
            src={imgSrc}
            classNameImg=" rounded  "
            classNameDiv="p-5"
          ></Image>
        </div>
        <div className="col-8 pt-5">
          <p>{description}</p>
          <div>{children}</div>
          <ButtonCAR className="w-50" href={href}>
            Escuchar Todos los programas
          </ButtonCAR>
        </div>
      </div>
    </div>
  );
};

export default AudioTemplate;
