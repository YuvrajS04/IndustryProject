import { useState } from "react";
import "./TopCards.scss";
import down from "../../assets/icons/Arrow-Down-Yellow.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/Arrow-up.svg";
import feedback from "../../assets/icons/Feedback-Icon.svg"

function TopCards() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <section className="top-cards">
      <h1 className="top-cards__heading">Your Insight at a Glance</h1>
      <img className="feedback-icon" src={feedback} />
      <div className="top-cards__wrapper">
      <article
        className={`card ${hovered ? "hovered" : ""}`}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <div className="background-fill"></div>
        <div className="card-container">
          <div className="card__subheading-wrapper">
            <h2 className="card__subheading">34%</h2>
            <ArrowUpIcon className={`card__icon ${hovered ? "white" : ""}`} />
          </div>
          <div className="card__title-wrapper" >
            <h3 className="card__title">Revenue</h3>
          </div>
          <div className="card__text-wrapper">
            <p className="card__text">Top new talent compared to average hires</p>
          </div>
          <div className="card__link">
            <a className="card__link">
              <p className="card__link-text">Learn more</p>
            </a>
          </div>
        </div>
      </article>
      <article
        className={`card ${hovered2 ? "hovered" : ""}`}
        onMouseOver={() => setHovered2(true)}
        onMouseOut={() => setHovered2(false)}
      >
        <div className="background-fill"></div>
        <div className="card-container">
          <div className="card__subheading-wrapper">
            <h2 className="card__subheading">42%</h2>
            <img className="card__icon" src={down} alt="Arrow-up" />
            {/* <ArrowUpIcon className={`card__icon ${hovered2 ? "white" : ""}`} /> */}
          </div>
          <div className="card__title-wrapper" >
            <h3 className="card__title">Efficiency</h3>
          </div>
          <div className="card__text-wrapper">
            <p className="card__text">Focused talent acquisition has reduced cost per hire</p>
          </div>
          <div className="card__link">
            <a className="card__link">
              <p className="card__link-text">Learn more</p>
            </a>
          </div>
        </div>
      </article>

      <article
        className={`card ${hovered3 ? "hovered" : ""}`}
        onMouseOver={() => setHovered3(true)}
        onMouseOut={() => setHovered3(false)}
      >
        <div className="background-fill"></div>
        <div className="card-container">
          <div className="card__subheading-wrapper">
            <h2 className="card__subheading">18%</h2>
            <img className="card__icon" src={down} alt="Arrow-up" />
            {/* <ArrowUpIcon className={`card__icon ${hovered3 ? "white" : ""}`} /> */}
          </div>
          <div className="card__title-wrapper" >
            <h3 className="card__title">Impact</h3>
          </div>
          <div className="card__text-wrapper">
            <p className="card__text">Decrease in employee attrition rates: Q2 compared to Q1</p>
          </div>
          <div className="card__link">
            <a className="card__link">
              <p className="card__link-text">Learn more</p>
            </a>
          </div>
        </div>
      </article>
      </div>
    </section>
  );
}

export default TopCards;
