import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo3 from "../../assets/logo3.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logo3} alt="SolarTech Logo" className="logo-img" />
        </Link>

        {/* Nav Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {isMobileMenuOpen && (
            <div
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✖
            </div>
          )}

          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
          <Link to="/solutions" onClick={handleLinkClick}>
            Solutions
          </Link>
          <Link to="/products" onClick={handleLinkClick}>
            Products
          </Link>
          <Link to="/gallery" onClick={handleLinkClick}>
            Gallery
          </Link>
          <Link to="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        {!isMobileMenuOpen && (
          <div
            className="mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
