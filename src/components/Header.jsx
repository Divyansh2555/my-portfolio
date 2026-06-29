import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h2>
          Divyansh<span className="heart">❤️</span>
        </h2>
      </div>

      {/* Hamburger Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/skill" onClick={() => setMenuOpen(false)}>
          Skills
        </NavLink>

        <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
          Profile
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;