import React from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "../utils/StickyMenu";

const handleIncreaseFontSize = () => {
  const fsXSmall = document.querySelectorAll(".fs-responsive-xs");
  const fsSmall = document.querySelectorAll(".fs-responsive-s");
  const fsMedium = document.querySelectorAll(".fs-responsive-m");
  const fsLarge = document.querySelectorAll(".fs-responsive-l");

  fsXSmall.forEach((element) => {
    element.classList.remove("fs-responsive-xs");
    element.classList.add("fs-responsive-s");
  });

  fsSmall.forEach((element) => {
    element.classList.remove("fs-responsive-s");
    element.classList.add("fs-responsive-m");
  });

  fsMedium.forEach((element) => {
    element.classList.remove("fs-responsive-m");
    element.classList.add("fs-responsive-l");
  });

  fsLarge.forEach((element) => {
    element.classList.remove("fs-responsive-l");
    element.classList.add("fs-responsive-xl");
  });
};

const handleDecreaseFontSize = () => {
  const fsSmall = document.querySelectorAll(".fs-responsive-s");
  const fsMedium = document.querySelectorAll(".fs-responsive-m");
  const fsLarge = document.querySelectorAll(".fs-responsive-l");
  const fsXLarge = document.querySelectorAll(".fs-responsive-xl");

  fsSmall.forEach((element) => {
    element.classList.remove("fs-responsive-s");
    element.classList.add("fs-responsive-xs");
  });

  fsMedium.forEach((element) => {
    element.classList.remove("fs-responsive-m");
    element.classList.add("fs-responsive-s");
  });

  fsLarge.forEach((element) => {
    element.classList.remove("fs-responsive-l");
    element.classList.add("fs-responsive-m");
  });

  fsXLarge.forEach((element) => {
    element.classList.remove("fs-responsive-xl");
    element.classList.add("fs-responsive-l");
  });
};

const LeftMenu = () => {
  return (
    <div style={styles.leftMenu}>
      <div style={styles.btnLeftMenu}>
        <i className="fa-solid fa-circle-half-stroke"></i>
      </div>
      <div style={styles.btnLeftMenu}>
        <b role="button" onClick={handleIncreaseFontSize}>
          A+
        </b>
      </div>
      <div style={styles.btnLeftMenu}>
        <b role="button" onClick={handleDecreaseFontSize}>
          A-
        </b>
      </div>
    </div>
  );
};

export const DefaultLayout = (props) => {
  return (
    <div
      className={
        "container-fluid px-0 d-flex flex-column justify-content-between position-relative " +
        props.className
      }
    >
      <Header
        handleIncreaseFontSize={handleIncreaseFontSize}
        handleDecreaseFontSize={handleDecreaseFontSize}
      />
      <LeftMenu />
      {props.noMenu ? <></> : <StickyMenu />}
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;

const styles = {
  leftMenu: {
    color: "#fff",
    position: "fixed",
    backgroundColor: "#00A19C",
    right: "5px",
    top: "50vh",
    zIndex: 1000,
    borderRadius: "10px",
  },

  btnLeftMenu: {
    backgroundColor: "#fff",
    color: "#017185",
    borderRadius: "10px",
    padding: "8px",
    margin: "18px 15px",
  },
};
