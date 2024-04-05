import React from "react";
import "./Home.css";
import 'animate.css';

const Home = () => {
  return (
    <>
      <section className="homeMain">
        <div className="flex homeBody">
          <div className="home__LeftContainer">
            <img className="home__Image" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
            <div className="ring-container">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
            </div>
          </div>
          <div className="flex home__RightContainer">
            <div className="flex home__HeadingTextContainer">
              <h1 className="home__HeaderText">
                Chintan Senapati
              </h1>
              <div className="flex home__CaptionTextContainer">
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
