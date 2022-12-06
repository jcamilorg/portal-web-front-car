import React, { useState, useEffect } from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../components/TitleCar";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import ButtonCAR from "../../components/ButtonCAR";
import Image from "../../components/Image";
import {
  useNewsCARApi,
  getSearchNewsCARApi,
} from "../../components/getDataFromApi";
import LinkGeneral from "../../components/LinkGeneral";

const Accordion = styled.div`
  padding: 1rem 0;

  .Collapsible {
    padding: 0.5rem 0;
  }

  .Collapsible__trigger {
    padding: 0.4rem 0 0.4rem 0.7rem;
    display: block;
    border-bottom: 2px solid #89d335;
  }

  .Collapsible__trigger b {
    padding-left: 0.7rem;
    color: #006e95;
    font-weight: 600;
  }

  .Collapsible__trigger i {
    color: #89d335;
  }

  .is-open i {
    transform: rotate(90deg);
  }
`;

const ContainerSearchBox = styled.div`
  text-align: center;
  padding: 40px 10%;

  .title {
    display: inline-block;
    background-color: #006e95;
    color: #fff;
    text-align: center;
    border-radius: 10px 10px 0 0;
    margin: 0;
    padding: 0 40px;
  }

  .container-filters {
    color: #006e95;
    font-size: 20px;
    background-color: #eeeeee;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
  }

  .susbcription {
    color: #fff;
    background-color: #9fe047;
    padding: 5px;
    border-radius: 10px;
  }
  .tematica-title {
    padding: 10px 0;
    margin: 0;
    color: #000;
    text-align: left;
  }
  .filtrar {
    margin: 20px 0 10px 0;
  }

  .search-box {
    display: block;
    width: 100%;
    font-size: 16px;
  }
`;

const ContainerRecentNewsCAR = styled.div`
  padding: 40px 40px;

  .news-car {
    color: #888;
    font-size: 14px;
    font-weight: bold;
  }

  .edition {
    color: #006e95;
    font-weight: bold;
    font-size: 16px;
  }

  .date {
    font-size: 12px;
    color: #888;
  }

  i {
    color: #006e95;
  }
  hr {
    margin: 10px 0 5px 0;
  }
  .size {
    font-size: 8px;
  }
`;

const SearchBox = ({ handleSearch }: any) => (
  <ContainerSearchBox>
    <div className="container-filters">
      <b className="f-antipasto-bold susbcription">Suscribase al newsCAR</b>
      <br />
      <hr />
      <b className="f-antipasto-bold title">Filtrar por</b>

      <h5 className="f-antipasto-bold tematica-title">Fecha de publicación</h5>

      <input
        id="yearMonth"
        type="text"
        className="px-2 py-0 my-0 w-100"
        placeholder="mes / año"
        onClick={(e: any) => (e.target.type = "month")}
      />

      <ButtonCAR className="filtrar" onClick={handleSearch} href={undefined}>
        Buscar
      </ButtonCAR>
    </div>
  </ContainerSearchBox>
);

const RecentNewsCar = ({ edicion, date, weight, href }: any) => (
  <ContainerRecentNewsCAR className="col-4">
    <LinkGeneral href={href}>
      <Image
        src={"/assets/img//newsCarPortada.png"}
        classNameDiv={undefined}
        classNameImg={undefined}
        alt={"news car"}
      ></Image>
      <i className="fa-solid fa-file-pdf fs-1"></i>
      <hr />
      <div className="news-car">NewsCAR</div>
      <div className="edition">Edición {edicion}</div>
      <div className="date">{date}</div>
      <div className="size text-acua">{weight}</div>
    </LinkGeneral>
  </ContainerRecentNewsCAR>
);

const NewsCARItem = ({ edicion, date, weight, href }: any) => (
  <ContainerRecentNewsCAR className="col-3 py-2">
    <hr />
    <LinkGeneral href={href}>
      <div className="row ">
        <div className="col-2 d-flex flex-column justify-content-center">
          <i className="fa-solid fa-file-pdf fs-2"></i>
          <div className="size text-main"> {weight}</div>
        </div>
        <div className="col-10">
          <div className="news-car">NewsCAR</div>
          <div className="edition">Edición {edicion}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </LinkGeneral>
  </ContainerRecentNewsCAR>
);

