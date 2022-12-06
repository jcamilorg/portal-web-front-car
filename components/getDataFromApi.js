import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../config";
let youTubeApiKey = "AIzaSyDaDNHM9CvIqd9Z-jPSKyH586XEU75Yyr4";

export function useSliderApi(sliderType) {
  const [sliders, setSliders] = useState([]);

  const url = BaseUrl + "/api/slider/true?state=true";
  useEffect(() => {
    async function fetchSliders() {
      const res = await axios.get(url);
      const data = res.data;
      const slidersData = data.filter(
        (item) =>
          item.sliderType.name === sliderType && item.active_title === true
      );
      setSliders(slidersData);
    }

    fetchSliders();
  }, []);

  return sliders;
}

export function useMenuApi() {
  const [subMenus, setSubMenus] = useState([]);

  const url = BaseUrl + "/api/submenu?estadoSubMenu=true&estadoItemMenu=true";

  useEffect(() => {
    async function fetchSubmenus() {
      let res = await axios.get(url);
      let data = res.data;
      const subMenusData = data.sort((a, b) => a.position - b.position);
      setSubMenus(subMenusData);
    }

    fetchSubmenus();
  }, []);

  return subMenus;
}

export function useCounterTreeApi() {
  const [counter, setCounter] = useState("");
  const id = 2;
  const url = BaseUrl + `/api/arboles?id=${id}`;

  useEffect(() => {
    async function fetchCounter() {
      let res = await axios.get(url);
      let data = res.data;
      const counterData = data.num_trees;
      setCounter(counterData);
    }

    fetchCounter();
  }, []);

  return counter;
}

const newType = {
  GeneralNew: 4,
};

const NormalNumberOfNews = 4;

export function useNewsApi(
  numberOfNews = NormalNumberOfNews,
  NewType = newType.GeneralNew
) {
  const [news, setNews] = useState([]);

  const url =
    BaseUrl + `/api/news?numItem=${numberOfNews}&idNewType=${NewType}`;
  useEffect(() => {
    async function fetchSliders() {
      const res = await axios.get(url);
      const data = res.data;
      setNews(data);
    }

    fetchSliders();
  }, []);

  return news;
}

export function useAncestralVideos(maxResults = 5) {
  const [temporadas, setTemporadas] = useState([[]]);

  useEffect(() => {
    async function fetchVideos(maxResults = 5, pageToken = null) {
      let ancestralVideosUrl;
      pageToken
        ? (ancestralVideosUrl = `https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&channelId=UCDR_Bqz6vCW535ydrXcp4oA&playlistId=PL4Hz7tdqWVVjP3MWnNzsLdwhZCj7MwBPZ&maxResults=${maxResults}&pageToken=${pageToken}&key=${youTubeApiKey}`)
        : (ancestralVideosUrl = `https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&channelId=UCDR_Bqz6vCW535ydrXcp4oA&playlistId=PL4Hz7tdqWVVjP3MWnNzsLdwhZCj7MwBPZ&maxResults=${maxResults}&key=${youTubeApiKey}`);
      const res = await axios.get(ancestralVideosUrl);
      return [
        res.data.items.reverse(),
        res.data.nextPageToken,
        Math.ceil(
          res.data.pageInfo.totalResults / res.data.pageInfo.resultsPerPage
        ),
      ];
    }

    async function main() {
      const temporadasArray = [];
      let token;
      let [items, tokenNew, numeroIteraciones] = await fetchVideos(maxResults);
      token = tokenNew;
      temporadasArray.push(items);

      for (var i = 1; i < numeroIteraciones; i++) {
        const [items, tokenNew2] = await fetchVideos(maxResults, token);
        token = tokenNew2;
        temporadasArray.unshift(items);
      }
      setTemporadas(temporadasArray);
    }

    main();
  }, []);

  return temporadas;
}

export function useMisionRescateVideos() {
  const [temporadas, setTemporadas] = useState([[]]);

  useEffect(() => {
    async function fetchVideos() {
      const TempArray = [];
      console.log("hola mundo");
      let misionVideosUrl = "/infoSeries.json";
      const res = await axios.get(misionVideosUrl);
      TempArray.push(res.data[0].items.reverse());
      setTemporadas(TempArray);
    }

    fetchVideos();
  }, []);

  return temporadas;
}

export function useGranJeroVideos() {
  const [temporadas, setTemporadas] = useState([[]]);

  const playlistIds = [
    "PLJw1v_Axtnlc0X9-663wKpTBR6CxK0bRW",
    "PLJw1v_Axtnlco5s6sjYgvRoU4g7KmzYLT",
    "PLJw1v_AxtnlfuT6cghnKsVUHypHzXAH-x",
  ];

  useEffect(() => {
    async function fetchVideos() {
      const temporadasArray = [];

      for (let idTemporada of playlistIds) {
        let url = `https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&channelId=UC8oglW3vOZU0ypk84ktFZ3Q&playlistId=${idTemporada}&maxResults=${50}&key=${youTubeApiKey}`;
        const res = await axios.get(url);
        temporadasArray.unshift(res.data.items.reverse());
      }
      temporadasArray[0] = temporadasArray[0].slice(0, 6);
      temporadasArray[1] = temporadasArray[1].slice(0, 6);
      temporadasArray[2] = temporadasArray[2].slice(0, 6);

      setTemporadas(temporadasArray);
      console.log(temporadas);
    }

    fetchVideos();
  }, []);

  return temporadas;
}

