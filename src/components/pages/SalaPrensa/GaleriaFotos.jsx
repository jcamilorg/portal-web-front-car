import React, { useState } from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import Image from "../../utils/Image";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Carousel from "react-multi-carousel";
const icons = require.context("../../../assets/icons/", true);

const ContainerImage = styled.div`
  position: relative;
  padding: 0px;

  .label {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-between;
    background-color: #017185;
    background: linear-gradient(
      90deg,
      rgba(1, 113, 133, 1) 0%,
      rgba(1, 113, 133, 0) 100%
    );
    padding: 10px;
    font-size: 16px;
    color: #fff;
    z-index: 1;
    bottom: 0px;
    .date {
      font-size: 12px;
    }
  }
  .icon {
    font-size: 33px;
  }
  .heart-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    margin: 15px;
    font-size: 15px;
    color: #fff;
    background-color: #017185;
    border-radius: 50%;
  }
`;

const ContainerGallery = styled.div`
  width: 40rem;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 30px 40px 30px;
  z-index: 1000;
`;

const GaleryItem = () => (
  <div>
    <Image
      classNameImg="rounded"
      src="https://img.freepik.com/foto-gratis/amor-romance-perforado-corazon-papel_53876-87.jpg?w=2000"
      alt="imagen"
    ></Image>
  </div>
);

//#region Custom for Carrouselll
const responsive = {
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

const Galery = () => {
  return (
    <ContainerGallery>
      <TitleCar>Jornada educativa</TitleCar>
      <i className="text-main fs-responsive-xs">16-06-2022</i>
      <Carousel
        responsive={responsive}
        className="text-center py-4"
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {[<GaleryItem />, <GaleryItem />]}
      </Carousel>
    </ContainerGallery>
  );
};

const Modal = ({ open, onClose }) => (
  <Popup
    open={open}
    onClose={onClose}
    modal
    closeOnDocumentClick
    overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
  >
    <Galery />
  </Popup>
);

const ImagesContainer = ({ title, date }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="col-4 my-3 " r>
        <ContainerImage role="button" onClick={() => setOpen((o) => !o)}>
          <Image
            src="https://img.freepik.com/foto-gratis/amor-romance-perforado-corazon-papel_53876-87.jpg?w=2000"
            alt="imagen"
          ></Image>
          <div className="label">
            <div className="title col-6">
              <b>{title}</b>
              <br />
              <span className="date">{date}</span>
            </div>
            <div className="icon">
              <i class="fa-regular fa-images"></i>
            </div>
          </div>
          <i class="fa-solid fa-heart heart-icon"></i>
        </ContainerImage>
      </div>
      <Modal open={open} onClose={closeModal} />
    </>
  );
};

export default function GaleriaFotos({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Galeria_de_fotos_WedJun29183235COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>Eventos CAR</TitleCar>
      <br />
      <div className="row">
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
        <ImagesContainer title="Jornada educativa" date="16-06-2022" />
      </div>
    </Layout>
  );
}
