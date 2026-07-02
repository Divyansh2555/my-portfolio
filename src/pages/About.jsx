import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";
import pbga from "../assets/images/pbga.png";

function About() {
  return (
    <>
      <Header />

      <main className="about" >

        {/* HERO SECTION */}
        <section className="about-hero">

          <div className="hero-left">
            <p className="hello">Hi, I'm</p>
            <h1>Divyansh</h1>
            <h3>Full Stack Developer</h3>
          </div>

          <div className="hero-right">
            <img src={pbga} alt="Divyansh Singh" />
          </div>

        </section>

        {/* STATS SECTION */}
        <section className="stats">

          <div className="stat-card">
            <span>💻</span>
            <div>
              <h2>20+</h2>
              <p>Projects</p>
            </div>
          </div>

          <div className="stat-card">
            <span>👨‍💻</span>
            <div>
              <h2>2+</h2>
              <p>Learning</p>
            </div>
          </div>

          <div className="stat-card">
            <span>⏳</span>
            <div>
              <h2>1000+</h2>
              <p>Coding Hours</p>
            </div>
          </div>

          <div className="stat-card">
            <span>🚀</span>
            <div>
              <h2>Always</h2>
              <p>Improving</p>
            </div>
          </div>

        </section>

        {/* EDUCATION SECTION */}
        <section className="education">

          <h2 className="education-title">🎓 Education</h2>

          <div className="edu-container">

            <div className="edu-card">
              <div className="edu-year">2024 - 2027</div>
              <div className="edu-degree">BCA</div>
              <div className="edu-college">MJPRU University</div>
              <div className="edu-score">CGPA: 7.51</div>
            </div>

            <div className="edu-card">
              <div className="edu-year">2023 - 2024</div>
              <div className="edu-degree">12th (Maths)</div>
              <div className="edu-college">UMIC, Uttar Pradesh</div>
              <div className="edu-score">73.54%</div>
            </div>

            <div className="edu-card">
              <div className="edu-year">2021 - 2022</div>
              <div className="edu-degree">10th</div>
              <div className="edu-college">UMIC, Uttar Pradesh</div>
              <div className="edu-score">79.33%</div>
            </div>

          </div>

        </section>

      </main>

    </>
  );
}

export default About;