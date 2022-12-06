import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;

  .description {
    background-color: #fff;
    padding: 0 5px;
    opacity: 0.92;
    color: #555;
    position: absolute;
    left: 0;
    bottom: 0px;
    border-radius: 4px;
  }

  .show {
    visibility: visible;
    animation-name: fadeIn;
    animation-duration: 0.7s;
  }

  .hidden {
    visibility: hidden;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0.92;
    }
  }
`;

const Image = ({ src, classNameDiv, classNameImg, alt }) => {
  const handleHover = (e) => {
    const element = e.target.previousElementSibling;
    element.classList.add("show");
    element.classList.remove("hidden");
  };

  const handleLeave = (e) => {
    const element = e.target.previousElementSibling;
    element.classList.add("hidden");
    element.classList.remove("show");
    console.log(e);
  };

  return (
    <ImgContainer className={classNameDiv}>
      <span className="description hidden">{alt}</span>
      <img
        className={"img-fluid " + classNameImg}
        src={src}
        alt={alt}
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      />
    </ImgContainer>
  );
};

export default Image;
