import React from "react";
import AudioPlayer from "../../../utils/AudioPlayer";
import {
  useATonoConLaCarPodcast,
  useSliderApi,
} from "../../../utils/getDataFromApi";
import AudioTemplate from "./AudioTemplate";

export default function ATonoCARPodcast() {
  const sliders = useSliderApi("audios car items");
  const slider = sliders.filter(
    (slider) => slider.name === "Podcast a tono con la CAR"
  );

  const audios = useATonoConLaCarPodcast();
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

  const description =
    "Escucha sobre sostenibilidad ambiental, cuidado de los recursos naturales y nuestra misión como autoridad ambiental.";

  return (
    <AudioTemplate
      title="Podcast A Tono con la CAR"
      description={description}
      href="https://www.spreaker.com/show/a-tono-con-la-car"
      imgSrc={slider[0] ? slider[0].imageURL : ""}
    >
      {audioPlayers}
    </AudioTemplate>
  );
}
