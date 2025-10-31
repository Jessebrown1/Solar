import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo3 from '../../assets/logo3.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logo3} alt="SolarTech Logo" className="logo-img" />
        </Link>

        {/* Nav Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Close button visible only on mobile */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
              ✖
            </div>
          )}

          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About Us</Link>

          <div className="dropdown">
  <button
    className="dropdown-toggle"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    Services ▾
  </button>
  {isDropdownOpen && (
    <div className="dropdown-menu">
      <Link to="/products" onClick={handleLinkClick}>Products</Link>
      <Link to="/documentation" onClick={handleLinkClick}>Documentation</Link>
    </div>
  )}
</div>


          <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        {!isMobileMenuOpen && (
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
            ☰
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
