import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

export default function NotFoundPage() {
  return (
    <DefaultLayout className="vh-100" noMenu>
      <h1 className="container">
        <b>404</b>, no encontramos la pagina que buscas
      </h1>
    </DefaultLayout>
  );
}
