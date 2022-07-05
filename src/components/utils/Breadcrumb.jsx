import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const capitalize = (words) => {
    words = breadcrumb.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i]) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    return words.join(" ");
  };

  const location = useLocation();
  let breadcrumb = location.pathname
    .toLowerCase()
    .replace("/", "Inicio | ")
    .replaceAll("-", " ")
    .replaceAll("/", " | ");

  breadcrumb = capitalize(breadcrumb);

  return <div className="text-black-50 py-3 fs-responsive-m">{breadcrumb}</div>;
};

export default Breadcrumb;
