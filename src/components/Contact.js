import React from "react";
import "./Contact.css";
import Icon from "./Icon";
const Contact = () => {
  return (
    <section className="contactMain">
      <div className="flex contactBody">
        <div className="flex contact__LeftContainer">
          <img src="./images/Contact/tree.png" alt="" srcset="" />
          <div className="contact__LeftContainer__Icon">
            <Icon />
          </div>
        </div>
        <div className="flex contact__RightContainer">
          <h1></h1>
          <div className="contact__RightContainer__btn">
            <img src="./images/Contact/orb.png" alt="" srcset="" />
            <div className="contact__RightContainer__QuoteBox"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
