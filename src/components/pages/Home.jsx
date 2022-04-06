import React, { Component } from "react";
//Components
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Slider from "../utils/Slider";
import StickyMenu from "../utils/StickyMenu";
import Carousel from "react-multi-carousel";
// Functions
import getData from "../utils/getData";
import "react-multi-carousel/lib/styles.css";

// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
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
      style={{ right: "calc(4% + 1px)" }}
      className="fa-solid fa-chevron-right fs-3 position-absolute bg-transparent border-0"
    />
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
      style={{ left: "calc(4% + 1px)" }}
      className="fa-solid fa-chevron-left fs-3 position-absolute bg-transparent border-0"
    />
  );
};
//----------------------------------
const BtnNews = () => {
  return (
    <div className="Btn-News type1 text-light text-end pe-2 fs-12px fw-bold position-relative  d-flex justify-content-between align-items-center">
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
    <div className="p-3">
      <img className="img-fluid" src={images(props.ImgSrc)} alt="Noticias" />
      <h5 className="text-main pt-2 mb-1">{props.title}</h5>
      <p className="text-main fs-14px">{props.description}</p>
      <BtnNews />
    </div>
  );
};

const New = (props) => {
  return (
    <div className="row border-end-0 border-start-0 border-top-0 border-dashed border-warning py-3">
      <div className="col-3 px-1">
        <img className="img-fluid" src={images(props.ImgSrc)} alt="Noticias" />
      </div>
      <div className="col-9">
        <h6>{props.title}</h6>
        <p className="fs-14px">{props.description}</p>
        <BtnNews />
      </div>
    </div>
  );
};

const NewsCAR = (props) => {
  return (
    <div className="row justify-content-center border-end-0 border-start-0 border-bottom-0 border-dashed border-warning">
      <div className="col-12 d-flex justify-content-center ">
        <h5 className="bg-green border-warning text-white rounded-top-car d-inline-block mt-3 mb-1 px-5">
          Noticias CAR
        </h5>
      </div>
      <div className="col-12 d-flex px-0 mx-0">
        <hr className="hr-header hr-type-one bg-green " />
        <hr className="hr-header hr-type-two bg-green-f ms-1 " />
      </div>

      <div className="col-5">{props.mainNew}</div>
      <div className="col-7">
        <div className="p-3">{props.news}</div>
      </div>
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
  };

  componentDidMount() {
    getData(urlData).then((datajson) => {
      this.setState(() => {
        let sliderServices = datajson.sliderServicesImg.map((item, index) => (
          <div key={index}>
            <a href={item.link}>
              <img height="120px" src={item.ImgSrc} alt="..." />
            </a>
          </div>
        ));
        let sliderImages = datajson.sliderImages.map((item, index) => {
          try {
            return (
              <img
                key={index}
                className="img-fluid"
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
          />
        ));

        let mainNew = (
          <MainNew
            title={datajson.newsCARInfo.mainNew.title}
            description={datajson.newsCARInfo.mainNew.description}
            ImgSrc={datajson.newsCARInfo.mainNew.ImgSrc}
          />
        );

        return {
          sliderImages: sliderImages,
          sliderServices: sliderServices,
          newsCAR: news,
          mainNew: mainNew,
        };
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Slider
          classItems="py-1"
          data={this.state.sliderImages}
          id="slider-banner-informate"
        />
        <div className="row justify-content-center ">
          <StickyMenu url={urlData} />
          <section className="row col-8 my-4 px-0">
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

            <img
              className="img-fluid"
              src={images("./contadorArboles.png")}
              alt="Contador arboles"
            />
            <div className="row col-8">
              <h3>Micrositios Car</h3>
            </div>
            <div className="col-4">
              <h3>Boletín NewsCAR</h3>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
