import React from "react";
import "./Projects.css";
import Icon from "./Icon.js";

const Projects = () => {
  return (
    <>
      <section className="projectsMain">
        <div className="flex projectsBody">
          <div className="projects__LeftContainer">
            <img src="./images/Projects/left_dragon.png" alt="" srcset="" />
          </div>
          <div className="flex projects__CenterContainer">
            <img src="./images/Projects/Shelf.png" alt="" srcset="" />
            <div className="flex bookStack">
              <div className="flex bookStack1">
                <Icon
                  redirect="https://1021creative.com/"
                  style="books"
                  heading=""
                  image="./images/Projects/1021.png"
                />
                <Icon
                  redirect="https://github.com/upsydedown/LinkedIN_Replica.github.io"
                  style="books"
                  heading=""
                  image="./images/Projects/linkedin.png"
                />
                <Icon
                  redirect="https://aranieco.com/"
                  style="books"
                  heading=""
                  image="./images/Projects/aranieco.png"
                />
              </div>
              <div className="flex bookStack2">
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book1.png"
                />
                <Icon
                  redirect="https://www.linkedin.com/posts/chintansenapati_eatsure-market-research-and-analysis-part-activity-7170468152126947328-BGDn?utm_source=share&utm_medium=member_desktop"
                  style="books"
                  heading=""
                  image="./images/Projects/book1.png"
                />
                <Icon
                  redirect="https://github.com/upsydedown/HemaSource.github.io"
                  style="books"
                  heading=""
                  image="./images/Projects/hemasource.png"
                />
                <Icon
                  redirect="https://www.linkedin.com/posts/chintansenapati_penpal-design-and-development-activity-7171455041277480961-_v_r?utm_source=share&utm_medium=member_desktop"
                  style="books"
                  heading=""
                  image="./images/Projects/book1.png"
                />
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book1.png"
                />
              </div>
              <div className="flex bookStack3">
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book2.png"
                />
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book2.png"
                />
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book2.png"
                />
                <Icon
                  style="books"
                  heading=""
                  image="./images/Projects/book2.png"
                />
              </div>
            </div>
            <div className="flex projects__CenterContainerHeader">
              <h1>Incantations</h1>
            </div>
          </div>
          <div className="projects__RightContainer">
            <img src="./images/Projects/right_dragon.png" alt="" srcset="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
