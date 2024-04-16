import React from "react";
import "./About.css";
import Icon from "./Icon.js"




const About = () => {
  return (
    <>
      <section className="aboutMain">
        <div className="flex aboutBody">
          <div className="flex about__LeftContainer">
            <div className="about__LeftContainer__HexagonalGrid">
            </div>
            <div className="about__LeftContainer__TechStack">
              <h3></h3>
              <div className="about__LeftContainer__TechStackList">
                <Icon heading="FireBase" image="./images/About/Secondary/firebase.png" />
                <Icon heading="Figma" image="./images/About/Secondary/figma.png" />
                <Icon heading="Framer" image="./images/About/Secondary/framer.png" />
                <Icon heading="WebFlow" image="./images/About/Secondary/webflow.png" />
                <Icon heading="Vercel" image="./images/About/Secondary/vercel.png" />
                <Icon heading="Java" image="./images/About/Secondary/java.png" />
                <Icon heading="MUI" image="./images/About/Secondary/MUI.png" />
              </div>
            </div>
          </div>
          <div className="flex about__RightContainer">
            <img src="./images/About/about_bg.png" alt="" srcset="" />
            <caption className="about__RightContainer__ParagraphBody">
              <h1>
                Excerpt from the Alchemist's Personal Diary
              </h1>
              <p>
                Scribe today a new inscription: the art of <br /> code as bridge, not barricade, to  <br />
                human experience.<br />
                A seasoned developer forsooth, 2+ years I <br /> have toiled in the fires of the front-end,<br />
                yet my true enchantment lies in the<br />
                alchemy of user-centric design.<br />
                Here, logic and empathy weave spells to craft products that resonate with the
                very essence of human behavior.
                Imagine, if you will, interfaces that
                dance with psychology,
                coaxing positive action, or
                AI that tailors itself to the mind's
                unique melody.
                These are the phantasmagoria that
                ignite my passion,
                for I believe technology can be
                a chalice of betterment, not a
                mere automatonic drone.
              </p>
            </caption>
          </div>
        </div>
      </section >
    </>




  );
};

export default About;
