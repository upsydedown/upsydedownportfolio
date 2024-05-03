import React, { useState } from "react";
import "./Contact.css";
import Icon from "./Icon";
const Contact = () => {
  const [fileName, setFileName] = useState("Chintan Senapati(UI).pdf");

  const handleClick = async () => {
    const resumeBlob = await fetch("./Chintan_Senapati (UI).pdf");

    if (!resumeBlob.ok) {
      throw new Error("Failed to fetch resume");
    }

    const blobUrl = URL.createObjectURL(await resumeBlob.blob());
    const link = document.createElement("a");

    link.href = blobUrl;
    link.setAttribute("download", fileName);
    link.click();

    URL.revokeObjectURL(blobUrl);
  };

  return (
    <section className="contactMain">
      <div className="flex contactBody">
        <div className="flex contact__LeftContainer">
          <img src="./images/Contact/tree.png" alt="" srcset="" />
          <div className="flex contact__LeftContainer__Icon">
            <Icon
              redirect=" https://twitter.com/ChintanSenapati"
              style="tree_icon"
              heading=""
              image="./images/Contact/twitter.png"
            />
            <Icon
              redirect="mailto:${chintansenapati@gmail.com}"
              style="tree_icon"
              heading=""
              image="./images/Contact/mail.png"
            />
            <Icon
              redirect="https://www.linkedin.com/in/chintansenapati/"
              style="tree_icon"
              heading=""
              image="./images/Contact/linkedin.png"
            />
          </div>
        </div>
        <div className="flex contact__RightContainer">
          <h2>Ready for your Patronus Project?</h2>
          <div className="flex contact__RightContainer__btn">
            <button
              onClick={handleClick}
              className="flex contact__RightContainer__btnContainer"
            >
              <h1 className="animate__animated animate__fadeIn">
                Send <br /> an <br /> Owl
              </h1>
            </button>
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
