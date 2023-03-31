import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/Logo.svg";
import home from "../../assets/icons/1-home.svg";
import search from "../../assets/icons/2-search.svg";
import open from "../../assets/icons/3-open-book.svg";
import text from "../../assets/icons/4-text-align-left-bold.svg";
import list from "../../assets/icons/5-list-bullets-fill.svg";
import dots from "../../assets/icons/6-dots-square.svg";
import compass from "../../assets/icons/7-compass.svg";
import arrow from "../../assets/icons/8-arrow-square.svg";
import shooting from "../../assets/icons/9-shooting-star-bold.svg";
import question from "../../assets/icons/10-question-circle-fill.svg";
import round from "../../assets/icons/11-round-account-circle.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-top">
          <img className="nav__logo" src={Logo} alt="Visier Logo" />

          <NavLink to="/">
            {/* <NavLink to="/"
                    className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                    }> */}
            <img className="nav__icon" src={home} alt="Home logo" />
          </NavLink>
          <img className="nav__icon" src={search} alt="Search logo" />
          <img className="nav__icon" src={open} alt="Open book logo" />
          <img className="nav__icon" src={text} alt="Text align left logo" />
          <img className="nav__icon" src={list} alt="List bullet logo" />
          <img className="nav__icon" src={dots} alt="Square dot logo" />
          <img className="nav__icon" src={compass} alt="Compass logo" />
          <img className="nav__icon" src={arrow} alt="Arrow Square logo" />
          <img
            className="nav__icon nav__icon--bottom"
            src={shooting}
            alt="Star logo"
          />
          <img className="nav__icon" src={question} alt="Question logo" />
          <img className="nav__icon" src={round} alt="Round logo" />
        </div>
        <div className="nav-bottom"></div>
      </nav>
    </header>
  );
}

export default Header;
