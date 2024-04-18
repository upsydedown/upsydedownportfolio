import React from 'react';
import "./Icon.css";

const Icon = ({ style, heading, image }) => {
    const finalClassname = style ? style : "stack";
    return (
        <span className={finalClassname}>
            <img className="image" src={image} alt="" srcset="" />
            <h5>{heading}</h5>
        </span>

    )
}

export default Icon