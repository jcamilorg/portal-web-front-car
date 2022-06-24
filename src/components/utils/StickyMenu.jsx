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
          className="bg-acua text-light px-4 py-2 menu-item fw-bolder"
        />
      );
    } else {
      return (
        <div className="bg-acua px-4 py-2 menu-item" key={index}>
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
    <div className="bg-acua d-flex flex-wrap justify-content-center sticky-top fs-responsive-s">
      {menuItems}
    </div>
  );
};

export default StickyMenu;
