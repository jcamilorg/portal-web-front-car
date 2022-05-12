import React from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

export const DefaultLayout = (props) => {
  return (
    <div
      className={
        "container-fluid px-0 d-flex flex-column justify-content-between " +
        props.className
      }
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
