import React from "react";
import { Link } from "react-router-dom";
//Components
import Dropdown from "./Dropdown";
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
          className="bg-acua text-light px-3 py-2 menu-item fw-bolder"
        />
      );
    } else {
      return (
        <div
          className="bg-acua px-3 py-2 menu-item text-center"
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
    <div
      className="bg-acua d-flex align-items-center justify-content-center sticky-top fs-responsive-s "
      style={styles.menu}
    >
      {menuItems}
    </div>
  );
};

export default StickyMenu;

const styles = {
  menu: { paddingRight: "10%", paddingLeft: "10%" },
};
