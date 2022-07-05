import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "../Layout";
import TitleCar from "../../../utils/TitleCar";
import LinkGeneral from "../../../utils/LinkGeneral";
import ButtonCAR from "../../../utils/ButtonCAR";
import { useSliderApi } from "../../../utils/getDataFromApi";

const AudioCar = ({ title, description, href, imgSrc, extraTxt }) => {
  return (
    <div className="row " style={styles.serieCar}>
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
            <ButtonCAR href={href}>Escuchar...</ButtonCAR>
          </div>
        </div>
      </div>
    </div>
  );
};

const AudiosCar = () => {
  const sliders = useSliderApi("audios car items");

  const series = sliders.map((slider) => {
    const info = slider.description.split("@@@@");
    return (
      <AudioCar
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
      <TitleCar>Productos audiovisuales</TitleCar>
      <AudiosCar />
    </>
  );
};

export default function AudiosCAR({ children }) {
  let location = useLocation().pathname;
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Audios_CAR_WedJun29182448COT2022.png&mimetype=image/png"
      }
    >
      {location === "/sala-de-prensa/audios-car" ? <Content /> : <Outlet />}
    </Layout>
  );
}

const styles = {
  serieCar: {
    position: "relative",
    borderBottom: "2px solid #89d335",
    paddingBottom: "3%",
    margin: "3% 40px",
  },
  SeriesCARBottom: {
    display: "flex",
    justifyContent: "space-between",
  },
};
