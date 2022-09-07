import React, { useState } from "react";
import LinkGeneral from "./LinkGeneral";
import styled from "styled-components";
import Image from "./Image";
import Popup from "reactjs-popup";

const icons = require.context("../../assets/icons/", true);

const Card = styled.div`
  border-radius: 10px;
  border: solid 1px #017185;
  color: #5c5c5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  position: relative;
  height: 100%;
  padding: 15px;

  img {
    height: 75px;
  }
`;

const Title = styled.div`
  font-size: 26px;
  color: #017185;
  font-weight: bold;
`;

const Circle = styled.div`
  border: 10px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  height: 140px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  top: -50px;
  text-align: center;
`;

const TextContainer = styled.div`
  position: relative;
  top: -35px;
  text-align: center;
`;

const ModalContainer = styled.div`
  display: block;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #555;
  padding: 60px 40px;
  background-color: #fff;
  max-height: 700px;
  overflow: scroll;
`;

const Modal = ({ open, onClose, children }) => (
  <Popup
    open={open}
    onClose={onClose}
    modal
    closeOnDocumentClick
    overlayStyle={{ background: "rgba(255,255,255,0.5)" }}
  >
    <ModalContainer>{children}</ModalContainer>
  </Popup>
);

const ContentCardPopUP = ({ title, description, iconSrc, pdf }) => {
  return (
    <>
      <ImageContainer>
        <Circle>{iconSrc ? <Image src={icons(iconSrc)}></Image> : null}</Circle>
      </ImageContainer>
      {pdf ? (
        <TextContainer>
          <div className="d-flex align-items-center">
            <div>
              <img
                style={{
                  width: "40px",
                  height: "38px",
                  borderRight: "solid #017185",
                  paddingRight: "10px",
                  marginRight: "10px",
                }}
                src={icons("./IconoPdf.svg")}
                alt="imagenPdf"
              ></img>
              <div
                style={{
                  fontSize: "10px",
                  paddingRight: "10px",
                  marginRight: "10px",
                }}
              >
                0kb
              </div>
            </div>

            <div>
              <Title>{title}</Title>
              <div>{description}</div>
            </div>
          </div>
        </TextContainer>
      ) : (
        <TextContainer>
          <Title>{title}</Title>
          <div>{description}</div>
        </TextContainer>
      )}
    </>
  );
};

const CardPopUp = ({ title, description, iconSrc, children, pdf, href }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  if (href) {
    return (
      <LinkGeneral href={href}>
        <Card>
          <ContentCardPopUP
            title={title}
            description={description}
            iconSrc={iconSrc}
            pdf={pdf}
          />
        </Card>
      </LinkGeneral>
    );
  } else {
    return (
      <Card role="button" onClick={() => setOpen((o) => !o)}>
        <ContentCardPopUP
          title={title}
          description={description}
          iconSrc={iconSrc}
          pdf={pdf}
        />
        <Modal open={open} onClose={closeModal}>
          {children}
        </Modal>
      </Card>
    );
  }
};

export default CardPopUp;
