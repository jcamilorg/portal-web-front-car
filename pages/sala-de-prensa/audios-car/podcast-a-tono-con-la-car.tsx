import React from "react";
import AudioPlayer from "../../../components/AudioPlayer";
import {
  useATonoConLaCarPodcast,
  useSliderApi,
} from "../../../components/getDataFromApi";
import AudioTemplate from "../../../layouts/AudioTemplate";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

export default function ATonoCARPodcast() {
  const sliders: any = useSliderApi("audios car items");
  const slider: any = sliders.filter(
    (slider: any) => slider.name === "Podcast a tono con la CAR"
  );

  const audios = useATonoConLaCarPodcast();
  let regex = /(\d+)/g;
  const audioPlayers = audios[0].map((item: any, index: number) => {
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
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      }
    >
      <AudioTemplate
        title="Podcast A Tono con la CAR"
        description={description}
        href="https://www.spreaker.com/show/a-tono-con-la-car"
        imgSrc={slider[0] ? slider[0].imageURL : ""}
      >
        {audioPlayers}
      </AudioTemplate>
    </Layout>
  );
}
