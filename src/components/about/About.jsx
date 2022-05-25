import React from "react";
import "./about.css";
import ME from "../../assets/photo.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward  className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers  className="about__icon"/>
              <h5>Client</h5>
              <small>40+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive  className="about__icon"/>
              <h5>Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          My name is Mohammad Mehdi Ahari, I was born in 1998 and my place of residence and birth is in the very beautiful city of Urmia. I am a student of Urmia University and I am studying plant pathology.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
