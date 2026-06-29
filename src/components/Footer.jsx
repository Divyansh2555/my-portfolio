import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

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
        <h3>Follow Us</h3>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘
          </a>

          <a
            href="https://www.instagram.com/divyan.sh255"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>

          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✈️
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;