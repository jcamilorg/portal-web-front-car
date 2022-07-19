import React, { useState } from "react";
//Components
import DefaultLayout from "../layouts/Default";
import Slider from "../utils/Slider";
import Carousel from "react-multi-carousel";
import TitleCar from "../utils/TitleCar";
import Image from "../utils/Image";
// Functions
import "react-multi-carousel/lib/styles.css";
import {
  useSliderApi,
  useCounterTreeApi,
  useNewsApi,
} from "../utils/getDataFromApi";
import ButtonCAR from "../utils/ButtonCAR";

// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
const icons = require.context("../../assets/icons/", true);

const MainBanner = () => {
  const sliders = useSliderApi("main");

  return (
    <Slider
      data={sliders.map((item, index) => (
        <Image
          key={index}
          src={item.imageURL}
          alt={`Banner #${index + 1} de la pagina web`}
          classNameDiv="p-0"
          classNameImg="w-100"
        ></Image>
      ))}
      id="slider-banner-informate"
      classItems="w-100"
    />
  );
};

const SliderServices = () => {
  const data = useSliderApi("servicios");

  let services = data.map((item) => (
    <div key={item.id} className="">
      <a
        href={item.destinationURL}
        style={{ textDecoration: "none" }}
        className="text-main "
      >
        <div className="footer-link ">
          <img height="120px" src={item.imageURL} alt="..." />
        </div>
        <p className="pt-3">
          <b>{item.name}</b>
          <br />
          <span>{item.description}</span>
        </p>
      </a>
    </div>
  ));

  return (
    <Carousel
      responsive={responsive}
      className="text-center py-4"
      infinite={false}
      autoPlay={false}
      shouldResetAutoplay={false}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {services}
    </Carousel>
  );
};

//#region Custom for Carrouselll
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

//#region News

const MainNew = (props) => {
  return (
    <div className="px-3 pb-3 pt-4">
      <Image
        classNameImg="rounded-2"
        src={props.ImgSrc}
        alt="Noticia más reciente"
      />

      <h5 className="text-main py-3 mb-0 fs-responsive-l">{props.title}</h5>
      <p className="text-main fs-responsive-s ">{props.description}</p>
      <br />

      <div className="row justify-content-between">
        <div className="col-5">
          <i className="fa-regular fa-clock" />
          <span>{" " + props.date}</span>
        </div>
        <div className="col-6">
          <ButtonCAR>
            leer mas <i className="fa-solid fa-circle-plus" />
          </ButtonCAR>
        </div>
      </div>
    </div>
  );
};

