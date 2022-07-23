import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../config";
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
