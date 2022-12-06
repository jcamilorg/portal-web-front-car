import React from "react";
import AudioPlayer from "../../../components/AudioPlayer";
import {
  useCendocPodcast,
  useSliderApi,
} from "../../../components/getDataFromApi";
import AudioTemplate from "../../../layouts/AudioTemplate";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

export default function CendocPodcast() {
  const sliders: any = useSliderApi("audios car items");
  const audios: any = useCendocPodcast();

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

  const slider = sliders.filter(
    (slider: any) => slider.name === "CENDOC Podcast"
  );

  const description =
    "Conoce la propuesta cultural del Centro de Documentación Ambiental CAR - CENDOC que busca recorrer los paisajes, lugares y personajes más relevantes del Territorio, fortaleciendo la memoria cultural y ambiental de nuestro Territorio, a través de una serie de podcast descargables para reproducir en cualquier dispositivo móvil.";

  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      }
    >
      <AudioTemplate
        title="Conociendo nuestro Territorio"
        description={description}
        href="https://www.spreaker.com/show/conociendo-nuestro-territorio"
        imgSrc={slider[0] ? slider[0].imageURL : ""}
      >
        {audioPlayers}
      </AudioTemplate>
    </Layout>
  );
}
