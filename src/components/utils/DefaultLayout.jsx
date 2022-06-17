import React from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "./StickyMenu";

export const DefaultLayout = (props) => {
  return (
    <div
      className={
        "container-fluid px-0 d-flex flex-column justify-content-between " +
        props.className
      }
    >
      <Header />
      {props.noMenu ? <></> : <StickyMenu />}
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
