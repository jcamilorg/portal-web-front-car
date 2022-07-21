import React from "react";
import { useAncestralVideos } from "../../../utils/getDataFromApi";
import Iframe from "../../../utils/Iframe";
import SerieTemplate from "./SerieTemplate";

const LastChapter = ({ title, link, description }) => (
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

const Chapter = ({ title, description, link }) => {
  return (
    <div className="col-4">
      <Iframe link={link}></Iframe>
      <h6 className="fs-responsive-m pt-2">{title}</h6>
      <p className="fs-responsive-s">{description}</p>
    </div>
  );
};

const createCollapsiblesBodys = (data) => {
  let items = data.map((item, index) => {
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

const createLastChapter = (data) => {
  let lastChapterItem = [];
  if (data) {
    lastChapterItem = [
      <LastChapter
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
    <>
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
    </>
  );
};

export default Ancestral;