const CollapsibleHeader = ({ title }: any) => (
  <>
    <i className="fa-solid fa-caret-right"></i>
    <b className="fs-responsive-m">{title}</b>
  </>
);

function getWeight(number: number) {
  let weight = "";
  if (number > 1000000) {
    weight = (number / 1000000).toFixed(2) + "Mb";
  } else if (number > 1000) {
    weight = (number / 1000).toFixed(2) + "Kb";
  } else {
    weight = number + "b";
  }
  return weight;
}

function organizeData(data: any) {
  let newsCarData: any = {};
  for (let newCar of data) {
    try {
      let date = newCar.date.split("-");
      let year = date[0];
      let month = date[1];
      let day = date[2];
      if (!newsCarData[year]) {
        newsCarData[year] = {};
      }
      if (!newsCarData[year][month]) {
        newsCarData[year][month] = [newCar];
      } else {
        newsCarData[year][month].push(newCar);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return newsCarData;
}

function toMonthName(number: any) {
  const date = new Date();
  date.setMonth(number - 1);

  let str = date.toLocaleString("es", {
    month: "long",
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createCollapsible(data: any) {
  let collapsibles = [];
  let months = [];
  let items = [];
  try {
    for (let year of Object.keys(data).sort().reverse()) {
      for (let month of Object.keys(data[year]).sort().reverse()) {
        for (let item of data[year][month]) {
          items.push(
            <NewsCARItem
              date={item.date}
              edicion={item.editionNumber}
              weight={getWeight(item.pdfWeight)}
              href={item.pdfUrl}
            />
          );
        }
        months.push(
          <div className="px-3">
            <Collapsible
              transitionTime={400}
              trigger={<CollapsibleHeader title={toMonthName(month)} />}
            >
              <div className="row">{items}</div>
            </Collapsible>
          </div>
        );
        items = [];
      }
      collapsibles.push(
        <Collapsible
          transitionTime={400}
          trigger={<CollapsibleHeader title={year} />}
        >
          {months}
        </Collapsible>
      );
      months = [];
    }
    return collapsibles;
  } catch (error) {
    console.error(error);
  }
}

function createRecentNewsCAR(data: any) {
  try {
    let recentItems = data.slice(0, 3);
    recentItems = recentItems.map((item: any, index: number) => (
      <RecentNewsCar
        key={index}
        edicion={item.editionNumber}
        date={item.date}
        weight={getWeight(item.pdfWeight)}
        href={item.pdfUrl}
      />
    ));
    return recentItems;
  } catch (e) {
    console.error(e);
  }
}

export default function NewsCAR() {
  const [newsCAR_state, setNewsCar_state] = useState("");
  const newsCAR = useNewsCARApi();

  const handleSearch = () => {
    let $yearMonth = document.querySelector("#yearMonth") as HTMLInputElement;
    getSearchNewsCARApi($yearMonth?.value).then((data) => {
      setNewsCar_state(data);
    });
  };

  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_NewsCAR_WedJun29182518COT2022.png&mimetype=image/pngx"
      }
    >
      <TitleCar title={undefined} type2={undefined}>
        <b>Boletín News Car</b>
      </TitleCar>
      <div className="row justify-content-center">
        <div className="col-4">
          <SearchBox handleSearch={handleSearch} />
        </div>
        <div className="row col-8">
          {createRecentNewsCAR(newsCAR_state || newsCAR)}
        </div>
        <TitleCar title={undefined} type2={undefined}>
          <b>Todas las ediciones</b>
        </TitleCar>
        <div className="text-center text-main py-2">
          Descarga aquí en formato pdf
        </div>
        <Accordion>
          {createCollapsible(organizeData(newsCAR_state || newsCAR))}
        </Accordion>
      </div>
    </Layout>
  );
}
