import React from "react";
import "./Solutions.css";
import heroBg from "../../assets/solutionsBg.jpeg";
import him from "../../assets/him.jpeg";
import zz from "../../assets/zz.jpeg";

const OurProfile = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
  className="profile-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="profile-overlay">
    <h1>Our Profile</h1>
    <p>
      Driving sustainable, reliable, and innovative renewable energy
      solutions across Ghana and beyond.
    </p>
  </div>
</section>


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
            <img src={him} alt="Rab Energy Team" />
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

            <h4>We have been working closely with</h4>
            <ul className="styled-list">
              <li>Energy Commission of Ghana (ECG)</li>
              <li>Salicru Energy</li>
              <li>Teltonika Energy</li>
            </ul>

            <h4>Some clientele base for your reference</h4>
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
    </>
  );
};

export default OurProfile;
