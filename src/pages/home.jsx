import Skill from "../components/Skill";
import "../css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home-page">
      <section className="hero container flex-row align justify">
        <div className="headline flex-col">
          <h1>
            <span className="small">Hi, I'm Romnick!</span>I'm a Web{" "}
            <span className="color desinger">Designer</span> and Full-Stack{" "}
            <span className="color">Developer</span>
          </h1>
          <p>
            I'm committed to writing clean, reusable, semantically sound code,
            along with creating a hand-crafted interface that follows good UI &
            UX design principles.
          </p>
        </div>
        <img src="/hero-bg.png" alt="" />
      </section>
      <section className="about">
        <div className="container flex-col align">
          <h2>My Tech Stack</h2>
          <div className="stack-container flex-row align justify">
            <Skill img={"/html.webp"} label={"HTML"} />
            <Skill img={"/css.webp"} label={"CSS"} />
            <Skill img={"/js.png"} label={"JS"} />
            <Skill img={"/gsap.svg"} label={"GSAP"} />
            <Skill img={"/scss.png"} label={"SCSS"} />
            <Skill img={"/django.png"} label={"Django"} />
            <Skill img={"/python.png"} label={"Python"} />
            <Skill img={"/react.png"} label={"React"} />
          </div>
          <Link to="/about">
            <p>
              About Me <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
