import React, { useEffect } from "react";
import "./Solutions.css";
import {
  Wrench,
  BatteryCharging,
  Sun,
  Settings,
  ClipboardCheck,
  Zap,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionsBg from "../../assets/solutionsBg.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="solutions-page">
      {/* 🌞 Header */}
      <section
        className="solutions-hero"
        style={{ backgroundImage: `url(${solutionsBg})` }}
      >
        <div className="overlay">
          <h1 className="fade-up">Our Solutions</h1>
          <p className="fade-up delay-1">
            Empowering Ghana with reliable and affordable solar energy systems
          </p>
        </div>
      </section>

      {/* ⚙️ Solutions Section */}
      <section className="solutions-section fade-up">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          We provide complete energy solutions from design to installation and maintenance.
        </p>

        <div className="solutions-grid">
          <div className="solution-card">
            <div className="icon-wrapper">
              <Sun className="solution-icon" />
            </div>
            <h3>Solar Installation</h3>
            <p>
              Expertly designed and installed solar systems customized for
              homes, schools, and industries.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon-wrapper">
              <Wrench className="solution-icon" />
            </div>
            <h3>Maintenance & Repairs</h3>
            <p>
              Comprehensive aftercare services ensuring your solar systems
              operate efficiently for years.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon-wrapper">
              <BatteryCharging className="solution-icon" />
            </div>
            <h3>Battery Systems</h3>
            <p>
              Reliable battery backup systems that guarantee power even during
              outages.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon-wrapper">
              <Settings className="solution-icon" />
            </div>
            <h3>Energy Consulting</h3>
            <p>
              Detailed energy audits and guidance to help you achieve maximum
              savings and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* 🕒 Timeline Section */}
      <section className="timeline-section fade-up">
        <h2 className="section-title">How Our Solutions Are Delivered</h2>
        <p className="section-subtitle">
          Our structured process ensures precision, safety, and efficiency.
        </p>

        <div className="timeline">
          <div className="timeline-line"></div>

          <div className="timeline-step">
            <ClipboardCheck className="timeline-icon" />
            <div className="timeline-content">
              <h3>Step 1: Assessment & Planning</h3>
              <p>
                We start with a detailed assessment of your energy needs and
                environment to determine your solar potential.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <Zap className="timeline-icon" />
            <div className="timeline-content">
              <h3>Step 2: System Design</h3>
              <p>
                Our engineers create a system blueprint using the latest solar
                design technologies.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <Wrench className="timeline-icon" />
            <div className="timeline-content">
              <h3>Step 3: Installation & Setup</h3>
              <p>
                Certified technicians install and configure your system for
                optimal power output and safety.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <ShieldCheck className="timeline-icon" />
            <div className="timeline-content">
              <h3>Step 4: Maintenance & Support</h3>
              <p>
                We provide consistent monitoring, maintenance, and customer
                support long after installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 CTA */}
      <section className="cta-section fade-up">
        <h2>Ready to go solar?</h2>
        <p>Let’s help you switch to clean energy and save more on electricity.</p>
        <button className="cta-btn">Get a Free Quote</button>
      </section>
    </div>
  );
};

export default Solutions;
