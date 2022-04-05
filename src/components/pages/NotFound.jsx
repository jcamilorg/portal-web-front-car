import React from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

export default function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Header />
      <h1 className="container">
        <b>404</b>, no encontramos la pagina que buscas
      </h1>
      <Footer />
    </div>
  );
}
