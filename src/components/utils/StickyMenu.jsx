import React, { Component } from "react";
import { Link } from "react-router-dom";
//Components
import Dropdown from "./Dropdown";
//functions
import getData from "./getData";

export default class StickyMenu extends Component {
  state = {
    menuItems: [],
  };
  componentDidMount() {
    getData(this.props.url).then((datajson) => {
      this.setState(() => {
        let menuItems = [],
          index = 0;
        for (const property in datajson.infoStickyMenu) {
          let text = property;
          let result = text.replace(/([A-Z])/g, " $1");
          let title = result.charAt(0).toUpperCase() + result.slice(1);

          if (Array.isArray(datajson.infoStickyMenu[property])) {
            menuItems[index++] = (
              <Dropdown
                name={title}
                items={datajson.infoStickyMenu[property]}
                className="bg-transparent text-light"
              />
            );
          } else {
            menuItems[index++] = (
              <Link
                to={datajson.infoStickyMenu[property]}
                className="text-white text-decoration-none"
              >
                {title}
              </Link>
            );
          }
        }

        return {
          menuItems: menuItems,
        };
      });
    });
  }

  render() {
    let menuItemsStyled = this.state.menuItems.map((item, index) => {
      return (
        <div
          key={index}
          className="bg-acua text-light px-4 py-2 border-end border-start border-light border-1 mt-1"
        >
          {item}
        </div>
      );
    });

    return (
      <div className="d-flex flex-wrap justify-content-center sticky-top bg-white ">
        {menuItemsStyled}
      </div>
    );
  }
}
