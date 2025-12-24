import React, { useEffect } from "react";
import "./About.css";
import ceo from "../../assets/ceo.jpg";
import about from "../../assets/about.jpeg";
import inst1 from "../../assets/inst1.jpeg";
import zz from "../../assets/zz.jpeg";
import pat1 from "../../assets/pat1.jpg";
import pat2 from "../../assets/pat2.png";
import pat3 from "../../assets/pat3.jpg";
import pat4 from "../../assets/pat4.png";
import pat5 from "../../assets/pat5.jpg";
import pat6 from "../../assets/pat6.jpg";
import pat7 from "../../assets/pat7.png";


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
        style={{ backgroundImage: `url(${about})` }}
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
            <strong>Rab Energy Solutions  </strong>is one of the leading backup and renewable energy companies in Ghana. We are an indigenous Limited Liability company with more than ten years of experience in the renewable energy business. We design and integrate solutions that cut across all levels of energy demand; ranging from small households’ solar hybrid systems to mini solar grid systems for rural electriﬁcation and industrial power backup systems.
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








      {/* ===== WHO WE ARE ===== */}
      <section className="profile-section">
        <div className="two-column">
          <div className="text-content">
            <h2>Who We Are</h2>
            <p>
              RAB Energy Solutions is a renewable energy company committed to
              delivering innovative, cost-effective, and reliable power
              solutions for residential, commercial, and industrial clients.
            </p>
            <p>
              Together, we have successfully installed over{" "}
              <strong>1.5MW of rooftop solar systems</strong>, and we continue to
              expand our impact through strong global partnerships and local
              expertise.
            </p>
          </div>

          <div className="image-content">
            <img src={inst1} alt="Rab Energy Team" />
          </div>
        </div>
      </section>

      {/* ===== COMPANY ORGANOGRAM ===== */}
<section className="profile-section section-soft">
  <h2 className="center">Company Organogram</h2>

  <div className="org-tree">
    <ul>
      <li>
        <div className="org-box top">Board of Directors</div>
        <ul>
          <li>
            <div className="org-box">Managing Director</div>
            <ul className="org-level">
              <li>
                <div className="org-box">Technical Manager</div>
                <ul>
                  <li><div className="org-box small">Design & Costing</div></li>
                  <li><div className="org-box small">Technical Team</div></li>
                </ul>
              </li>

              <li>
                <div className="org-box">Administrator</div>
                <ul>
                  <li><div className="org-box small">Sales/Marketing</div></li>
                </ul>
              </li>

              <li>
                <div className="org-box">Accounts</div>
              </li>

              <li>
                <div className="org-box">Operations</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>

      {/* ===== CLIENTS ===== */}
      <section className="profile-section section-soft">
        <div className="two-column reverse">
          <div className="image-content">
            <img src={zz} alt="Our Clients" />
          </div>

          <div className="text-content">
            <span className="section-tag">Trusted By</span>
            <h2>Our Clients Database</h2>

            <h4 class="section-subheader">We have been working closely with</h4>

            <ul className="styled-list">
              <li>Energy Commission of Ghana (ECG)</li>
              <li>Salicru Energy</li>
              <li>Teltonika Energy</li>
            </ul>

            <h4 class="section-subheader">Some clientele base for your reference</h4>
            <ul className="styled-list two-col-list">
              <li>Akroma Plaza Hotel – Takoradi</li>
              <li>Raybow Hotel – Takoradi</li>
              <li>Eagles Next Hotel – Tarkwa</li>
              <li>Grand Favor Hotel – Takoradi</li>
              <li>Rhogem Lodge – Takoradi</li>
              <li>BoyBoison Lodge – Takoradi</li>
              <li>Wanmafe Company Cold Store – Tema</li>
              <li>Ahantaman Rural Bank – Agona</li>
              <li>TF Financial Services – Takoradi</li>
              <li>Vans International Real Estate – Nationwide</li>
              <li>Watch Tower – Countrywide</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ===== WHAT WE DO ===== */}
      <section className="profile-section">
        <h2 className="center">What We Do</h2>

        <blockquote>
          “We remain committed to providing innovative, cost-effective,
          environmentally friendly and reliable renewable energy and e-mobility
          solutions to every Ghanaian and beyond.”
        </blockquote>

        <ul className="styled-list two-col-list">
          <li>Solar & wind system design and installation</li>
          <li>Inverter & battery system sizing and installation</li>
          <li>UPS, AVR, stabilizers & transformers</li>
          <li>Solar boreholes and irrigation systems</li>
          <li>Solar street lighting projects</li>
          <li>Solar water heating & pumping systems</li>
          <li>Solar CCTV (Wi-Fi, 4G/5G)</li>
          <li>E-Mobility & EV chargers</li>
          <li>Energy audits, training & consultancy</li>
        </ul>
      </section>


      {/* ===== PARTNERS ===== */}
<section className="profile-section section-soft">
  <div className="center">
    <h2>Our Partners</h2>
    <p className="section-subtitle">
      We work with trusted technology and energy partners to deliver reliable
      and innovative power solutions.
    </p>
  </div>

  <div className="partners-grid">
    <div className="partner-card">
      <img src={pat2} alt="Salicru Energy" />
      <p>Salicru Energy</p>
    </div>

    <div className="partner-card">
      <img src={pat1} alt="Teltonika Energy" />
      <p>Teltonika Energy</p>
    </div>

    <div className="partner-card">
      <img src={pat3} alt="Solar Technology Partner" />
      <p>Sinovo Technology Partner</p>
    </div>

    <div className="partner-card">
      <img src={pat4} alt="Battery Solutions Partner" />
      <p>Deye Inverter Technology </p>
    </div>

    <div className="partner-card">
      <img src={pat5} alt="Inverter Manufacturer" />
      <p>DKing Power Co</p>
    </div>

    <div className="partner-card">
      <img src={pat6} alt="EV Infrastructure Partner" />
      <p>Tosun Electric </p>
    </div>

    <div className="partner-card">
      <img src={pat7} alt="Energy Monitoring Partner" />
      <p>Jinko Solar</p>
    </div>
  </div>
</section>



    </div>
  );
};

export default About;
