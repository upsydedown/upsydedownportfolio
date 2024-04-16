import React from 'react';
import "./Icon.css";

const Icon = ({ heading, image }) => {
    return (
        <span className="stack">
            <img className="image" src={image} alt="" srcset="" />
            <h5>{heading}</h5>
        </span>

    )
}

export default Icon