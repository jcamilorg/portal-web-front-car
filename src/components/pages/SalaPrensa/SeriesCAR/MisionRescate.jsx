import React from "react";
import { useMisionRescateVideos } from "../../../utils/getDataFromApi";
import Iframe from "../../../utils/Iframe";
import SerieTemplate from "./SerieTemplate";

const LastChapter = ({ title, link, description }) => (
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
        title={item.title}
        description={item.description}
        link={item.link}
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
        title={data.title}
        link={data.link}
        description={data.description}
      />,
    ];
  }
  return lastChapterItem;
};

const MisionRescate = () => {
  let videos = useMisionRescateVideos();
  console.log("Mision videos", videos);

  return (
    <>
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
    </>
  );
};

export default MisionRescate;