const New = (props) => {
  return (
    <div className="row border-end-0 border-start-0 border-top-0 border pt-4 pb-3">
      <Image
        classNameDiv="col-4 px-1"
        classNameImg="rounded-2"
        src={props.ImgSrc}
        alt="Noticia de la pagina web"
      />

      <div className="col-8">
        <h6 className="fs-responsive-m">{props.title}</h6>
        <p className="fs-responsive-s">{props.description}</p>
        <br />
        <div className="row justify-content-between">
          <div className="col-5">
            <i className="fa-regular fa-clock" />

            <span>{" " + props.date}</span>
          </div>
          <div className="col-6">
            <ButtonCAR>
              leer mas <i className="fa-solid fa-circle-plus" />
            </ButtonCAR>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCAR = () => {
  const data = useNewsApi();
  const news2 = data.map((item, index) => {
    if (index === 0) {
      return (
        <MainNew
          key={item.id}
          title={item.name}
          description={item.description}
          ImgSrc={item.imageUrl}
          date={item.date}
        />
      );
    } else {
      return (
        <New
          key={item.id}
          title={item.name}
          description={item.description}
          ImgSrc={item.imageUrl}
          date={item.date}
        />
      );
    }
  });
  let mainNew = news2.slice(0, 1);
  let news = news2.slice(1);

  return (
    <div className="row justify-content-center pb-0">
      <TitleCar>
        <b>Noticias</b> CAR
      </TitleCar>
      <div className="col-8 col-lg-5">{mainNew}</div>
      <div className="col-12 col-lg-7">{news}</div>
    </div>
  );
};
// #endregion

//#region Counter trees
const DigitCounterTree = (props) => {
  return (
    <span className="bg-white text-main fs-responsive-xl rounded-3 px-2 mx-1  ">
      <b>{props.number}</b>
    </span>
  );
};

const CounterTrees = () => {
  const counterTree = useCounterTreeApi();

  let arrayNumberTrees = Array.from(String(counterTree));
  let arrarrayDigits = arrayNumberTrees.map((item, index) => (
    <DigitCounterTree key={index} number={item} />
  ));

  return (
    <div className="row justify-content-center bg-counter-trees">
      <div className="col-8 d-flex justify-content-center py-3 align-items-center">
        <span className="text-white fs-responsive-l f-antipasto fw-bold">
          Ya son
          <br />
          más de:
        </span>
        <span className="text-white fs-responsive-l  px-3">
          {arrarrayDigits}
        </span>
        <span className="text-white fs-responsive-l f-antipasto fw-bold">
          árboles <br />
          sembrados
        </span>
      </div>
    </div>
  );
};
//#endregion

//#region micrositios
const MicroSitio = (props) => {
  return (
    <div className="col-4 mx-0 px-1 py-2">
      <a className="text-decoration-none" href={props.link}>
        <img
          className="img-fluid rounded-top"
          src={props.imgSrc}
          alt={props.name}
        />

        <div
          id="text-micrositios"
          className="text-micrositios ps-2 fs-responsive-xs position-relative top-n20px bg-black-op text-white"
          style={props.styles}
        >
          <b>{props.name}</b>
        </div>
      </a>
    </div>
  );
};

//#region Custom for Carrouselll Micrositos
const responsiveCarrouselMicrositios = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrowCarrouselMicrositos = ({ onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ right: "5%", bottom: "90%", zIndex: "1" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-derecha.png")} alt="<" />
    </button>
  );
};

const CustomLeftArrowCarrouselMicrositos = ({ onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ right: "12%", bottom: "90%", zIndex: "1" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-izquierda.png")} alt="<" />
    </button>
  );
};
//#endregion

const MicrositiosGroup = () => {
  const data = useSliderApi("micrositios");
  const microSitios = data.map((item, index) => {
    return (
      <MicroSitio
        key={item.id}
        name={item.name}
        imgSrc={item.imageURL}
        link={item.destinationURL}
        styles={{ top: "-18px" }}
      ></MicroSitio>
    );
  });

  let micrositiosContainer = [];

  let i = 0;
  let currentContainer = 0;
  micrositiosContainer[0] = [];
  for (let micrositio of microSitios) {
    if (i % 6 === 0 && i !== 0) {
      currentContainer++;
      micrositiosContainer[currentContainer] = [];
    }
    micrositiosContainer[currentContainer].push(micrositio);
    i++;
  }

  let micrositiosContainers = micrositiosContainer.map((item, index) => (
    <div key={index} className="mx-2 my-0 row ">
      {item}
    </div>
  ));

  return (
    <div className="ms-0 me-0 pe-0 row position-relative">
      <h4 className="position-absolute text-main col-12 rounded-car py-2 mt-4 fs-responsive-l f-antipasto">
        <b>Micrositios</b> CAR
      </h4>

      <Carousel
        responsive={responsiveCarrouselMicrositios}
        className="px-0 pt-5 mt-4"
        infinite={true}
        autoPlay={false}
        shouldResetAutoplay={false}
        customRightArrow={<CustomRightArrowCarrouselMicrositos />}
        customLeftArrow={<CustomLeftArrowCarrouselMicrositos />}
      >
        {micrositiosContainers}
      </Carousel>
    </div>
  );
};

//#endregion

const BoletinNewsCar = (props) => {
  return (
    <div className="ms-0 me-0 pe-0 row ">
      <h4 className="text-main col-12 rounded-car py-2 mt-4 fs-responsive-l f-antipasto">
        <b>Boletín</b> NewsCAR
      </h4>
      <div className="col-12 " />
      <Image classNameImg="pt-2" src={images(props.imgSrc)} alt="newsCar" />
      <button className="btn border border-success my-2 text-main">
        <b>Ver la edición más reciente</b>
      </button>
      <button className="btn my-2 text-main bg-acua text-light">
        <img width="40px" src={icons("./sucribirse.png")} alt="..." />{" "}
        <b>Suscribase al newsCAR</b>
      </button>
    </div>
  );
};

//#region SpecialsCar
const responsiveSpecialsCar = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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

const RightArrowSpecialsCAR = ({ onClick, changeIndex }) => {
  function handleClick() {
    onClick();
    changeIndex();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ right: "38%", top: "73%", zIndex: "1" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-derecha.png")} alt="<" />
    </button>
  );
};

const LeftArrowSpecialsCAR = ({ onClick, changeIndex }) => {
  function handleClick() {
    onClick();
    changeIndex();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      style={{ left: "56%", top: "73%", zIndex: "1" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-izquierda.png")} alt="<" />
    </button>
  );
};

const SpecialCar = (props) => {
  return (
    <>
      <div className="px-1">
        <Image
          classNameDiv="position-relative"
          src={props.imgSrc}
          alt="Especial CAR"
        />
      </div>
    </>
  );
};

const SpecialsCar = () => {
  const [index, setIndex] = useState(1);
  const data = useSliderApi("especialesCar");

  let texts = data.map((item, index) => (
    <p key={index} className=" f-antipasto text-acua fs-responsive-m">
      <b>{item.name}</b>
      <br />
      {item.description}
    </p>
  ));

  const changeIndexUp = () => {
    if (index < data.length - 1) {
      let newIndex = index + 1;
      setIndex(newIndex);
    } else {
      setIndex(0);
    }
  };

  const changeIndexDown = () => {
    if (index > 0) {
      let newIndex = index - 1;
      setIndex(newIndex);
    } else {
      setIndex(data.length - 1);
    }
  };

  const inner = data.map((item) => (
    <SpecialCar
      key={item.id}
      title={item.name}
      imgSrc={item.imageURL}
      link={item.destinationURL}
    />
  ));

  return (
    <div className="row justify-content-center pt-4 mb-4 position-relative">
      <TitleCar title={"Especiales CAR"} type2 />

      <div className="col-12">
        <Carousel
          responsive={responsiveSpecialsCar}
          className="text-center py-4"
          infinite={true}
          autoPlay={false}
          shouldResetAutoplay={false}
          customRightArrow={
            <RightArrowSpecialsCAR changeIndex={changeIndexUp} />
          }
          customLeftArrow={
            <LeftArrowSpecialsCAR changeIndex={changeIndexDown} />
          }
        >
          {inner}
        </Carousel>
      </div>
      <div className="position-absolute top-75  d-flex flex-column rounded-3 bg-white px-4 w-25 shadow border py-2 ">
        {texts[index]}
        <button className="border rounded-2 bg-green-f text-light me-5 ">
          <i className="fa-solid fa-eye"></i> <b>Ver especial</b>
        </button>
      </div>
    </div>
  );
};

//#endregion

//#region InteresLink
const InteresLink = (props) => {
  return (
    <div className="col-3 d-flex align-items-center">
      <a href={props.link}>
        <Image src={props.imgSrc} alt="Link de interes" />
      </a>
    </div>
  );
};

const InteresLinks = () => {
  const data = useSliderApi("enlacesInteres");

  const links = data.map((item) => (
    <InteresLink
      key={item.id}
      imgSrc={item.imageURL}
      link={item.destinationURL}
    />
  ));

  return (
    <div className="row justify-content-center pt-4">
      <TitleCar title={"Enlaces de interés CAR"} />
      <div className="row col-10 py-3">{links}</div>
    </div>
  );
};
//#endregion

const HomePage = () => {
  return (
    <DefaultLayout>
      <MainBanner />
      <div className="row justify-content-center ">
        <section className="row col-11 col-lg-9 my-4 px-0">
          <SliderServices />
          <NewsCAR />
        </section>
        <CounterTrees />
        <section className="row col-11 col-lg-9 my-4 px-0">
          <div className=" col-8">
            <MicrositiosGroup />
          </div>
          <div className="col-4">
            <BoletinNewsCar imgSrc="./micrositios/newsCar.png" />
          </div>
          <div className="col-12">
            <SpecialsCar />

            <InteresLinks />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
