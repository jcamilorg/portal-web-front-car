import React from "react";
import AudioPlayer from "../../../utils/AudioPlayer";
import { useCendocPodcast, useSliderApi } from "../../../utils/getDataFromApi";
import AudioTemplate from "./AudioTemplate";

export default function CendocPodcast() {
  const sliders = useSliderApi("audios car items");
  const audios = useCendocPodcast();

  let regex = /(\d+)/g;
  const audioPlayers = audios[0].map((item, index) => {
    return (
      <AudioPlayer
        key={index}
        number={item.title.match(regex) ? item.title.match(regex)[0] : null}
        title={item.title}
        src={item.link}
      ></AudioPlayer>
    );
  });

  const slider = sliders.filter((slider) => slider.name === "CENDOC Podcast");

  const description =
    "Conoce la propuesta cultural del Centro de Documentación Ambiental CAR - CENDOC que busca recorrer los paisajes, lugares y personajes más relevantes del Territorio, fortaleciendo la memoria cultural y ambiental de nuestro Territorio, a través de una serie de podcast descargables para reproducir en cualquier dispositivo móvil.";

  return (
    <AudioTemplate
      title="Conociendo nuestro Territorio"
      description={description}
      href="https://www.spreaker.com/show/conociendo-nuestro-territorio"
      imgSrc={slider[0] ? slider[0].imageURL : ""}
    >
      {audioPlayers}
    </AudioTemplate>
  );
}
