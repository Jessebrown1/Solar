import React, { useEffect } from "react";
import "./About.css";
import ceo from "../../assets/ceo.jpg";
import head1 from "../../assets/head1.png";
import { Sun, Leaf, Shield, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  // 👇 Animate on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero" style={{ backgroundImage: `url(${head1})` }}>
        <div className="overlay">
          <h1>About Us</h1>
          <p>Empowering Ghana through clean, renewable energy solutions.</p>
        </div>
      </section>

      <section className="story-section fade-in">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          Building a brighter, more sustainable future for generations to come.
        </p>
      </section>

      <section className="about-section fade-in">
        <div className="about-container">
          <div className="about-text">
            <p>
              <strong>Rabenergy Solutions</strong> is Ghana’s trusted solar
              energy provider, focused on delivering clean, reliable, and
              affordable power systems for homes, institutions, and businesses.
              We believe renewable energy is the foundation for a sustainable
              and self-reliant future.
            </p>
            <p>
              Our experienced team has successfully installed numerous solar
              systems across the country — combining expertise, quality, and
              innovation to deliver lasting results that empower communities.
            </p>

            <div className="mission-vision">
              <div className="mission-card">
                <Lightbulb className="mission-icon" />
                <h3>Our Mission</h3>
                <p>
                  To lead Ghana’s transition to sustainable energy through
                  innovation, education, and reliable solar technologies.
                </p>
              </div>

              <div className="mission-card">
                <Rocket className="mission-icon" />
                <h3>Our Vision</h3>
                <p>
                  To become Africa’s most trusted provider of clean energy
                  solutions — inspiring change, one home at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image fade-in">
            <div className="ceo-frame">
              <img src={ceo} alt="CEO" />
            </div>
            <div className="ceo-info">
              <span className="subtitle">Meet Our Leader</span>
              <h3>Kwame Rabena</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section fade-in">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Shield className="value-icon" />
            <h3>Integrity</h3>
            <p>
              We act with honesty and transparency, ensuring every project
              reflects our commitment to trust and reliability.
            </p>
          </div>

          <div className="value-card">
            <Sun className="value-icon" />
            <h3>Innovation</h3>
            <p>
              Constantly exploring new solar technologies to deliver smart,
              efficient, and sustainable energy solutions.
            </p>
          </div>

          <div className="value-card">
            <Users className="value-icon" />
            <h3>Customer Focus</h3>
            <p>
              Our clients are at the heart of everything we do — we listen,
              customize, and deliver excellence.
            </p>
          </div>

          <div className="value-card">
            <Leaf className="value-icon" />
            <h3>Sustainability</h3>
            <p>
              Our mission extends beyond energy — it’s about protecting the
              planet and securing a greener tomorrow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
