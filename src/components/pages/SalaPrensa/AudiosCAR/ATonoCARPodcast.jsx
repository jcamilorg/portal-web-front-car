import React from "react";
import { useSliderApi } from "../../../utils/getDataFromApi";
import AudioTemplate from "./AudioTemplate";

export default function ATonoCARPodcast() {
  const sliders = useSliderApi("audios car items");
  const slider = sliders.filter(
    (slider) => slider.name === "Podcast a tono con la CAR"
  );

  const description =
    "Escucha sobre sostenibilidad ambiental, cuidado de los recursos naturales y nuestra misión como autoridad ambiental.";

  return (
    <AudioTemplate
      title="Podcast A Tono con la CAR"
      description={description}
      href="http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      imgSrc={slider[0] ? slider[0].imageURL : ""}
    ></AudioTemplate>
  );
}
