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
                className="bg-acua text-light px-4 py-2 menu-item fw-bolder"
              />
            );
          } else {
            menuItems[index++] = (
              <div className="bg-acua px-4 py-2 menu-item">
                <Link
                  href={datajson.infoStickyMenu[property]}
                  className="text-decoration-none text-light fw-bolder"
                >
                  {title}
                </Link>
              </div>
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
