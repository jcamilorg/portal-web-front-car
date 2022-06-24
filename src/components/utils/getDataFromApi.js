import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../config";

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
