import React, { useState } from "react";
import { Link } from "react-router-dom";

/*Dropdown generico se debe estar usando bootstrap recibe como parametro un arreglo de objetos con name y link*/
/*con className se puede anadir estilos al boton */
export default function Dropdown(props) {
  const [show, setCount] = useState("d-none");

  function showSubSubitem() {
    setCount("d-block");
  }
  function hideSubSubitem() {
    setCount("d-none");
  }

  const dropown_items = props.items.map((item, index) => {
    if (item.content) {
      const dropdownChilds = item.content.map((item, index) => {
        return (
          <Link
            key={index}
            className="dropdown-item subSubItem pe-5"
            to={item.link}
          >
            <span>{item.name} </span>
          </Link>
        );
      });

      return (
        <li
          onMouseOver={showSubSubitem}
          onMouseOut={hideSubSubitem}
          key={index}
          className="position-relative"
        >
          <Link className="dropdown-item menu-2" to={item.link}>
            <span>{item.name} </span> <i class="fa-solid fa-caret-right"></i>
          </Link>
          <div
            className={"bg-white rounded border position-absolute  " + show}
            style={{ top: index * 100 + "%", left: "100%" }}
          >
            {dropdownChilds}
          </div>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <Link className="dropdown-item" to={item.link}>
            <span>{item.name}</span>
          </Link>
        </li>
      );
    }
  });

  return (
    <div className="dropdown">
      <button
        className={"border-0 dropdown-toggle " + props.className}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.name}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {dropown_items}
      </ul>
    </div>
  );
}
