import React from "react";

/*Dropdown generico se debe estar usando bootstrap recibe como parametro un arreglo de objetos con name y link*/
/*con className se puede anadir estilos al boton */
export default function Dropdown(props) {
  const dropown_items = props.items.map((item, index) => (
    <li key={index}>
      <a className="dropdown-item" href={item.link}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <div>
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
    </div>
  );
}
