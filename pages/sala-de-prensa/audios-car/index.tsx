import React from "react";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../../components/TitleCar";
import LinkGeneral from "../../../components/LinkGeneral";
import ButtonCAR from "../../../components/ButtonCAR";
import { useSliderApi } from "../../../components/getDataFromApi";

const AudioCar = ({ title, description, href, imgSrc, extraTxt }: any) => {
  return (
    <div
      className="row "
      style={{
        position: "relative",
        borderBottom: "2px solid #89d335",
        paddingBottom: "3%",
        margin: "3% 40px",
      }}
    >
      <div className="col-6 text-center">
        <LinkGeneral href={href}>
          <img className="w-50" src={imgSrc} alt="..." />
        </LinkGeneral>
      </div>
      <div className="col-6">
        <LinkGeneral href={href}>
          <h5 className="fs-responsive-m text-acua">
            <b>{title}</b>
          </h5>
        </LinkGeneral>

        <div
          className="fs-responsive-s description_from_api"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <br />
        <br />
        <div className="row justify-content-between">
          <div className="col-5">
            <span className="fs-responsive-xs">{extraTxt}</span>
          </div>
          <div className="col-6">
            <ButtonCAR href={href} className={undefined} onClick={undefined}>
              Escuchar...
            </ButtonCAR>
          </div>
        </div>
      </div>
    </div>
  );
};

const AudiosCar = () => {
  const sliders = useSliderApi("audios car items");

  const series = sliders.map((slider: any, index: number) => {
    const info = slider.description.split("@@@@");
    return (
      <AudioCar
        key={index}
        title={slider.name}
        description={info[0]}
        href={slider.destinationURL}
        imgSrc={slider.imageURL}
        extraTxt={info[1]}
      />
    );
  });
  return <>{series}</>;
};

const Content = () => {
  return (
    <>
      <TitleCar title={undefined} type2={undefined}>
        Productos audiovisuales
      </TitleCar>
      <AudiosCar />
    </>
  );
};

export default function AudiosCAR() {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      }
    >
      <Content />
    </Layout>
  );
}
