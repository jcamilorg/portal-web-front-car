import React from "react";
import { useMisionRescateVideos } from "../../../components/getDataFromApi";
import Iframe from "../../../components/Iframe";
import SerieTemplate from "../../../layouts/SerieTemplate";
import Layout from "../../../layouts/LayoutBannerBreadcrumb";

const LastChapter = ({ title, link, description }: any) => (
  <div className="row">
    <h3 className="text-acua">
      <b>{title}</b>
    </h3>
    <div className="col-7">
      <Iframe link={link}></Iframe>
    </div>
    <div className="col-5">
      <h5 className="text-acua">
        <b className="fs-responsive-m">Sinopsis</b>
      </h5>
      <div>{description}</div>
    </div>
  </div>
);

const Chapter = ({ title, description, link }: any) => {
  return (
    <div className="col-4">
      <Iframe link={link}></Iframe>
      <h6 className="fs-responsive-m pt-2">{title}</h6>
      <p className="fs-responsive-s">{description}</p>
    </div>
  );
};

const createCollapsiblesBodys = (data: any) => {
  let items = data.map((item: any, index: number) => {
    return (
      <Chapter
        key={index}
        title={item.title}
        description={item.description}
        link={item.link}
      />
    );
  });
  return items;
};

const createLastChapter = (data: any) => {
  let lastChapterItem: any = [];
  if (data) {
    lastChapterItem = [
      <LastChapter
        key={1}
        title={data.title}
        link={data.link}
        description={data.description}
      />,
    ];
  }
  return lastChapterItem;
};

const MisionRescate = () => {
  return (
    <Layout bannerSrc="http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Series_WedJun29182411COT2022.png&mimetype=image/png">
      <SerieTemplate
        title="Misión Rescate CAR"
        description={
          <>
            Corto audiovisual que{" "}
            <b>
              narra y registra las acciones de liberación y rescate de animales
              silvestres
            </b>{" "}
            que se realizan por parte de las Direcciones Regionales CAR en los
            municipios de su jurisdicción.
          </>
        }
        functionToBringData={useMisionRescateVideos}
        itemsPerTemp={5}
        functionToCreateItems={createCollapsiblesBodys}
        functionToCreateLastChapter={createLastChapter}
      />
    </Layout>
  );
};

export default MisionRescate;
