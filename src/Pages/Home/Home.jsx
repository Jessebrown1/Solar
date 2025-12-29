import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import head1 from "../../assets/head1.mp4";

import { Link } from "react-router-dom";

import { Award, Layers, Globe, MapPin, ShieldCheck } from "lucide-react";

import panel1 from "../../assets/panel1.jpeg"
import batt from "../../assets/batt.jpeg"
import supp from "../../assets/supp.jpeg"

import batt2 from "../../assets/batt2.jpg"
import solarpp from "../../assets/solarpp.jpg"
import proj1 from "../../assets/proj1.jpeg"
import proj2 from "../../assets/proj2.jpeg"
import proj3 from "../../assets/proj3.jpg"
import avr from "../../assets/avr.jpg";

import ImpactStats from "../../components/ImpactStats.jsx";


import { ChevronLeft, ChevronRight } from "lucide-react";



const Home = () => {
  const [current, setCurrent] = useState(0);

  const products = [
    {
      image: solarpp,
      title: "High-Efficiency Solar Panels",
      desc: "Capture maximum sunlight with premium photovoltaic panels.",
    },
    {
      image: batt2,
      title: "Solar Battery Systems",
      desc: "Store solar energy for uninterrupted power, day or night.",
    },
    {
      image: avr,
      title: "Smart Inverters",
      desc: "Convert solar power efficiently for everyday use.",
    }
  ];
  

  const statsData = [
    { label: "Homes Powered", value: 800, suffix: "+" },
    { label: "Renewable Energy", value: 100, suffix: "%" },
    { label: "Years Experience", value: 15, suffix: "+" },
  ];

  const [ setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    if (!animate) return;

    const duration = 2000; // 2 seconds
    const intervalTime = 30;

    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.value / (duration / intervalTime));
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] = Math.min(newCounts[idx] + increment, stat.value);
          }
          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [animate]);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
  <video
    className="hero-video"
    src={head1}
    autoPlay
    loop
    muted
    playsInline
  ></video>
  
  <div className="hero-blur"></div> {/* 👈 add this line */}

  <div className="hero-overlay">
    <h1>Clean Energy, Bright Future</h1>
    <p>Innovative technologies for efficient energy management.</p>

    <div className="button-group">
    <button className="more-btn">
  <Link to="/contact" className="more-btn-content">
    Contact Us
  </Link>
</button>

<Link to="/solutions" className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
  <span className="text">Learn More</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
</Link>
    </div>
  </div>
</div>







      <section className="what-we-offer-section">
  {/* Solar Installation */}
  {/* Solar Panel Installation */}
<div
  className="offer-card"
  style={{
    backgroundImage: `url(${panel1})`,
  }}
>
  <div className="offer-overlay">
    <h4 className="offer-category">SOLAR ENERGY</h4>
    <h2 className="offer-title">Solar Panel Installation</h2>
    <p className="offer-description">
      High-quality solar panels installed efficiently for maximum energy output.
    </p>
    <Link to="/solutions" className="offer-btn">More info</Link>
  </div>
</div>

{/* Battery Storage */}
<div
  className="offer-card"
  style={{
    backgroundImage: `url(${batt})`,
  }}
>
  <div className="offer-overlay">
    <h4 className="offer-category">ENERGY STORAGE</h4>
    <h2 className="offer-title">Battery Storage Solutions</h2>
    <p className="offer-description">
      Reliable energy storage solutions to keep your power running 24/7.
    </p>
    <Link to="/solutions" className="offer-btn">More info</Link>
  </div>
</div>

{/* Maintenance & Support */}
<div
  className="offer-card"
  style={{
    backgroundImage: `url(${supp})`,
  }}
>
  <div className="offer-overlay">
    <h4 className="offer-category">SUPPORT</h4>
    <h2 className="offer-title">Maintenance & Support</h2>
    <p className="offer-description">
      Regular checkups and maintenance to ensure your system works perfectly.
    </p>
    <Link to="/solutions" className="offer-btn">More info</Link>
  </div>
</div>
</section>



<ImpactStats />








<section className="projects-section">
  <h2 className="section-title">Our Projects</h2>
  <p className="section-subtext">
    Explore some of our completed solar installations and energy solutions across Ghana.  
    Each project reflects our dedication to quality, innovation, and sustainability.
  </p>

  <div className="projects-grid">
    <div className="project-card">
      <img src={proj1} alt="Residential Solar" />
      <h3> Commercial Rooftop System</h3>
    </div>

    <div className="project-card">
      <img src={proj2} alt="Commercial Solar" />
      <h3>Residential Installation</h3>
    </div>

    <div className="project-card">
      <img src={proj3} alt="Battery System" />
      <h3>DIY solar with battery backup</h3>
    </div>
  </div>
</section>



