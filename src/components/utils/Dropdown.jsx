import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import LinkGeneral from "./LinkGeneral";
import styled from "styled-components";

const DropdownItem = styled.div`
  padding: 0.2rem 1rem;
  color: #000;
  &:hover {
    background-color: #89d335;
    color: #fff;
    font-weight: 600;
    text-shadow: 1px 1px 3px #012b38;
  }
`;

const DropdownContainer = styled.div`
  background-color: #fff;
  padding: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 1px 1px 3px #999;
`;

/*Dropdown generico se debe estar usando bootstrap recibe como parametro un arreglo de objetos con name y link*/
/*con className se puede anadir estilos al boton */
export default function Dropdown(props) {
  const dropown_items = props.items.map((item, index) => {
    return (
      <LinkGeneral
        className="item-dropdown text-decoration-none"
        href={item.destination_uri}
        key={index}
      >
        <DropdownItem>{item.name}</DropdownItem>
      </LinkGeneral>
    );
  });

  return (
    <Popup
      trigger={
        <div role="button" className={"border-0 " + props.className}>
          {" "}
          {props.name}{" "}
        </div>
      }
      position="bottom left"
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      <DropdownContainer>{dropown_items}</DropdownContainer>
    </Popup>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array,
};
