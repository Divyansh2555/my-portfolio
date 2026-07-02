import Header from "../components/Header";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";

import bg from "../assets/bg.png";
import githubIcon from "../assets/github.png";
import locationIcon from "../assets/google-maps.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import gmailIcon from "../assets/gmail.png";

// skill icons
import cIcon from "../assets/c.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import flutterIcon from "../assets/flutter.png";
import pythonIcon from "../assets/python.png";
import fastapiIcon from "../assets/fastapi.png";
import cicdIcon from "../assets/cicd.png";
import dockerIcon from "../assets/docker.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fullText = "I'm a Full Stack Developer |";
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) i = 0;
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main className="home-main">

        {/* HERO SECTION */}
        <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
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
                href="https://drive.google.com/file/d/1i1lvesyhAyro5nlqDWxEWdUhJOmNaAmd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                📱 Download App
              </a>


              <a
                href="https://drive.google.com/file/d/1J-P0ewU9HdB0hYXiIZ9-kiycxcnKQt08/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn cv"
              >
                ⬇ Download CV
              </a>
            </div>

            <div className="social-box">
              <a
                href="https://maps.google.com/?q=Bareilly,India"
                target="_blank"
                rel="noopener noreferrer"
                className="circle"
              >
                <img src={locationIcon} alt="Location" />
              </a>

              <a href="mailto:singhmanash540@gmail.com" className="circle">
                <img src={gmailIcon} alt="Gmail" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyansh-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="circle"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>

              <a
                href="https://www.instagram.com/divyan.sh255/"
                target="_blank"
                rel="noopener noreferrer"
                className="circle"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT / SKILLS SECTION */}
        <section className="about" style={{ background: "#edf8fa" }}>
          <div className="Box4">
            <div className="column4">

              <div className="row4">
                <p>Tech Skills</p>

                {/* FIXED VIEW ALL LINK */}
                <NavLink
                  to="/skill"
                  className="view-all-link"
                  style={{ textDecoration: "none" }}
                >
                  View All
                </NavLink>

              </div>

              {/* SKILLS LIST */}
              <div className="row5 skills-scroll">

                <div className="cbox1">
                  <img src={cIcon} alt="C" />
                  <p>C</p>
                </div>

                <div className="cbox2">
                  <img src={jsIcon} alt="JavaScript" />
                  <p>JavaScript</p>
                </div>

                <div className="cbox3">
                  <img src={reactIcon} alt="React" />
                  <p>React</p>
                </div>

                <div className="cbox4">
                  <img src={flutterIcon} alt="Flutter" />
                  <p>Flutter</p>
                </div>

                <div className="cbox5">
                  <img src={pythonIcon} alt="Python" />
                  <p>Python</p>
                </div>

                <div className="cbox6">
                  <img src={fastapiIcon} alt="FastAPI" />
                  <p>FastAPI</p>
                </div>

                <div className="cbox7">
                  <img src={cicdIcon} alt="CI/CD" />
                  <p>CI/CD</p>
                </div>

                <div className="cbox8">
                  <img src={dockerIcon} alt="Docker" />
                  <p>Docker</p>
                </div>

              </div>

            </div>
          </div>
        </section>











        <section className="sec3">

          <div className="sec3b1">
            <div className="sec3b1ci">

              <iframe
                className="sec3map"
                src="https://www.google.com/maps?q=Bareilly&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>
          </div>

        </section>




















      </main>
    </>
  );
}

export default Home;