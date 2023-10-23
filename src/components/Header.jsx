import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container flex-row align">
        <Link to="/">
          <div className="nav-brand flex-row align">
            <img src="/logo.svg" alt="" />
            <h2 className="brand-name">
              ROMNICK<span>.DEV</span>
            </h2>
          </div>
        </Link>
        <ul className="nav-link flex-row align justify">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
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
      </nav>
    </header>
  );
}
