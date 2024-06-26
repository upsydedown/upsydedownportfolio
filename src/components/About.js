import React from "react";
import "./About.css";
import Icon from "./Icon.js";

const About = () => {
  return (
    <>
      <section className="aboutMain">
        <div className="flex aboutBody">
          <div className="flex about__LeftContainer">
            <div className="flex about__LeftContainer__HexagonalGrid">
              <div className="flex about__LeftContainer__HexagonalGridHeading">
                <h3>Muggle's</h3>
                <h1>"TechStack"</h1>
              </div>
              <Icon
                style="Hex"
                heading="HTML"
                image="./images/About/Hexagon/HTML_logo.png"
              />
              <Icon
                style="Hex"
                heading="CSS"
                image="./images/About/Hexagon/CSS_logo.png"
              />
              <Icon
                style="Hex"
                heading="JavaScript"
                image="./images/About/Hexagon/JS_logo.png"
              />
              <Icon
                style="Hex"
                heading="React"
                image="./images/About/Hexagon/React_logo.png"
              />
              <Icon
                style="Hex"
                heading="Next"
                image="./images/About/Hexagon/Next.js_logo.png"
              />
              <Icon
                style="Hex"
                heading="Redux"
                image="./images/About/Hexagon/Redux_logo.png"
              />
            </div>
            <div className="flex about__LeftContainer__TechStack">
              <div className="flex about__LeftContainer__TechStackList">
                <h3>Under the Alchemist's Toolbelt</h3>
                <div className="flex about__LeftContainer__TechStackList__Icons">
                  <Icon
                    heading=""
                    image="./images/About/Secondary/firebase.png"
                  />
                  <Icon heading="" image="./images/About/Secondary/figma.png" />
                  <Icon
                    heading=""
                    image="./images/About/Secondary/framer.png"
                  />
                  <Icon
                    heading=""
                    image="./images/About/Secondary/webflow.png"
                  />
                  <Icon
                    heading=""
                    image="./images/About/Secondary/vercel.png"
                  />
                  <Icon heading="" image="./images/About/Secondary/java.png" />
                  <Icon heading="" image="./images/About/Secondary/MUI.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex about__RightContainer">
            <img src="./images/About/about_bg.png" alt="" srcset="" />
            <caption className="about__RightContainer__ParagraphBody">
              <h1>
                Excerpt from the <br />
                Alchemist's Personal Diary
              </h1>
              <p>
                Scribe today a new inscription: the art of <br /> code as
                bridge, not barricade, to <br />
                human experience.
                <br />
                A seasoned developer forsooth, 2+ years I <br /> have toiled in
                the fires of the front-end,
                <br />
                yet my true enchantment lies in the
                <br />
                alchemy of user-centric design.
                <br />
                Here, logic and empathy weave spells to
                <br /> craft products that resonate with the
                <br />
                very essence of human behavior.
                <br />
                Imagine, if you will, interfaces that
                <br />
                dance with psychology,
                <br />
                coaxing positive action, or
                <br />
                AI that tailors itself to the mind'
                <br />
                unique melody.
                <br />
                These are the phantasmagoria that
                <br />
                ignite my passion,
                <br />
                for I believe technology can be
                <br />
                a chalice of betterment, not a<br />
                mere automatonic drone.
                <br />
              </p>
            </caption>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
