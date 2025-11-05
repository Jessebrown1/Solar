import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import head1 from "../../assets/head1.mp4";
import head2 from "../../assets/head2.mp4";
import { Sun, Building2, BatteryCharging } from "lucide-react";
import install from "../../assets/install.jpg";
import { Wrench, DollarSign, Headphones } from "lucide-react";
import panel1 from "../../assets/panel1.jpg"
import batt from "../../assets/batt.jpg"
import supp from "../../assets/supp.jpg"
import smart from "../../assets/smart.jpg"
import batt2 from "../../assets/batt2.jpg"
import solarp from "../../assets/solarp.jpeg"
import chare from "../../assets/chare.jpeg"
import frame from "../../assets/frame.jpeg"
import proj1 from "../../assets/proj1.jpg"
import proj2 from "../../assets/proj2.jpg"
import proj3 from "../../assets/proj3.jpg"


import { ChevronLeft, ChevronRight } from "lucide-react";



const Home = () => {
  const [current, setCurrent] = useState(0);

  const products = [
    {
      image: solarp,
      title: "High-Efficiency Solar Panels",
      desc: "Capture maximum sunlight with premium photovoltaic panels.",
    },
    {
      image: batt2,
      title: "Solar Battery Systems",
      desc: "Store solar energy for uninterrupted power, day or night.",
    },
    {
      image: smart,
      title: "Smart Inverters",
      desc: "Convert solar power efficiently for everyday use.",
    },
    {
      image: chare,
      title: "Charge Controllers",
      desc: "Optimize charging performance and battery lifespan.",
    },
    {
      image: frame,
      title: "Mounting Systems",
      desc: "Durable and weatherproof support structures.",
    },
  ];
  

  const statsData = [
    { label: "Homes Powered", value: 800, suffix: "+" },
    { label: "Renewable Energy", value: 100, suffix: "%" },
    { label: "Years Experience", value: 15, suffix: "+" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
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
        <span className="more-btn-content">Contact Us</span>
      </button>

      <button className="animated-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="text">Learn More</span>
        <span className="circle"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>







      <section className="what-we-offer-section">
  {/* Solar Installation */}
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
      <a href="/solar-installation" className="offer-btn">More info</a>
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
      <a href="/battery-storage" className="offer-btn">More info</a>
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
      <a href="/maintenance" className="offer-btn">More info</a>
    </div>
  </div>
</section>



<section className="solutions-section">
  <div className="container">
    <h2 className="section-title">Solutions & Products</h2>
    <p className="section-subtitle">
      Explore our range of solar solutions designed for homes, businesses, and industries.
    </p>

    <div className="slider-wrapper">
      <button
        className="arrow-btn left"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? products.length - 3 : prev - 1))
        }
      >
        <ChevronLeft size={30} />
      </button>

      <div className="product-slider">
        {products.slice(current, current + 3).map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </div>
        ))}Solar Panel Installation
      </div>

      <button
        className="arrow-btn right"
        onClick={() =>
          setCurrent((prev) => (prev >= products.length - 3 ? 0 : prev + 1))
        }
      >
        <ChevronRight size={30} />
      </button>
    </div>
  </div>
</section>







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
  <h2 className="section-title">Why Choose Us</h2>
  <p className="section-subtext">
    We combine innovation, experience, and dedication to provide reliable and
    affordable solar energy solutions across Ghana.
  </p>

  <div className="reasons-grid">
    <div className="reason">
      <div className="reason-icon">
        <Wrench size={40} />
      </div>
      <h3>Experienced Technicians</h3>
      <p>Our team brings over 15 years of combined solar expertise.</p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <DollarSign size={40} />
      </div>
      <h3>Affordable Solutions</h3>
      <p>We design cost-effective systems that fit your budget and needs.</p>
    </div>

    <div className="reason">
      <div className="reason-icon">
        <Headphones size={40} />
      </div>
      <h3>24/7 Support</h3>
      <p>Dedicated support team to ensure your system runs smoothly.</p>
    </div>
  </div>
</section>


<section className="testimonials-section">
  <h2 className="section-title">What Our Clients Say</h2>
  <div className="testimonials-grid">
    <div className="testimonial">
      <p>"Rabenergy transformed our energy bills. Excellent service!"</p>
      <h4>- Nana K., Accra</h4>
    </div>
    <div className="testimonial">
      <p>"Reliable team and top-quality installation. Highly recommend!"</p>
      <h4>- Ama B., Tema</h4>
    </div>
    <div className="testimonial">
      <p>"Reliable team and top-quality installation. Highly recommend!"</p>
      <h4>- Ella D., Tema</h4>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
