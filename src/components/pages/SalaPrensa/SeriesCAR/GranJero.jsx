import React from "react";
import { useGranJeroVideos } from "../../../utils/getDataFromApi";
import Iframe from "../../../utils/Iframe";
import ButtonCAR from "../../../utils/ButtonCAR";
import SerieTemplate from "./SerieTemplate";
import Carousel from "react-multi-carousel";

const icons = require.context("../../../../assets/icons", true);

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
    <div className="px-4">
      <Iframe link={link}></Iframe>
      <h6 className="fs-responsive-m pt-2">{title}</h6>
      <p className="fs-responsive-xs">{description}</p>
    </div>
  );
};

//#region Custom for Carrouselll
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ right: "calc(1% + 1px)" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-derecha.png")} alt="<" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ left: "calc(1% + 1px)" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-izquierda.png")} alt="<" />
    </button>
  );
};
//#endregion

const createCollapsiblesBodys = (data) => {
  let items = data.map((item, index) => {
    return (
      <Chapter
        key={index}
        title={"Capitulo " + (index + 1)}
        description={item.snippet.title}
        link={
          "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId
        }
      />
    );
  });
  return (
    <>
      <Carousel
        responsive={responsive}
        className="text-center py-3"
        autoPlay={false}
        shouldResetAutoplay={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {items}
      </Carousel>
      <ButtonCAR href="https://www.youtube.com/c/ElgranJero" className="w-50">
        Ver todos los capítulos aquí
      </ButtonCAR>
    </>
  );
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

const GranJero = () => {
  console.log("videos", useGranJeroVideos());

  return (
    <>
      <SerieTemplate
        title="El GranJero"
        description={""}
        functionToBringData={useGranJeroVideos}
        itemsPerTemp={null}
        functionToCreateItems={createCollapsiblesBodys}
        functionToCreateLastChapter={createLastChapter}
      />
    </>
  );
};

export default GranJero;
