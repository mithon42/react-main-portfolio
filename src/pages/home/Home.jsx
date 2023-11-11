import React from "react";
import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="profile images" className="home-img" />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I'm Mithon Ali.</span> web designer
          </h1>

          <p className="home-description">
            Hi! I am Mithon from Bangladesh. I am a CSE student. I have been a
            professional Front end web developer since 2022. I have much
            experience in front-end web development. I love coding and
            programming And Front-end development is not my hobby It is only my
            passion.
          </p>

          <Link to="/about" className="btn">
            <span>more about me</span>
            <span className="btn-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
