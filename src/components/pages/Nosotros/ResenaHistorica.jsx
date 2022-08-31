import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import Iframe from "../../utils/Iframe";
import TitleCar from "../../utils/TitleCar";
import { HrGreen } from "../../utils/HrCAR";
import styled from "styled-components";

const BtnCircleContainer = styled.div`
  display: inline-block;
  width: 180px;
  .dotted {
    border: dotted;
    border-radius: 50%;
    height: 190px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #9b9;

    .circle {
      border-radius: 50%;
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9b9;
      text-align: center;
      padding: 20px;
      div {
        color: #fff;
        font-family: antipasto;
        font-size: 24px;
      }
    }
  }

  .pdf {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: -50px;
    i {
      font-size: 55px;
    }
  }
`;

const BtnCircle = () => (
  <BtnCircleContainer>
    <div className="dotted">
      <div className="circle">
        <div>
          <b>ley 99</b> de <b>1993</b> SINA
        </div>
      </div>
    </div>

    <div className="pdf">
      <i class="fa-solid fa-file-pdf"></i>
      <span>318kb</span>
    </div>
  </BtnCircleContainer>
);

export default function ResenaHistorica({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Rese%C3%B1a_Historica_MonAug22114653COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Reseña histórica</b> CAR
      </TitleCar>
      <br />
      <div className="row fs-responsive-m text-main px-5 pb-5">
        <p>
          Desde el 31 de enero de 1961 la Corporación Autónoma Regional de
          Cundinamarca (CAR) trabaja para preservar los recursos naturales en
          104 municipios que integran la jurisdicción CAR en un territorio de
          más de 18.700 kilómetros.
        </p>
        <p>
          Durante 6 décadas la Corporación como máxima autoridad ambiental del
          centro del país ejerce control y vigilancia por la conservación del
          medio ambiente y reitera su compromiso por conservar un territorio
          ambientalmente sostenible.
        </p>
        <p>
          En esta sección encontrará información acerca de la historia de la
          entidad.
        </p>
      </div>
      <div style={{ margin: "0 15%" }} className=" pb-5">
        <Iframe
          link="https://www.youtube.com/embed/P3MY6vPdgZM"
          className="mb-3"
        ></Iframe>

        <p className="fs-responsive-m text-main">
          60 años por la vida en el territorio
        </p>
      </div>
      <HrGreen />
      <div className="row px-5 mx-5">
        <div className="col-12 col-md-6 col-xl-3">
          <BtnCircle></BtnCircle>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <BtnCircle></BtnCircle>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <BtnCircle></BtnCircle>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <BtnCircle></BtnCircle>
        </div>
      </div>
    </Layout>
  );
}