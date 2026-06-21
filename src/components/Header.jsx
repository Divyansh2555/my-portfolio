import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="logo">My Portfolio</div>

            <nav>
                <ul className="nav-links">
                    <li><a href="home">Home</a></li>

                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;