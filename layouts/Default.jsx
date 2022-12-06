import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMenu from "../components/StickyMenu";
import GoTopButton from "../components/GoTopButton";

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

const handleInvertColors = () => {
  const root = document.querySelectorAll("html")[0];
  const classList = root.classList;
  if (!classList.contains("negative")) {
    root.classList.add("negative");
  } else {
    root.classList.remove("negative");
  }
};

const LeftMenu = () => {
  return (
    <div style={styles.leftMenu}>
      <div
        style={styles.btnLeftMenu}
        onClick={handleInvertColors}
        role="button"
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </div>
      <div
        style={styles.btnLeftMenu}
        role="button"
        onClick={handleIncreaseFontSize}
      >
        <b>A+</b>
      </div>
      <div
        style={styles.btnLeftMenu}
        role="button"
        onClick={handleDecreaseFontSize}
      >
        <b>A-</b>
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
        handleInvertColors={handleInvertColors}
      />
      <LeftMenu />
      {props.noMenu ? <></> : <StickyMenu />}
      {props.children}
      <img
        className="img-fluid"
        src={"/assets/img//grayTrees.png"}
        alt="grayTrees"
      />
      <GoTopButton />
      <Footer />
    </div>
  );
};

export default DefaultLayout;

const styles = {
  leftMenu: {
    position: "fixed",
    color: "#fff",
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
