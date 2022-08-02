import React, { useState, useEffect } from "react";
import { getPagineNewsApi, getSearchNewsApi } from "../../utils/getDataFromApi";
import ReactPaginate from "react-paginate";
import Layout from "./Layout";
import New from "../../utils/New";
import MainNew from "../../utils/MainNew";
import HrCAR from "../../utils/HrCAR";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonCAR from "../../utils/ButtonCAR";
const ContainerPaginate = styled.div`
  .react-paginate {
    padding: 20px 0;
    display: block;
    list-style-type: none;
    text-align: center;
    display: flex;
    justify-content: center;
    color: #006e95;
    .selected {
      color: #fff;
      background-color: #006e95;
    }

    * {
      display: inline-block;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
    }

    li {
      border: 1px solid #ccc;
    }

    .previous {
      background-color: #006e95;
      border-radius: 10px 0 0 10px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }

    .next {
      background-color: #006e95;
      border-radius: 0 10px 10px 0;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
const ContainerSearchBox = styled.div`
  text-align: center;

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

  .react-calendar {
    font-size: 14px;
    border-radius: 10px;
    margin: 0 0 20px 0;
  }

  .tematica-title {
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

const SearchBox = ({ handleSearch }) => {
  const [value, setValue] = useState(null);

  return (
    <ContainerSearchBox>
      <h4 className="f-antipasto title px-3">
        <b>Búsqueda</b> avanzada
      </h4>
      <div className="container-filters">
        <b className="f-antipasto-bold">Filtrar noticias por</b>
        <br />
        <br />
        <b className="f-antipasto-bold title">Fecha de publicación</b>
        <Calendar
          onChange={(e) => {
            console.log(e);
            setValue(e);
          }}
          value={value}
        />
        <h5 className="f-antipasto-bold tematica-title">Temática</h5>

        <input id="word" type="text" name="word" className="search-box" />
        <input id="date" type="hidden" value={value} />
        <ButtonCAR className="filtrar" onClick={handleSearch}>
          Filtrar
        </ButtonCAR>
      </div>
    </ContainerSearchBox>
  );
};

export default function Noticias({ children }) {
  const [totalPages, setTotalPages] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getPagineNewsApi(0, 3).then((res) => {
      setNews(res[0]);
      setTotalPages(res[1].totalPages);
    });
  }, []);

  let noticiasItems = news.map((newsItem, index) => {
    if (index === 0) {
      return (
        <div className="border-end-0 border-start-0 border-top-0 border">
          <MainNew
            ImgSrc={newsItem.imageUrl}
            title={newsItem.name}
            description={newsItem.description}
            date={newsItem.date}
          ></MainNew>
        </div>
      );
    } else {
      return (
        <div className="px-3 ">
          <New
            ImgSrc={newsItem.imageUrl}
            title={newsItem.name}
            description={newsItem.description}
            date={newsItem.date}
          ></New>
        </div>
      );
    }
  });

  if (noticiasItems.length <= 0) {
    noticiasItems = [
      <h3 className="text-center pt-5 mt-5">No se encontro ninguna noticia</h3>,
    ];
  }

  const handlePageChange = (event) => {
    getPagineNewsApi(event.selected, 3).then((res) => {
      setNews(res[0]);
    });
  };

  const handleSearch = () => {
    let word = document.querySelector("#word").value;
    let date = document.querySelector("#date").value;
    let dateFormat = null;
    if (date) {
      let dateArray = date.split(" ");
      let month =
        "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(dateArray[1]) / 3 + 1;
      let day = dateArray[2];
      let year = dateArray[3];
      dateFormat = `${year}-${month}-${day}`;
    }

    getSearchNewsApi(word, dateFormat).then((res) => {
      setNews(res[0]);
      setTotalPages(res[1]);
    });
  };

  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Noticias_WedJun29182337COT2022.png&mimetype=image/png"
      }
    >
      <div className="row justify-content-center">
        <div className="col-4">
          <SearchBox handleSearch={handleSearch} />
        </div>
        <div className="col-7">{noticiasItems}</div>
        <HrCAR />
        <ContainerPaginate>
          <ReactPaginate
            className="react-paginate f-antipasto-bold"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          >
            Noticias
          </ReactPaginate>
        </ContainerPaginate>
      </div>
    </Layout>
  );
}
