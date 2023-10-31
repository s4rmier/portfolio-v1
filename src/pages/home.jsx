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
        <div className="container flex-col">
          <h2>A glimpse of who I am</h2>
          <div className="card-container flex-row">
            <div className="about-cards flex-row">
              <figure className="card-items flex-col">
                <img src="/veteran.png" alt="" />
                <figcaption className="flex-col">
                  <h3>A Navy Veteran</h3>
                  <p>
                    As a seasoned Navy veteran, I've sailed through the high
                    seas of service with unwavering dedication. Now, I anchor my
                    journey in the waters of civilian life, bringing the same
                    commitment to every challenge life throws my way
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="about-cards flex-row">
              <figure className="card-items flex-col">
                <img src="/dad.png" alt="" />
                <figcaption className="flex-col">
                  <h3>Captain of the Crib</h3>
                  <p>
                    As the proud captain of the crib, I lead a tiny crew with
                    boundless love, humor, and an arsenal of dad jokes. It's a
                    joyful voyage, full of laughter and love
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="about-cards flex-row">
              <figure className="card-items flex-col">
                <img src="/coding.png" alt="" />
                <figcaption className="flex-col">
                  <h3>A Webaholic</h3>
                  <p>
                    Embracing my role as a webaholic, I passionately craft
                    digital dreams and navigate the vast online world. One line
                    of code at a time, I'm addicted to the internet's endless
                    possibilities
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <h2 className="stack-title">My Tech Arsenal</h2>
          <div className="stack-container flex-row align justify">
            <Skill img={"/html.webp"} label={"HTML"} />
            <Skill img={"/css.webp"} label={"CSS"} />
            <Skill img={"/js.png"} label={"JS"} />
            <Skill img={"/gsap.svg"} label={"GSAP"} />
            <Skill img={"/scss.png"} label={"SASS"} />
            <Skill img={"/django.png"} label={"Django"} />
            <Skill img={"/python.png"} label={"Python"} />
            <Skill img={"/react.png"} label={"React"} />
          </div>
        </div>
      </section>

      <section className="education">
        <div className="container">
          <h2>My Academic Canvas</h2>
          <div className="academic-container flex-row justify">
            <div className="academic-item">
              <h3>Systems Technology Institute</h3>
              <h4>AS in Computer Technology</h4>
              <p>
                <strong>Jul 06 - Apr 08</strong>
              </p>
              <p className="description">
                This course focuses in computer programming and basic computer
                fundamentals. We've explored the early computer programming
                languages such as C#, C++, Visual Basic and Java.
              </p>
              <ul className="skillset flex-row">
                <li>Computer Programming</li>
                <li>Data Structures</li>
                <li>Operating Systems</li>
                <li>Logic Design</li>
              </ul>
            </div>
            <div className="academic-item">
              <h3>Platt College San Diego</h3>
              <h4>AA in Graphics Design</h4>
              <p>
                <strong>Nov 21 - Feb 23</strong>
              </p>
              <p className="description">
                Platt College is a design school. The degree program heavily
                emphasizes design principles such as CRAP (Contrast, Repetition,
                Alignment, and Proximity). My intention was to finish the BA in
                Media Arts (Web Design Major) but unfortunately, the school
                closed after I obtained my Associates Degree.
              </p>
              <ul className="skillset flex-row">
                <li>Digital Production</li>
                <li>Design Principles</li>
                <li>Typography</li>
                <li>Web Development</li>
                <li>UI Design</li>
              </ul>
            </div>
            <div className="academic-item">
              <h3>San Diego Global Knowledge University</h3>
              <h4>Cert in Full-Stack Development</h4>
              <p>
                <strong>Jun 23 - Dec 23</strong>
              </p>
              <p className="description">
                This program is similar to what people refer to as a "Coding
                Bootcamp". Their immersive full stack development program
                encompasses many phases of software life cycle and development
                covering the front-end, "middle-end", and back-end of a website
                or a full pledged web application.
              </p>
              <ul className="skillset flex-row">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Django</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h2>What I've been up to</h2>
          <div className="projects-container flex-col align">
            <figure className="project-item flex-row">
              <img src="/urbanbikes.png" alt="" />
              <figcaption>
                <h3>Urban Bikes Co</h3>
                <p>
                  A Cutting-Edge Single-Page React Application powered by Python
                  API integration with MongoDB for seamless data delivery.
                  Please note that, as the API is not hosted, certain features
                  may experience limitations.
                </p>
                <ul className="skillset flex-row">
                  <li>React</li>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>SCSS</li>
                  <li>Mongo DB</li>
                </ul>
                <div className="button-set flex-row">
                  <button className="button">
                    <a
                      href="https://github.com/s4rmier/fsdi-107-110-bike-shop"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>Github Repo
                    </a>
                  </button>
                  <button className="button">
                    <a
                      href="https://fsdi-107-110-bike-shop.netlify.app"
                      target="_blank"
                    >
                      <i class="fa-solid fa-globe"></i>Live Demo
                    </a>
                  </button>
                </div>
              </figcaption>
            </figure>
            <figure className="project-item flex-row">
              <img src="/petzzarria.png" alt="" />
              <figcaption>
                <h3>Petzzarria</h3>
                <p>
                  Petzzarria is a simple, straightforward HTML, CSS and JS
                  project focused on utilizing the local storage to save,
                  retrieve, and render data to support certain front-end
                  functionalities.
                </p>
                <ul className="skillset flex-row">
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                </ul>
                <div className="button-set flex-row">
                  <button className="button">
                    <a
                      href="https://github.com/s4rmier/fsdi104-pet-salon"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>Github Repo
                    </a>
                  </button>
                  <button className="button">
                    <a
                      href="https://fsdi104-pet-salon.netlify.app"
                      target="_blank"
                    >
                      <i class="fa-solid fa-globe"></i>Live Demo
                    </a>
                  </button>
                </div>
              </figcaption>
            </figure>
            <figure className="project-item flex-row">
              <img src="/portfolio.png" alt="" />
              <figcaption>
                <h3>Romnick.dev</h3>
                <p>
                  This is a portfolio project developed in React not only to
                  showcase my skills and projects but also to serve as a
                  platform for my online presence.{" "}
                </p>
                <ul className="skillset flex-row">
                  <li>React</li>
                  <li>Javascript</li>
                  <li>SCSS</li>
                </ul>
                <div className="button-set flex-row">
                  <button className="button">
                    <a
                      href="https://github.com/s4rmier/react-portfolio-v1"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>Github Repo
                    </a>
                  </button>
                  <button className="button">
                    <a href="https://romnick.dev/" target="_blank">
                      <i class="fa-solid fa-globe"></i>Live Demo
                    </a>
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h2>My Corner of the Web</h2>
          <div className="blog-container flex-row justify">
            <figure className="flex-col featured-post">
              <img src="/application.png" alt="" />
              <figcaption className="flex-col">
                <h3>
                  Is It Too Late to Become a Junior Web Developer in 2023?
                  (Spoiler: No!)
                </h3>
                <p className="author">
                  by <span>Romnick Sarmiento</span> on Oct 30
                </p>
                <h4>
                  Web development is a rapidly growing field, and the demand for
                  junior web developers is high. But with so many people vying
                  for these jobs, it's natural to wonder if it's too late to get
                  started in 2023.
                </h4>
                <button className="button">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Read
                  More
                </button>
              </figcaption>
            </figure>
            <div className="other-posts flex-col">
              <figure className="flex-row">
                <img className="other-blog-img30" src="/ux.webp" alt="" />
                <figcaption>
                  <Link>
                    <h3>
                      Revolutionizing the User Experience: The Power of Modern
                      Web Development Trends
                    </h3>
                  </Link>
                </figcaption>
              </figure>
              <figure className="flex-row">
                <img className="other-blog-img30" src="/mobile.webp" alt="" />
                <figcaption>
                  <Link>
                    <h3>
                      The Impact of Mobile-First Web Design and Its Role in
                      Crafting Exceptional User Experiences
                    </h3>
                  </Link>
                </figcaption>
              </figure>
              <figure className="flex-row">
                <img
                  className="other-blog-img30"
                  src="/serverless.avif"
                  alt=""
                />
                <figcaption>
                  <Link>
                    <h3>
                      The Magic of Serverless Architecture: Crafting Scalable
                      and Cost-Efficient Web Solutions
                    </h3>
                  </Link>
                </figcaption>
              </figure>
              <figure className="flex-row">
                <img className="other-blog-img30" src="/seo.jpeg" alt="" />
                <figcaption>
                  <Link>
                    <h3>
                      The Power of SEO-Driven Web Development: Boosting Internet
                      Visibility and Engagement
                    </h3>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
