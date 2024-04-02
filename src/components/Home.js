import React from "react";
import "./Home.css";
import 'animate.css';

const Home = () => {
  return (
    <>
      <section className="homeMain">
        <div className="flex homeBody">
          <div className="home__LeftContainer">
            <img src="" alt="" srcset="" />
          </div>
          <div className="flex home__RightContainer">
            <div className="home__HeadingTextContainer">
              <h1 className="home__HeaderText">
                Chintan Senapati
              </h1>
              <div className="home__CaptionTextContainer">
                <span className="cap animate__animated animate__fadeInUp animate__delay-3s">
                  UI/UX
                </span>
                <span className="bar">|</span>
                <span className="cap animate__animated animate__fadeInUp animate__delay-2s">
                  Product Designer
                </span>
                <span className="bar">|</span>
                <span className="cap animate__animated animate__fadeInUp animate__delay-4s">
                  Architect
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
