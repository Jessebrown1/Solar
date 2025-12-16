import React, { useEffect } from "react";
import "./About.css";
import ceo from "../../assets/ceo.jpg";
import head1 from "../../assets/head1.png";
import { Sun, Leaf, Shield, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
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
      {/* 🌞 HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${head1})` }}
      >
        <div className="overlay">
          <h1>About Us</h1>
          <p>Empowering Ghana through clean, renewable energy solutions.</p>
        </div>
      </section>

      {/* 🧭 OUR STORY */}
      <section className="story-section fade-in">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          Building a brighter, more sustainable future for generations to come.
        </p>
      </section>

      {/* 💡 ABOUT CONTENT */}
      <section className="about-section fade-in">
        <div className="about-container">
          <div className="about-text">
            <p>
              <strong>Rabenergy Solutions</strong> is a Ghanaian renewable energy
              company focused on providing clean, reliable, and affordable solar
              power solutions for homes, institutions, and businesses.
            </p>

            {/* 🎯 MISSION & VISION — EXACT WORDING */}
            <div className="mission-vision">
              <div className="mission-card">
                <Lightbulb className="mission-icon" />
                <h3>OUR MISSION</h3>
                <p>
                  Developing sustainable power solutions for people with little
                  or no access to power supply and to make people independent on
                  higher electricity bills
                </p>
              </div>

              <div className="mission-card">
                <Rocket className="mission-icon" />
                <h3>OUR VISION</h3>
                <p>
                  We remain committed to provide innovative, cost-effective
                  energy saving, environmentally friendly and reliable power;
                  renewable energy solutions to every Ghanaian and beyond
                </p>
              </div>
            </div>
          </div>

          {/* 👤 CEO */}
          <div className="about-image fade-in">
            <div className="ceo-frame">
              <img src={ceo} alt="CEO" />
            </div>
            <div className="ceo-info">
              <span className="subtitle">Meet Our Leader</span>
              <h3>Richmond </h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 OUR VALUES — EXACT WORDING */}
      <section className="values-section fade-in">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Leaf className="value-icon" />
            <h3>Sustainability</h3>
            <p>
              Commitment to reducing carbon footprints and promoting renewable
              energy.
            </p>
          </div>

          <div className="value-card">
            <Sun className="value-icon" />
            <h3>Innovation</h3>
            <p>
              Developing cutting-edge solar technologies and solutions.
            </p>
          </div>

          <div className="value-card">
            <Shield className="value-icon" />
            <h3>Integrity</h3>
            <p>
              Honest and transparent dealings with customers and partners.
            </p>
          </div>

          <div className="value-card">
            <Users className="value-icon" />
            <h3>Customer Focus</h3>
            <p>
              Providing reliable, affordable, and efficient solar solutions.
            </p>
          </div>

          <div className="value-card">
            <Rocket className="value-icon" />
            <h3>Community Impact</h3>
            <p>
              Supporting local communities and creating green jobs.
            </p>
          </div>

          <div className="value-card">
            <Shield className="value-icon" />
            <h3>Quality &amp; Safety</h3>
            <p>
              Ensuring high standards in products and installations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
