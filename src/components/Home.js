import React from "react";
import "./Home.css";
import "animate.css";

const Home = () => {
  return (
    <>
      <section className="homeMain">
        <div className="flex homeBody">
          <div className="home__LeftContainer">
            <img className="home__Image" src="./images/Home/home_image.png" />
            <div className="ring-container">
              <div className="ring ring-1 "></div>
              <div className="ring ring-2"></div>
            </div>
          </div>
          <div className="flex home__RightContainer">
            <div className="flex home__HeadingTextContainer">
              <h1 className="home__HeaderText ">Chintan Senapati</h1>
              <div className="flex home__CaptionTextContainer">
                <span className="cap animate__animated animate__fadeInUp animate__delay-1s">
                  UI wizard
                </span>
                <span className="bar">|</span>
                <span className="cap animate__animated animate__fadeInUp animate__delay-2s">
                  Research Alchemist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