export function useHistoriasVidaVideos() {
  const [temporadas, setTemporadas] = useState([[]]);

  useEffect(() => {
    async function fetchVideos() {
      const TempArray = [];
      let historiasUrl = "/infoSeries.json";
      const res = await axios.get(historiasUrl);
      TempArray.push(res.data[1].items.reverse());
      setTemporadas(TempArray);
    }

    fetchVideos();
  }, []);

  return temporadas;
}

export function useATonoConLaCar() {
  const [temporadas, setTemporadas] = useState([[]]);

  const playlistId = "PL4Hz7tdqWVVh6B4XarQ6V000BDDLa9HFK";

  useEffect(() => {
    async function fetch() {
      let temporadasArray = [];
      let url = `https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&channelId=UCDR_Bqz6vCW535ydrXcp4oA&playlistId=${playlistId}&maxResults=${50}&key=${youTubeApiKey}`;
      const res = await axios.get(url);
      let data = res.data.items;
      temporadasArray.push(data.slice(0, 5));
      setTemporadas(temporadasArray);
    }
    fetch();
  }, []);
  return temporadas;
}

export function useCendocPodcast() {
  const [temporadas, setTemporadas] = useState([[]]);

  useEffect(() => {
    async function fetch() {
      let temporadasArray = [];
      let url = "/infoSeries.json";
      const res = await axios.get(url);
      let data = res.data[2].items;
      temporadasArray.push(data.slice(0, 5));
      setTemporadas(temporadasArray);
    }
    fetch();
  }, []);
  return temporadas;
}

export function useATonoConLaCarPodcast() {
  const [temporadas, setTemporadas] = useState([[]]);

  useEffect(() => {
    async function fetch() {
      let temporadasArray = [];
      let url = "/infoSeries.json";
      const res = await axios.get(url);
      let data = res.data[3].items;
      temporadasArray.push(data.slice(0, 5));
      setTemporadas(temporadasArray);
    }
    fetch();
  }, []);
  return temporadas;
}

export async function getPagineNewsApi(pageNumber = "0", items = 5) {
  let news = [];
  let all = {};
  let pageable = {};

  const url =
    BaseUrl +
    `/api/news?page=${pageNumber}&size=${items}&stateNew=true&stateNewType=true&idNewType=4`;

  let res = await axios.get(url);
  news = res.data.content;
  all = res.data;
  pageable = res.data.pageable;
  return [news, all, pageable];
}

export async function getSearchNewsApi(keyword = "", date = "") {
  let news = [];

  let url = "";
  if (date) {
    url =
      BaseUrl +
      `/api/news?stateNew=true&stateNewType=true&keyword=${keyword}&date=${date}`;
  } else {
    url =
      BaseUrl + `/api/news?stateNew=true&stateNewType=true&keyword=${keyword}`;
  }

  let res = await axios.get(url);
  console.log(res);
  news = res.data;
  console.log(res);
  let totalPages = parseInt(news.length / 5) + 1;
  return [news, totalPages];
}

export function useNewsCARApi() {
  const [newsCar, setNewsCar] = useState([]);

  useEffect(() => {
    async function fetch() {
      const url =
        BaseUrl + `/api/newscar?stateNewsCarType=true&stateNewsCar=true`;
      const res = await axios.get(url);
      setNewsCar(res.data);
    }

    fetch();
  }, []);
  return newsCar;
}

export async function getSearchNewsCARApi(date) {
  let newsCar = [];

  let url = BaseUrl + `/api/newscar?stateNewsCarType=true&stateNewsCar=true`;

  if (date) {
    date = date.split("-");
    let year = date[0];
    let month = date[1];

    url =
      BaseUrl +
      `/api/newscar?year=${year}&month=${month}&stateNewsCarType=true&stateNewsCar=true`;
  }

  let res = await axios.get(url);
  newsCar = res.data;
  return newsCar;
}

export function useDirectoryApi() {
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    async function fetch() {
      const url = BaseUrl + `/api/sede?stateSede=true`;
      const res = await axios.get(url);
      setDirectory(res.data);
    }

    fetch();
  }, []);

  return directory;
}

export function useGaleryApi() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    async function fetch() {
      const url = BaseUrl + `/api/gallerytype?state=true`;
      const res = await axios.get(url);
      const galeryAll = await Promise.all(
        res.data.map(async (gType) => {
          const url =
            BaseUrl + `/api/galleryimage?gallerytypeID=${gType.id}&state=true`;
          const res = await axios.get(url);
          gType.images = res.data;
          return gType;
        })
      );
      setGalery(galeryAll);
    }

    fetch();
  }, []);

  return galery;
}
