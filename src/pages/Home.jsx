import Header from "../components/Header";
import "../styles/Home.css";

import bg from "../assets/bg.png";
import githubIcon from "../assets/github.png";
import locationIcon from "../assets/google-maps.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import gmailIcon from "../assets/gmail.png";

import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");

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
        <section
          className="hero"
          style={{ backgroundImage: `url(${bg})` }}
        >
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
                rel="noopener noreferrer"
                className="btn github"
              >
                <img src={githubIcon} alt="GitHub" />
                GitHub
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1J-P0ewU9HdB0hYXiIZ9-kiycxcnKQt08"
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

              <a
                href="mailto:singhmanash540gmail@gmail.com"
                className="circle"
              >
                <img src={gmailIcon} alt="Gmail" />
              </a>

              <a
                href="https://www.linkedin.com/in/Manash Prajapati/"
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


      
      <section className="about">
        <div className="Box4">
          <div className="column4">
            <div className="row4">
             <p>Tect Skills</p>
             <button>
              View All
             </button>
            </div>

            <div className="row5">
              <div className="cbox1">

              </div>

              <div className="cbox2">
                
              </div>

              <div className="cbox53">
                
              </div>

              <div className="cbox4">
                
              </div>

              <div className="cbox5">
                
              </div>






            </div>




          </div>
        </div>
      </section>





      </main>
    </>
  );
}

export default Home;