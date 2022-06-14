import React, { Component } from "react";
import { Link } from "react-router-dom";
//Components
import Dropdown from "./Dropdown";
//functions
import PropTypes from "prop-types";

export default class StickyMenu extends Component {
  render() {
    let menuItems = [];
    if (this.props.items) {
      console.log(this.props.items);
      menuItems = this.props.items.map((item, index) => {
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
    }

    let menuItemsStyled = menuItems.map((item, index) => {
      return (
        <div key={index} className="fs-responsive-s">
          {item}
        </div>
      );
    });

    return (
      <div className="bg-acua d-flex flex-wrap justify-content-center sticky-top">
        {menuItemsStyled}
      </div>
    );
  }
}

StickyMenu.propTypes = {
  items: PropTypes.array,
};
