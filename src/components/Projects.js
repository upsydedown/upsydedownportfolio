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
          <div className="projects__CenterContainer">
            <img src="./images/Projects/Shelf.png" alt="" srcset="" />
            <div className="bookStack">
              <Icon />
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
