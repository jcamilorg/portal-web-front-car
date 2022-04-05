import React from "react";

export default function Iframe(props) {
  return (
    <div className={"ratio ratio-16x9 " + props.className}>
      <iframe
        src={props.link}
        title={"video " + props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