<section className="why-choose-section">
  <h2 className="section-title">Why Choose Rab Energy Solutions</h2>
  <p className="section-subtext">
    We combine innovation, experience, and dedication to deliver reliable and
    affordable solar energy solutions across Ghana.
  </p>

  <div className="reasons-grid">
    <div className="reason">
      <div className="reason-icon">
        <Award size={40} />
      </div>
      <h3>Proven Expertise</h3>
      <p>
        Over a decade of experience delivering dependable renewable energy
        solutions.
      </p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <Layers size={40} />
      </div>
      <h3>Comprehensive Solutions</h3>
      <p>
        End-to-end solar solutions for residential, commercial, and industrial
        projects.
      </p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <Globe size={40} />
      </div>
      <h3>Global Partnerships</h3>
      <p>
        Collaborating with world-class partners to deliver efficient and
        reliable clean energy systems.
      </p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <MapPin size={40} />
      </div>
      <h3>Local Knowledge</h3>
      <p>
        Deep understanding of Ghana’s energy challenges and environmental
        conditions.
      </p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <ShieldCheck size={40} />
      </div>
      <h3>After-Sales Support</h3>
      <p>
        Regular maintenance and ongoing support to ensure maximum return on
        investment for every installation.
      </p>
    </div>
  </div>
</section>


<section className="testimonials-section">
  <h2 className="section-title">What Our Clients Say</h2>

  <div className="testimonials-slider">
    <div className="testimonials-track">
      {/* Original testimonials */}
      <div className="testimonial">
        <p>
          "With our solar installations from Rab Energy Solutions, our hotel has
          uninterrupted power supply which gives our customers more satisfaction."
        </p>
        <h4>Rhogem Hotel</h4>
      </div>

      <div className="testimonial">
        <p>
          "After being introduced to solar systems by Rab Energy Solutions, we
          get more value for our homes and this makes us keep building more."
        </p>
        <h4>Vans International Real Estate</h4>
      </div>

      <div className="testimonial">
        <p>
          "Our solar installations from Rab Energy Solutions are truly a cost-saving
          investment, allowing us to offer better rates to our clients."
        </p>
        <h4>Yankey Yankey Apartments</h4>
      </div>

      <div className="testimonial">
        <p>
          "Our remote areas with little or no access to electricity relied on
          Rab Energy Solutions solar installations as dependable power partners."
        </p>
        <h4>Ahantaman Rural Bank</h4>
      </div>

      <div className="testimonial">
        <p>
          "Rab Energy Solutions supported our farming and irrigation needs with
          borehole and solar irrigation systems, ensuring year-round harvests."
        </p>
        <h4>Western Serene Hotel</h4>
      </div>

      <div className="testimonial">
        <p>
          "I drive an electric vehicle comfortably and maintenance-free.
          Rab Energy Solutions inspired me to adopt clean energy across our hotels."
        </p>
        <h4>Mr. Ansah Rodney</h4>
      </div>

      <div className="testimonial">
        <p>
          "I received solar installation training from Rab Energy Solutions and
          was employed as a solar technician. They gave me a career path."
        </p>
        <h4>Kinsley Andoh</h4>
      </div>

      {/* Duplicated testimonials (for infinite loop) */}
      <div className="testimonial">
        <p>
          "With our solar installations from Rab Energy Solutions, our hotel has
          uninterrupted power supply which gives our customers more satisfaction."
        </p>
        <h4>Rhogem Hotel</h4>
      </div>

      <div className="testimonial">
        <p>
          "After being introduced to solar systems by Rab Energy Solutions, we
          get more value for our homes and this makes us keep building more."
        </p>
        <h4>Vans International Real Estate</h4>
      </div>

      <div className="testimonial">
        <p>
          "Our solar installations from Rab Energy Solutions are truly a cost-saving
          investment, allowing us to offer better rates to our clients."
        </p>
        <h4>Yankey Yankey Apartments</h4>
      </div>

      <div className="testimonial">
        <p>
          "Our remote areas with little or no access to electricity relied on
          Rab Energy Solutions solar installations as dependable power partners."
        </p>
        <h4>Ahantaman Rural Bank</h4>
      </div>

      <div className="testimonial">
        <p>
          "Rab Energy Solutions supported our farming and irrigation needs with
          borehole and solar irrigation systems, ensuring year-round harvests."
        </p>
        <h4>Western Serene Hotel</h4>
      </div>

      <div className="testimonial">
        <p>
          "I drive an electric vehicle comfortably and maintenance-free.
          Rab Energy Solutions inspired me to adopt clean energy across our hotels."
        </p>
        <h4>Mr. Ansah Rodney</h4>
      </div>

      <div className="testimonial">
        <p>
          "I received solar installation training from Rab Energy Solutions and
          was employed as a solar technician. They gave me a career path."
        </p>
        <h4>Kinsley Andoh</h4>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
