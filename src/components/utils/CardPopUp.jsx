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

  img {
    height: 75px;
  }
`;

const Title = styled.div`
  font-size: 30px;
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
  border-radius: 10px;
  box-shadow: 0px 0px 5px #555;
  padding: 20px;
  background-color: #fff;
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

const CardPopUp = ({ title, description, iconSrc, children }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Card role="button" onClick={() => setOpen((o) => !o)}>
        <ImageContainer>
          <Circle>
            {iconSrc ? <Image src={icons(iconSrc)}></Image> : null}
          </Circle>
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <div>{description}</div>
        </TextContainer>
      </Card>
      <Modal open={open} onClose={closeModal}>
        {children}
      </Modal>
    </>
  );
};

export default CardPopUp;
