import "../css/home.css";

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
            I prioritize writing clean, reusable, semantically sound code, along
            with creating a hand-crafted interface that follows good UI & UX
            design principles.
          </p>
        </div>
        <img src="/hero-bg.png" alt="" />
      </section>
      <section className="about">
        <div className="container flex-col"></div>
      </section>
    </div>
  );
}
