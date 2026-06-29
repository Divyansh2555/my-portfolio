import Header from "../components/Header";
import "../styles/Home.css";
import bg from "../assets/bg.png";
import githubIcon from "../assets/github.png";
import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "I'm a Full Stack Developer |";
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        i = 0;
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main className="home-main">
        <section
          className="hero"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* LEFT SIDE */}
          <div className="box2">
            <p className="hello">Hi, I'm</p>

            <h1 className="name">
              Divyansh <span>Singh</span>
            </h1>

            <div className="typing">{text}</div>

            <div className="desc">
              <p>Building scalable web applications.</p>
              <p>Creating clean and user-friendly experiences.</p>
              <p>Turning ideas into reality.</p>
              <p>Always learning and growing.</p>
            </div>

            <div className="btn-group">
              <a
                href="https://github.com/divyansh2555"
                target="_blank"
                rel="noreferrer"
                className="btn github"
              >
                <img src={githubIcon} alt="github" />
                GitHub
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1J-P0ewU9HdB0hYXiIZ9-kiycxcnKQt08"
                target="_blank"
                rel="noreferrer"
                className="btn cv"
              >
                ⬇ Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="box3">
            <div className="social-box">
              <button className="circle email">📧</button>
              <button className="circle facebook">📘</button>
              <button className="circle chat">💬</button>
              <button className="circle laptop">💻</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;