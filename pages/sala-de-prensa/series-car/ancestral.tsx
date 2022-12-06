import React from "react";
import { useAncestralVideos } from "../../../components/getDataFromApi";
import Iframe from "../../../components/Iframe";

import Layout from "../../../layouts/LayoutBannerBreadcrumb";
import SerieTemplate from "../../../layouts/SerieTemplate";

const LastChapter = ({ title, link, description }: any) => (
  <div className="row">
    <div className="col-7">
      <h4 className="text-acua">
        <b>{title}</b>
      </h4>
      <Iframe link={link}></Iframe>
    </div>
    <div className="col-5 pt-5">
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
        title={item.snippet.title}
        description={item.snippet.description}
        link={
          "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId
        }
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
        title={data.snippet.title}
        link={
          "https://www.youtube.com/embed/" + data.snippet.resourceId.videoId
        }
        description={data.snippet.description}
      />,
    ];
  }
  return lastChapterItem;
};

const Ancestral = () => {
  return (
    <Layout bannerSrc="http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Series_WedJun29182411COT2022.png&mimetype=image/png">
      <SerieTemplate
        title="Ancestral: memoria de la tierra y el fogón"
        description={
          <>
            Relata casos de éxito en procesos de producción más limpia de
            productores y emprendimientos vinculados a la estrategia de
            <b> Negocios Verdes de la Corporación.</b>
          </>
        }
        functionToBringData={useAncestralVideos}
        itemsPerTemp={10}
        functionToCreateItems={createCollapsiblesBodys}
        functionToCreateLastChapter={createLastChapter}
      />
    </Layout>
  );
};

export default Ancestral;
