import "../css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMobileNav, setActiveMobileNav] = useState("Home");

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
            {" "}
            <Link to="/">
              <div
                onClick={() => clickHandler()}
                className="nav-brand flex-row align justify"
              >
                <img src="/logo-light.svg" alt="" />
                <h2 className="brand-name">
                  ROMNICK<span>.DEV</span>
                </h2>
              </div>
            </Link>
            <img
              onClick={() => setIsVisible(false)}
              className="close-btn"
              src="/close-btn.png"
              alt=""
            />
          </div>

          <ul className="mobile-nav-links">
            <Link to="/">
              <li
                onClick={() => clickHandler("Home")}
                className={activeMobileNav === "Home" && "active-nav"}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                onClick={() => clickHandler("About")}
                className={activeMobileNav === "About" && "active-nav"}
              >
                About
              </li>
            </Link>
            <Link to="/projects">
              <li
                onClick={() => clickHandler("Projects")}
                className={activeMobileNav === "Projects" && "active-nav"}
              >
                Projects
              </li>
            </Link>
            <Link to="/blog">
              <li
                onClick={() => clickHandler("Blog")}
                className={activeMobileNav === "Blog" && "active-nav"}
              >
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li
                onClick={() => clickHandler("Contact")}
                className={activeMobileNav === "Contact" && "active-nav"}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
