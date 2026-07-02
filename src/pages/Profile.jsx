import "../styles/Profile.css";
import profileImg from "../assets/dpimage.jpg";
import { NavLink } from "react-router-dom";



function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-container">

        {/* LEFT TEXT */}
        <div className="profile-text">

          <h2 className="tag">👋 Hello, I'm</h2>
          <h1 className="name">Divyansh</h1>

          <p className="role">
            Software Engineer | Full Stack Developer
          </p>


          <p className="bio">
            I build modern, responsive and high-performance web applications
            using React, Node.js, Express and MongoDB.
          </p>

          <p className="skills">
            React • Node.js • Express • MongoDB • JavaScript
          </p>

          {/* BUTTONS */}
          <div className="buttons">

            <a
              href="https://drive.google.com/file/d/1J-P0ewU9HdB0hYXiIZ9-kiycxcnKQt08/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Download CV
            </a>

            <NavLink
                  to="/contact"
                  className="view-all-link"
                  style={{ textDecoration: "none" }}
                >
                  Contact Me
                </NavLink>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="profile-image-box">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>

      </div>

    </div>
  );
}

export default Profile;