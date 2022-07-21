import React from "react";
import { useSliderApi } from "../../../utils/getDataFromApi";
import AudioTemplate from "./AudioTemplate";

export default function CendocPodcast() {
  const sliders = useSliderApi("audios car items");
  console.log(sliders);
  const slider = sliders.filter((slider) => slider.name === "CENDOC Podcast");

  const description =
    "Conoce la propuesta cultural del Centro de Documentación Ambiental CAR - CENDOC que busca recorrer los paisajes, lugares y personajes más relevantes del Territorio, fortaleciendo la memoria cultural y ambiental de nuestro Territorio, a través de una serie de podcast descargables para reproducir en cualquier dispositivo móvil.";

  return (
    <AudioTemplate
      title="Conociendo nuestro Territorio"
      description={description}
      href="http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      imgSrc={slider[0] ? slider[0].imageURL : ""}
    ></AudioTemplate>
  );
}
