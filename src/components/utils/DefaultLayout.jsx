import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import StickyMenu from "./StickyMenu";
import { Menu } from "./MenuActions";
import { BaseUrl } from "../../config.js";

export const DefaultLayout = (props) => {
  const [subMenus, setSubMenus] = useState([]);

  let menuActions = new Menu(BaseUrl + "/api/submenu");
  useEffect(() => {
    menuActions.getAll().then((data) => {
      setSubMenus(data);
    });
  }, []);

  return (
    <div
      className={
        "container-fluid px-0 d-flex flex-column justify-content-between " +
        props.className
      }
    >
      <Header />
      {props.noMenu ? (
        <></>
      ) : subMenus ? (
        <StickyMenu items={subMenus} />
      ) : (
        <></>
      )}
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
