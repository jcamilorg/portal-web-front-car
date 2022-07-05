import React from "react";
import Layout from "./Layout";

export default function NewsCAR({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_NewsCAR_WedJun29182518COT2022.png&mimetype=image/pngx"
      }
    >
      <div>Series CAR</div>
    </Layout>
  );
}
