import React from "react";
import { Outlet } from "react-router-dom";
import DefaultLayout from "../../layouts/Default";

export default function Nosotros() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
