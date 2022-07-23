import React from "react";
import AudioPlayer from "../../../utils/AudioPlayer";
import { useATonoConLaCar, useSliderApi } from "../../../utils/getDataFromApi";
import AudioTemplate from "./AudioTemplate";

export default function ATonoCAR() {
  const sliders = useSliderApi("audios car items");
  const audios = useATonoConLaCar();

  let regex = /(\d+)/g;
  const audioPlayers = audios[0].map((item, index) => {
    return (
      <AudioPlayer
        number={
          item.snippet.title.match(regex)
            ? item.snippet.title.match(regex)[0]
            : null
        }
        title={item.snippet.title}
        src={"https://www.youtube.com/embed/" + item.snippet.resourceId.videoId}
      ></AudioPlayer>
    );
  });

  const slider = sliders.filter(
    (slider) => slider.name === "A tono con la CAR"
  );

  const description =
    "Escucha nuestro programa de radio A Tono con la CAR, todos los jueves a las 9:00 a.m. a través de El Dorado Radio en la frecuencia 99.5 FM o en el sitio web www.eldoradoradio.co";

  return (
    <AudioTemplate
      title="A tono con la CAR"
      description={description}
      href="https://www.youtube.com/playlist?list=PL4Hz7tdqWVVh6B4XarQ6V000BDDLa9HFK"
      imgSrc={slider[0] ? slider[0].imageURL : ""}
    >
      {audioPlayers}
    </AudioTemplate>
  );
}
