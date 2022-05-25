import React from "react";
import "./service.css";
import { FiCheck } from "react-icons/fi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Sitemaps</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Wireframes</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            
            <li>
              <FiCheck className="service__list-icon" />
              <p>VISUAL DESIGN - Design Theory + Accessibility</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Spacing And The Grid</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Typography</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Color</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Forms + UI Elements</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Mobile Design & Web Design</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Motion</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Write complex code</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Controls HTML, CSS and JavaScript, layout, design and interaction</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Visual aspect of the website</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Sliding menus</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Website server</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>database</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Contact Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p></p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Service;
