import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "../Layout";
import TitleCar from "../../../utils/TitleCar";
import ButtonCAR from "../../../utils/ButtonCAR";
import { useSliderApi } from "../../../utils/getDataFromApi";
import LinkGeneral from "../../../utils/LinkGeneral";

const SerieCar = ({ title, description, href, imgSrc, extraTxt }) => {
  return (
    <div className="row " style={styles.serieCar}>
      <div className="col-6 text-center">
        <LinkGeneral href={href}>
          <img className="w-75" src={imgSrc} alt="..." />
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
            <ButtonCAR href={href}>Ver serie...</ButtonCAR>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeriesCar = () => {
  const sliders = useSliderApi("Series car items");

  const series = sliders.map((slider) => {
    const info = slider.description.split("@@@@");
    return (
      <SerieCar
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
      <SeriesCar />
    </>
  );
};

export default function SeriesCAR() {
  let location = useLocation().pathname;

  return (
    <Layout bannerSrc="http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Series_WedJun29182411COT2022.png&mimetype=image/png">
      {location === "/sala-de-prensa/series-car" ? <Content /> : <Outlet />}
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
