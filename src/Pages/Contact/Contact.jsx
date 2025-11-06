import React from "react";
import "./Contact.css";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import contact from "../../assets/contact.jpg"; // ✅ Import background image

const Contact = () => {
  return (
    <section className="contact-page">
      {/* 🌞 Hero Section */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you — let’s power your future with solar energy.</p>
        </div>
      </div>

      {/* 🧭 Contact Info & Form */}
      <div className="contact-container">
        {/* 📞 Info Section */}
        <div className="contact-info fade-up">
          <h2>Contact Information</h2>
          <p>Reach out for quotes, questions, or partnerships — we’re here to help.</p>

          <div className="info-item">
            <Phone className="icon" />
            <span>+233 55 123 4567</span>
          </div>

          <div className="info-item">
            <Mail className="icon" />
            <span>info@rabenergy.com</span>
          </div>

          <div className="info-item">
            <MapPin className="icon" />
            <span>Tema, Accra, Ghana</span>
          </div>

          <div className="info-item">
            <Clock className="icon" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>

          {/* 💬 WhatsApp Button */}
          <a
            href="https://wa.me/233551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <MessageCircle className="icon" />
            Chat With Us
          </a>
        </div>

        {/* ✉️ Form Section */}
        <form className="contact-form fade-up">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* 🗺️ Google Map Section */}
      <div className="map-container fade-up">
        <h2>Find Us Here</h2>
        <iframe
          title="Rabenergy Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.006015624178!2d-0.01667482501515327!3d5.668098232688084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bf06a8353b7%3A0xd53bb7cb4021e89f!2sTema%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1706654789044!5m2!1sen!2sgh"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
