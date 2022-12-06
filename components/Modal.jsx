import React, { useState } from "react";
import Popup from "reactjs-popup";

const ModalContent = ({ open, onClose }) => (
  <Popup
    open={open}
    onClose={onClose}
    modal
    closeOnDocumentClick
    overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
  >
    <div>ok</div>
  </Popup>
);

const Modal = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <div role="button" onClick={() => setOpen((o) => !o)}></div>
      <ModalContent open={open} onClose={closeModal} />
    </>
  );
};

export default Modal;
