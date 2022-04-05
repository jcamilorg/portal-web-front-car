import React from "react";
import { Link } from "react-router-dom";

/*Dropdown generico se debe estar usando bootstrap recibe como parametro un arreglo de objetos con name y link*/
/*con className se puede anadir estilos al boton */
export default function Dropdown(props) {
  const dropown_items = props.items.map((item, index) => {
    if (item.link) {
      return (
        <li key={index}>
          <Link className="dropdown-item" to={item.link}>
            <span>{item.name}</span>
          </Link>
        </li>
      );
    } else {
      return (
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Submenu &raquo;
              </a>
              <ul class="dropdown-menu dropdown-submenu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3 &raquo;{" "}
                  </a>
                  <ul class="dropdown-menu dropdown-submenu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Multi level 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Multi level 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 4
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 5
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    }
  });

  return (
    <div>
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
    </div>
  );
}
