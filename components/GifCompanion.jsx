import React, { useState } from "react";
import Popup from "reactjs-popup";

const Tooltip = ({ children, content }) => (
  <>
    <Popup
      trigger={children}
      on={["hover", "focus"]}
      position="right top"
      closeOnDocumentClick
      arrow={false}
      closeOnEscape
    >
      <div className="mx-4"> {content} </div>
    </Popup>
  </>
);

export default function GifCompanion({ children, content, className, style }) {
  return (
    <div className={className} style={style}>
      <Tooltip children={children} content={content} />
    </div>
  );
}
