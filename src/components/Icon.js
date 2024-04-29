import React from "react";
import "./Icon.css";

const Icon = ({ style, heading, image, redirect }) => {
  const finalClassname = style ? style : "stack";
  return (
    <span className={finalClassname}>
      <a href={redirect}>
        <img className="image" src={image} alt="" srcset="" />
        <h5>{heading}</h5>
      </a>
    </span>
  );
};

export default Icon;
