import React from "react";
import LinkGeneral from "./LinkGeneral";
import styled from "styled-components";

const Btn = styled.div`
  border-radius: 20px;
  background-color: #006e95;
  color: #fff;
  font-weight: bold;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  &:hover .Circle {
    animation-name: animation-Circle;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes animation-Circle {
    0% {
    }
    100% {
      width: 100%;
    }
  }

  &:hover .CircleSmall {
    animation-name: animation-CircleSmall;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes animation-CircleSmall {
    0% {
    }
    100% {
      width: 50%;
    }
  }

  &:hover .BtnText {
    animation-name: animation-BtnText;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes animation-BtnText {
    0% {
    }
    100% {
      color: #015a52;
    }
  }
`;

const BtnText = styled.div`
  z-index: 10;
`;

const CircleSmall = styled.div`
  border-radius: 20px;
  position: absolute;
  background-color: #89d335;
  height: 100%;
  width: 25%;
  left: 0;
`;

const Circle = styled.div`
  border-radius: 20px;
  position: absolute;
  background-color: #9fe047;
  height: 100%;
  width: 40%;
  left: 0;
`;

const ButtonCAR = ({ children, href, className, onClick }) => {
  if (onClick) {
    return (
      <div onClick={onClick} role="button">
        <Btn className={`fs-responsive-xs ${className}`}>
          <Circle className="Circle" />
          <CircleSmall className="CircleSmall" />
          <BtnText className="BtnText">{children}</BtnText>
        </Btn>
      </div>
    );
  } else {
    return (
      <LinkGeneral href={href}>
        <Btn className={`fs-responsive-xs ${className}`}>
          <Circle className="Circle" />
          <CircleSmall className="CircleSmall" />
          <BtnText className="BtnText">{children}</BtnText>
        </Btn>
      </LinkGeneral>
    );
  }
};

const ButtonPdf = ({ title, children }) => (
  <div role="button" className="d-flex">
    <div>
      <i
        class="fa-solid fa-file-pdf text-main"
        style={{
          fontSize: "60px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      ></i>
      <div style={{ fontSize: "10px", textAlign: "center" }}>0kb</div>
    </div>
    <div className="d-flex flex-column justify-content-center">
      <h5 className="text-acua fw-bold">{title}</h5>
      <div className="text-main fs-responsive-s">{children}</div>
    </div>
  </div>
);

export default ButtonCAR;

export { ButtonPdf };
