import React from "react";
import DefaultLayout from "../utils/DefaultLayout";

export default function NotFoundPage() {
  return (
    <DefaultLayout className="vh-100">
      <h1 className="container">
        <b>404</b>, no encontramos la pagina que buscas
      </h1>
    </DefaultLayout>
  );
}
