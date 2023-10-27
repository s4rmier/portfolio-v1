import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");

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
          <Link to="/">
            <li
              onClick={() => assignActiveClass("home")}
              className={activeNav === "home" && "active-nav"}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={() => assignActiveClass("about")}
              className={activeNav === "about" && "active-nav"}
            >
              About
            </li>
          </Link>
          <Link to="/projects">
            <li
              onClick={() => assignActiveClass("projects")}
              className={activeNav === "projects" && "active-nav"}
            >
              Projects
            </li>
          </Link>
          <Link to="/blog">
            <li
              onClick={() => assignActiveClass("blog")}
              className={activeNav === "blog" && "active-nav"}
            >
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => assignActiveClass("contact")}
              className={activeNav === "contact" && "active-nav"}
            >
              Contact
            </li>
          </Link>
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
