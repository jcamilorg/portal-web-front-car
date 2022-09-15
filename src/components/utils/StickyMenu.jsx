import React from "react";
import { Link } from "react-router-dom";
//Components
import Dropdown from "./DropdownOld";
//functions
import { useMenuApi } from "./getDataFromApi";

const StickyMenu = () => {
  const submenus = useMenuApi();

  const menuItems = submenus.map((item, index) => {
    if (item.menuItems.length > 0) {
      return (
        <Dropdown
          key={index}
          name={item.name}
          items={item.menuItems}
          className="bg-acua text-light px-3 py-2 menu-item fw-bolder h-100"
          classNameDropdown="d-flex flex-column justify-content-center text-center"
        />
      );
    } else {
      return (
        <div
          className="bg-acua px-3 py-2 menu-item d-flex text-center align-items-center justify-content-center "
          key={index}
          style={styles.itemNormal}
        >
          <Link
            to={item.destination_uri}
            className="text-decoration-none text-light fw-bolder"
          >
            {item.name}
          </Link>
        </div>
      );
    }
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-0 bg-acua  justify-content-center sticky-top fs-responsive-s "
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
