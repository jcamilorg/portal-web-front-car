import React from "react";
import styled from "styled-components";

const IframeSyled = styled.iframe`
  .hover {
    color: red;
  }
`;

export default function Iframe(props) {
  const handleOnMouseOver = (e) => {
    console.log(e);
  };

  return (
    <div
      className={"ratio ratio-16x9 " + props.className}
      onMouseOver={handleOnMouseOver}
    >
      <span>{props.alt}</span>
      <IframeSyled
        style={props.style}
        src={props.link}
        title={"video " + props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></IframeSyled>
    </div>
  );
}
