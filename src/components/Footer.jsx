import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

import githubIcon from "../assets/github.png";
import locationIcon from "../assets/google-maps.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import gmailIcon from "../assets/gmail.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Company */}
        <div className="footer-section">
          <h2>🚀 Divyansh</h2>
          <p>Full Stack Developer</p>
          <p>© 2026 All Rights Reserved.</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <p>Web Design</p>
          <p>Web Development</p>
          <p>React Development</p>
          <p>Java Development</p>
          <p>UI / UX Design</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/skill">Skills</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

      </div>

      {/* Bottom */}
      <div className="social-section">
        <h3>Connect with us</h3>

        <div className="social-icons">

          {/* GitHub */}
          <a
            href="https://github.com/divyansh2555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/divyan.sh255"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/posts/divyanshu-prajapati-148258328_internpe-uiux-figma-ugcPost-7477276635994476544-WzWh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKeY8gBR8gej_dosRxBHqn1Ygr7nHTIXiQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

          {/* Gmail */}
          <a href="mailto:singhmanash540@gmail.com">
            <img src={gmailIcon} alt="Gmail" />
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Bareilly,India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={locationIcon} alt="Location" />
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;