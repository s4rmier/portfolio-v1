import "../css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function HamburgerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMobileNav, setActiveMobileNav] = useState("home");

  function clickHandler(navItem) {
    setIsVisible(!isVisible);
    setActiveMobileNav(navItem);
  }

  return (
    <div id="hamburger-menu" className="flex-row">
      <img
        onClick={() => setIsVisible(true)}
        src="/hamburger-menu.png"
        alt=""
      />

      {isVisible && (
        <div className="mobile-nav flex-col">
          <div className="mobile-header flex-row align">
            <img
              onClick={() => setIsVisible(false)}
              className="close-btn"
              src="/close-btn.png"
              alt=""
            />
          </div>

          <ul className="mobile-nav-links">
            <NavLink
              url="/"
              label="home"
              isActive={activeMobileNav === "home"}
              clickHandler={() => clickHandler("home")}
            />
            <NavLink
              url="/about"
              label="about"
              isActive={activeMobileNav === "about"}
              clickHandler={() => clickHandler("about")}
            />
            <NavLink
              url="/projects"
              label="projects"
              isActive={activeMobileNav === "projects"}
              clickHandler={() => clickHandler("projects")}
            />
            <NavLink
              url="/blog"
              label="blog"
              isActive={activeMobileNav === "blog"}
              clickHandler={() => clickHandler("blog")}
            />
            <NavLink
              url="/contact"
              label="contact"
              isActive={activeMobileNav === "contact"}
              clickHandler={() => clickHandler("contact")}
            />
          </ul>
        </div>
      )}
    </div>
  );
}
