import React from "react";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();

  const capitalize = (words) => {
    words = breadcrumb.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i]) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    return words.join(" ");
  };

  const location = router.asPath;
  let breadcrumb = location
    .toLowerCase()
    .replace("/", "Inicio | ")
    .replaceAll("-", " ")
    .replaceAll("/", " | ");

  breadcrumb = capitalize(breadcrumb);
  const breakwords = breadcrumb.split("|");

  return (
    <div className="text-black-50 py-3 fs-responsive-m">
      <span className="Breadcrumb-page-bold">{breakwords[0]}</span>

      <span className="Breadcrumb-page-light">|{breakwords[1]}</span>
    </div>
  );
};

export default Breadcrumb;
