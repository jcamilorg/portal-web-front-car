import React from "react";

export default function Banner({ src, alt }) {
  return (
    <div className="">
      <img className="w-100" src={src} alt={alt || ""} />
    </div>
  );
}
