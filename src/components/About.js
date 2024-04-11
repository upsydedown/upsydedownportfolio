import React from "react";
import "./About.css";


const List = ({ heading, image }) => {
  <span className="stack">
    <img src={image} alt="" srcset="" />
    <h5>{heading}</h5>
  </span>
}

const About = () => {
  return (
    <>
      <section className="aboutMain">
        <div className="flex aboutBody">
          <div className="flex about__LeftContainer">
            <div className="about__LeftContainer__HexagonalGrid">

            </div>
            <div className="about__LeftContainer__TechStack">
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
          <div className="flex about__RightContainer">
            <img src="" alt="" srcset="" />
            <caption className="about__RightContainer__ParagraphBody">
              <h1>

              </h1>
              <p>

              </p>
            </caption>
          </div>
        </div>
      </section>
    </>




  );
};

export default About;
