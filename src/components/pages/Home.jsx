import React, { Component } from "react";
//Components
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Slider from "../utils/Slider";

import Carousel from "react-multi-carousel";
import TitleCar from "../utils/TitleCar";
// Functions
import getData from "../utils/getData";
import "react-multi-carousel/lib/styles.css";

// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
const icons = require.context("../../assets/icons/", true);
//Leectura de datos fetch ------------------------------------------------------------------
let urlData = "../data.json";

// Custom for Carrouselll---------
const responsive = {
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
//----------------------------------
const BtnNews = () => {
  return (
    <div className="Btn-News type1 text-light text-end pe-2 fs-responsive-xs fw-bold position-relative  d-flex justify-content-between align-items-center">
      <div className="Btn-News type2">
        <div className="Btn-News type3"></div>
      </div>
      <div>
        leer mas <i className="fa-solid fa-circle-plus"></i>
      </div>
    </div>
  );
};

const MainNew = (props) => {
  return (
    <div className="px-3 pb-3 pt-4">
      <img
        className="img-fluid rounded-2"
        src={images(props.ImgSrc)}
        alt="Noticias"
      />
      <h5 className="text-main py-3 mb-0 fs-responsive-l">{props.title}</h5>
      <p className="text-main fs-responsive-s ">{props.description}</p>
      <br />
      <i class="fa-regular fa-clock"></i>
      <span>{" " + props.date}</span>
      <BtnNews />
    </div>
  );
};

const New = (props) => {
  return (
    <div className="row border-end-0 border-start-0 border-top-0 border pt-4 pb-3">
      <div className="col-4 px-1">
        <img
          className="img-fluid rounded-2"
          src={images(props.ImgSrc)}
          alt="Noticias"
        />
      </div>
      <div className="col-8">
        <h6 className="fs-responsive-m">{props.title}</h6>
        <p className="fs-responsive-s">{props.description}</p>
        <br />
        <i class="fa-regular fa-clock"></i>
        <span>{" " + props.date}</span>
        <BtnNews />
      </div>
    </div>
  );
};

const NewsCAR = (props) => {
  return (
    <div className="row justify-content-center pb-0">
      <TitleCar title={"Noticias CAR"} />
      <div className="col-8 col-lg-5">{props.mainNew}</div>
      <div className="col-12 col-lg-7">{props.news}</div>
    </div>
  );
};

const DigitCounterTree = (props) => {
  return (
    <span className="bg-white text-main fs-responsive-xl rounded-3 px-2 mx-1 ">
      <b>{props.number}</b>
    </span>
  );
};

const CounterTrees = (props) => {
  let arrayNumberTrees = Array.from(String(props.numberTrees));
  let arrarrayDigits = arrayNumberTrees.map((item, index) => (
    <DigitCounterTree key={index} number={item} />
  ));

  return (
    <div className="row justify-content-center bg-counter-trees">
      <div className="col-8 d-flex justify-content-center py-3 align-items-center">
        <b className="text-white fs-responsive-l">
          Ya son
          <br />
          más de:
        </b>
        <span className="text-white fs-responsive-l  px-3">
          {arrarrayDigits}
        </span>
        <b className="text-white fs-responsive-l">
          árboles <br />
          sembrados
        </b>
      </div>
    </div>
  );
};

const MicroSitio = (props) => {
  return (
    <div className="col-4 mx-0 px-1 py-2">
      <a className="text-decoration-none" href={props.link}>
        <img
          className="img-fluid rounded-top"
          src={images(props.imgSrc)}
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

const MicrositiosGroup = (props) => {
  return (
    <div className="ms-0 me-0 pe-0 row ">
      <h4 className="text-main col-12 rounded-car py-2 mt-4 fs-responsive-l">
        <b>Micrositios</b> Car
      </h4>
      <div className="" />
      {props.children}
    </div>
  );
};

const BoletinNewsCar = (props) => {
  return (
    <div className="ms-0 me-0 pe-0 row ">
      <h4 className="text-main col-12 rounded-car py-2 mt-4 fs-responsive-l">
        <b>Boletín</b> NewsCAR
      </h4>
      <div className="col-12 " />
      {props.children}
    </div>
  );
};

const SpecialsCar = (props) => {
  let texts = props.data.map((item) => (
    <p>
      <b>{item[0]}</b>
      <br />
      {item[1]}
    </p>
  ));

  return (
    <div className="row justify-content-center pt-4 mb-4 position-relative">
      <TitleCar title={"Especiales CAR"} type2 />

      <div className="col-12">{props.children}</div>
      <div className="position-absolute top-75  d-flex flex-column rounded-3 bg-white px-4 w-25 shadow border py-2 z-index">
        {texts[props.index]}
        <button className="border rounded-2 bg-green-f text-light me-5 ">
          <i class="fa-solid fa-eye"></i> <b>Ver especial</b>
        </button>
      </div>
    </div>
  );
};

const SpecialCar = (props) => {
  return (
    <div className="d-flex flex-column mx-4 h-100 px-4 py-3 rounded shadow border bg-white">
      <a className="text-decoration-none " href={props.link}>
        <img className="img-fluid" src={images(props.imgSrc)} alt="Especial" />
        <h5 className="text-main">{props.title}</h5>
        <span className="fs-responsive-s text-acua">
          <b>ver special</b>
        </span>
      </a>
    </div>
  );
};

const SpecialCar2 = (props) => {
  return (
    <>
      <div className="px-1">
        <img
          className="img-fluid position-relative"
          src={images(props.imgSrc)}
          alt="Especial"
        />
      </div>
    </>
  );
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
      style={{ right: "38%", top: "73%", zIndex: "3000" }}
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
      style={{ left: "56%", top: "73%", zIndex: "3000" }}
      className="position-absolute bg-transparent border-0"
    >
      <img src={icons("./btn-slider-izquierda.png")} alt="<" />
    </button>
  );
};

const InteresLink = (props) => {
  return (
    <div className="col-3 d-flex align-items-center">
      <a href={props.link}>
        <img
          className="img-fluid "
          src={images(props.imgSrc)}
          alt="Link de interes"
        />
      </a>
    </div>
  );
};

const InteresLinks = (props) => {
  return (
    <div className="row justify-content-center pt-4">
      <TitleCar title={"Enlaces de interés CAR"} />
      <div className="row col-10 py-3">{props.children}</div>
    </div>
  );
};

class HomePage extends Component {
  // Cargar datos de la bd al home
  state = {
    sliderImages: [],
    menuItems: [],
    sliderServices: [],
    newsCar: [],
    mainNew: [],
    microSitios: [],
    specialCarTitles: [],
    specialsCar: [],
    actualSpecialCar: 1,
    interestLinks: [],
  };

  componentDidMount() {
    getData(urlData).then((datajson) => {
      this.setState(() => {
        let sliderServices = datajson.sliderServicesImg.map((item, index) => (
          <div key={index}>
            <a
              href={item.link}
              style={{ textDecoration: "none" }}
              className="text-main"
            >
              <img height="120px" src={icons(item.ImgSrc)} alt="..." />
              <p>
                <b>{item.bold}</b>
                <br />
                <span>{item.normal}</span>
              </p>
            </a>
          </div>
        ));
        let sliderImages = datajson.sliderImages.map((item, index) => {
          try {
            return (
              <img
                key={index}
                className="w-100"
                src={images(item)}
                alt="Slider"
              />
            );
          } catch (e) {
            return <p>{e.message}</p>;
          }
        });
        let news = datajson.newsCARInfo.news.map((item, index) => (
          <New
            key={index}
            title={item.title}
            description={item.description}
            ImgSrc={item.ImgSrc}
            date={item.date}
          />
        ));
        let microSitios = datajson.microSitios.map((item, index) => {
          return (
            <MicroSitio
              key={index}
              name={item.name}
              imgSrc={item.imgSrc}
              link={item.link}
              styles={{ top: "-18px" }}
            ></MicroSitio>
          );
        });
        let specialCarTitles = [];
        let specialsCar = datajson.specialsCar.map((item, index) => {
          specialCarTitles.push([item.title[0], item.title[1]]);

          return (
            <SpecialCar2
              title={item.title}
              imgSrc={item.imgSrc}
              link={item.link}
            />
          );
        });

        let interestLinks = datajson.interestLinks.map((item, index) => (
          <InteresLink imgSrc={item.imgSrc} link={item.link} />
        ));

        console.log(microSitios);
        let mainNew = (
          <MainNew
            title={datajson.newsCARInfo.mainNew.title}
            description={datajson.newsCARInfo.mainNew.description}
            ImgSrc={datajson.newsCARInfo.mainNew.ImgSrc}
            date={datajson.newsCARInfo.mainNew.date}
          />
        );

        return {
          sliderImages: sliderImages,
          sliderServices: sliderServices,
          newsCAR: news,
          mainNew: mainNew,
          microSitios: microSitios,
          specialCarTitles: specialCarTitles,
          specialsCar: specialsCar,
          interestLinks: interestLinks,
        };
      });
    });
  }

  changeIndexUp = () => {
    this.setState(() => {
      let actualSpecialCar = this.state.actualSpecialCar;
      if (
        this.state.actualSpecialCar <
        this.state.specialCarTitles.length - 1
      ) {
        actualSpecialCar++;
      } else {
        actualSpecialCar = 0;
      }

      return {
        actualSpecialCar: actualSpecialCar,
      };
    });
  };

  changeIndexDown = () => {
    this.setState(() => {
      let actualSpecialCar = this.state.actualSpecialCar;
      if (this.state.actualSpecialCar > 0) {
        actualSpecialCar--;
      } else {
        actualSpecialCar = this.state.specialCarTitles.length - 1;
      }

      return {
        actualSpecialCar: actualSpecialCar,
      };
    });
  };

  render() {
    return (
      <div className="container-fluid px-0">
        <Header />

        <Slider
          data={this.state.sliderImages}
          id="slider-banner-informate"
          classItems="w-100"
        />

        <div className="row justify-content-center ">
          <section className="row col-11 col-lg-9 my-4 px-0">
            <Carousel
              responsive={responsive}
              className="text-center py-4"
              infinite={true}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {this.state.sliderServices}
            </Carousel>

            <NewsCAR news={this.state.newsCAR} mainNew={this.state.mainNew} />
          </section>
          <CounterTrees numberTrees="09425" />
          <section className="row col-11 col-lg-9 my-4 px-0">
            <div className=" col-8">
              <MicrositiosGroup>{this.state.microSitios}</MicrositiosGroup>
            </div>
            <div className="col-4">
              <BoletinNewsCar>
                <img
                  className="img-fluid px-0 mx-0 pt-2"
                  src={images("./micrositios/newsCar.png")}
                  alt="newsCar"
                />
                <button className="btn border border-success my-2 text-main">
                  <b>Ver la edición más reciente</b>
                </button>
                <button className="btn my-2 text-main bg-acua text-light">
                  <img width="40px" src={icons("./sucribirse.png")} alt="..." />{" "}
                  <b>Suscribase al newsCAR</b>
                </button>
              </BoletinNewsCar>
            </div>
            <div className="col-12">
              <SpecialsCar
                data={this.state.specialCarTitles}
                index={this.state.actualSpecialCar}
              >
                <Carousel
                  responsive={responsive}
                  className=" pt-4 pb-5 my-1 position-relative"
                  infinite={true}
                  autoPlay={false}
                  shouldResetAutoplay={false}
                  customRightArrow={
                    <RightArrowSpecialsCAR changeIndex={this.changeIndexUp} />
                  }
                  customLeftArrow={
                    <LeftArrowSpecialsCAR changeIndex={this.changeIndexDown} />
                  }
                >
                  {this.state.specialsCar}
                </Carousel>
              </SpecialsCar>
              <InteresLinks>{this.state.interestLinks}</InteresLinks>
            </div>
          </section>
          <img
            className="img-fluid"
            src={images("./grayTrees.png")}
            alt="grayTrees"
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
