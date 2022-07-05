import React from "react";
import Layout from "./Layout";

export default function Noticias({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Banner_Noticias_WedJun29182337COT2022.png&mimetype=image/png"
      }
    >
      <div>Noticias</div>
    </Layout>
  );
}
