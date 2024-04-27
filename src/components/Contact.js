import React from "react";
import "./Contact.css";
import Icon from "./Icon";
const Contact = () => {
  return (
    <section className="contactMain">
      <div className="flex contactBody">
        <div className="flex contact__LeftContainer">
          <img src="./images/Contact/tree.png" alt="" srcset="" />
          <div className="flex contact__LeftContainer__Icon">
            <Icon
              style="tree_icon"
              heading=""
              image="./images/Contact/linkedin.png"
            />
            <Icon
              style="tree_icon"
              heading=""
              image="./images/Contact/twitter.png"
            />
            <Icon
              style="tree_icon"
              heading=""
              image="./images/Contact/mail.png"
            />
          </div>
        </div>
        <div className="flex contact__RightContainer">
          <h2>Ready for your Patronus Project</h2>
          <div className="flex contact__RightContainer__btn">
            <h1>Send <br/> an <br/> Owl</h1>
            <img
              className="orb"
              src="./images/Contact/orb.png"
              alt=""
              srcset=""
            />
            <div className="contact__RightContainer__QuoteBox">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
