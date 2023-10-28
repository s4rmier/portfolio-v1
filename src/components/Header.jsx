import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLink from "./NavLink";

export default function Header() {
  const [activeNav, setActiveNav] = useState("home");

  function assignActiveClass(navItem) {
    setActiveNav(navItem);
  }

  return (
    <header>
      <nav className="container flex-row align">
        <Link to="/">
          <div
            onClick={() => assignActiveClass("home")}
            className="nav-brand flex-row align justify"
          >
            <img src="/logo-light.svg" alt="" />
            <h2 className="brand-name">
              ROMNICK<span>.DEV</span>
            </h2>
          </div>
        </Link>
        <ul className="nav-link flex-row align justify">
          <NavLink
            url="/"
            label="Home"
            isActive={activeNav === "home"}
            clickHandler={() => assignActiveClass("home")}
          />
          <NavLink
            url="/about"
            label="About"
            isActive={activeNav === "about"}
            clickHandler={() => assignActiveClass("about")}
          />
          <NavLink
            url="/projects"
            label="projects"
            isActive={activeNav === "projects"}
            clickHandler={() => assignActiveClass("projects")}
          />
          <NavLink
            url="/blog"
            label="blog"
            isActive={activeNav === "blog"}
            clickHandler={() => assignActiveClass("blog")}
          />
          <NavLink
            url="/contact"
            label="contact"
            isActive={activeNav === "contact"}
            clickHandler={() => assignActiveClass("contact")}
          />
        </ul>
        <ul className="nav-socials flex-row justify align">
          <li>
            <a href="https://github.com/s4rmier" target="blank_">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/romnick-sarmiento-907067251/"
              target="blank_"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="mailto:s4rmier@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
