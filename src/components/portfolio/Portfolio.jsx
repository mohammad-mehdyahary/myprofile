import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/1.jpg";
import IMG2 from "../../assets/2.jpg";
import IMG6 from "../../assets/6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container protfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>A site for easy diagnosis of plant diseases</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a className="btnn btn-primaryy">In production</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>The largest real estate brokerage site in Iran</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a className="btnn btn-primaryy">In production</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Online store of fancy and stylish clothes</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a className="btnn btn-primaryy">In production</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
