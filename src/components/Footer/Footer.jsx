import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log("ScrollToTop visible:", isVisible); // ✅ Debug check

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Rabenergy Solutions</h3>
            <p>
              Powering Ghana with sustainable, reliable, and affordable solar
              energy solutions for homes, businesses, and industries.
            </p>

            <div className="footer-socials">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li><MapPin size={18} /> Tema, Accra, Ghana</li>
              <li><Phone size={18} /> +233 552 384 351</li>
              <li><Mail size={18} /> info@rabenergy.com</li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay updated with our latest solar solutions and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rabenergy Solutions. All rights reserved.</p>
        </div>
      </footer>

      {/* ✅ Scroll-to-Top Button */}
      {isVisible && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Footer;
