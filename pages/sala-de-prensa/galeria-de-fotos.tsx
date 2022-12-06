import React, { useState } from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../components/TitleCar";
import Image from "../../components/Image";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Carousel from "react-multi-carousel";
import { useGaleryApi } from "../../components/getDataFromApi";

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

  img {
    height: 250px;
  }
`;

const ContainerGallery = styled.div`
  width: 40rem;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 30px 40px 30px;
  z-index: 1000;
`;

const GaleryItem = ({ src }: any) => (
  <div>
    <Image
      classNameImg="rounded"
      src={src}
      alt="imagen"
      classNameDiv={undefined}
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

const CustomRightArrow = ({ onClick }: any) => {
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
      <img src={"/assets/icons/btn-slider-derecha.png"} alt="<" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick }: any) => {
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
      <img src={"/assets/icons/btn-slider-izquierda.png"} alt="<" />
    </button>
  );
};
//#endregion

const Galery = ({ title, date, images }: any) => {
  const imagesCarrousel = images.map((image: any, index: number) => (
    <GaleryItem key={index} src={image.imageUrl} />
  ));
  return (
    <ContainerGallery>
      <TitleCar title={undefined} type2={undefined}>
        {title}
      </TitleCar>
      <i className="text-main fs-responsive-xs">{date}</i>
      <Carousel
        responsive={responsive}
        className="text-center py-4"
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        customRightArrow={<CustomRightArrow onClick={undefined} />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {imagesCarrousel}
      </Carousel>
    </ContainerGallery>
  );
};

const Modal = ({ open, onClose, title, date, images }: any) => (
  <Popup
    open={open}
    onClose={onClose}
    modal
    closeOnDocumentClick
    overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
  >
    <Galery title={title} date={date} images={images} />
  </Popup>
);

const ImagesContainer = ({ title, date, images }: any) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="col-4 my-4 ">
        <ContainerImage role="button" onClick={() => setOpen((o) => !o)}>
          <Image
            src={images[0] ? images[0].imageUrl : "/assets/icons/no-image.png"}
            alt="imagen de galeria"
            classNameDiv={undefined}
            classNameImg={undefined}
          ></Image>
          <div className="label">
            <div className="title col-6">
              <b>{title}</b>
              <br />
              <span className="date">{date}</span>
            </div>
            <div className="icon">
              <i className="fa-regular fa-images"></i>
            </div>
          </div>
          <i className="fa-solid fa-heart heart-icon"></i>
        </ContainerImage>
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        images={images}
        date={date}
        title={title}
      />
    </>
  );
};

export default function GaleriaFotos() {
  const galery = useGaleryApi();
  console.log(galery);
  const galeries = galery.map((item: any, index: number) => (
    <ImagesContainer
      key={index}
      title={item.name}
      date={item.date}
      images={item.images}
    />
  ));

  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Galeria_de_fotos_WedJun29183235COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        Eventos CAR
      </TitleCar>
      <br />
      <div className="row">{galeries}</div>
    </Layout>
  );
}
