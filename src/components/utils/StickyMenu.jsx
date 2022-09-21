import React from "react";
import { Link } from "react-router-dom";
//Components
import Dropdown from "./DropdownOld";
//functions
import { useMenuApi } from "./getDataFromApi";
//Gif
import GifCompanion from "./GifCompanion";
import styled from "styled-components";
import Image from "./Image";

const GifIconStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 220px;
`;

const GifIcon = ({ src }) => (
  <GifIconStyle>
    <Image src={src} />
  </GifIconStyle>
);

const StickyMenu = () => {
  const submenus = useMenuApi();

  const menuItems = submenus.map((item, index) => {
    if (item.menuItems.length > 0) {
      return (
        <Dropdown
          key={index}
          trigger={
            <GifCompanion
              key={index}
              style={styles.itemNormal}
              content={
                <GifIcon src="https://www.car.gov.co/uploads/insor/16_Nosotros.gif" />
              }
            >
              <div
                className="h-100 px-2 py-2 text-center d-flex align-items-center "
                style={{ whiteSpace: "normal" }}
              >
                {item.name + " "}
              </div>
            </GifCompanion>
          }
          items={item.menuItems}
          className=" bg-transparent text-light menu-item fw-bolder h-100 d-flex align-items-center "
        />
      );
    } else {
      return (
        <GifCompanion
          className="d-flex "
          key={index}
          style={styles.itemNormal}
          content={
            <GifIcon src="https://www.car.gov.co/uploads/insor/19_Sala-de-Prensa.gif" />
          }
        >
          <Link
            to={item.destination_uri}
            className="text-decoration-none text-light fw-bolder h-100 px-3 py-2 menu-item d-flex text-center align-items-center justify-content-center "
          >
            {item.name}
          </Link>
        </GifCompanion>
      );
    }
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-0 bg-acua justify-content-center sticky-top fs-responsive-s "
      style={styles.menu}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler my-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">{menuItems}</div>
        </div>
      </div>
    </nav>
  );
};

export default StickyMenu;

const styles = {
  menu: { paddingRight: "10%", paddingLeft: "10%", zIndex: "990" },
};
