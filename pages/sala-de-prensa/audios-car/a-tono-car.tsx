import React from "react";
import AudioPlayer from "../../../components/AudioPlayer";
import {
  useATonoConLaCar,
  useSliderApi,
} from "../../../components/getDataFromApi";
import AudioTemplate from "../../../layouts/AudioTemplate";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

export default function ATonoCAR() {
  const sliders: any = useSliderApi("audios car items");
  const audios: any = useATonoConLaCar();

  let regex = /(\d+)/g;
  const audioPlayers = audios[0].map((item: any, index: number) => {
    return (
      <AudioPlayer
        key={index}
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
    (slider: any) => slider.name === "A tono con la CAR"
  );

  const description =
    "Escucha nuestro programa de radio A Tono con la CAR, todos los jueves a las 9:00 a.m. a través de El Dorado Radio en la frecuencia 99.5 FM o en el sitio web www.eldoradoradio.co";

  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      }
    >
      <AudioTemplate
        title="A tono con la CAR"
        description={description}
        href="https://www.youtube.com/playlist?list=PL4Hz7tdqWVVh6B4XarQ6V000BDDLa9HFK"
        imgSrc={slider[0] ? slider[0].imageURL : ""}
      >
        {audioPlayers}
      </AudioTemplate>
    </Layout>
  );
}
