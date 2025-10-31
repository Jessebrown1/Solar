import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import head1 from "../../assets/head1.png";
import { Sun, Building2, BatteryCharging } from "lucide-react";
import install from "../../assets/install.jpg";

const Home = () => {
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
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${head1})` }}
      >
        <div className="hero-overlay">
          <h1>Clean Energy, Bright Future</h1>
          <p>Innovative technologies for efficient energy management.</p>

          <div className="button-group">
            <button className="more-btn">
              <span className="more-btn-content">Contact Us</span>
            </button>

            <button className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Learn More</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Text Section */}
          <div className="about-text">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powering Ghana with{" "}
              <span className="text-green-600">Sustainable Energy</span>
            </h2>

            <p>
              At <span className="highlight-blue">Rabenergy Solutions</span>, we’re
              dedicated to transforming the energy landscape by delivering reliable,
              clean, and cost-effective solar solutions. From homes to businesses,
              we power the future with innovation and integrity.
            </p>

            <div className="flex justify-center mt-8">
  <div
    ref={statsRef}
    className="flex justify-around w-full max-w-[800px]"
  >
    {statsData.map((stat, idx) => (
      <div key={idx} className="stat text-center min-w-[120px]">
        <h3 className="text-3xl font-bold text-green-600">
          {counts[idx]}
          {stat.suffix}
        </h3>
        <p className="text-gray-700">{stat.label}</p>
      </div>
    ))}
  </div>
</div>


            {/* Feature Highlights */}
            <div className="features">
              <div className="feature">
                <div className="icon-box">
                  <Sun />
                </div>
                <div>
                  <h4>Clean & Renewable Energy</h4>
                  <p>Harnessing solar power for a greener Ghana.</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box">
                  <Building2 />
                </div>
                <div>
                  <h4>Residential & Commercial Projects</h4>
                  <p>Trusted by homes, schools, and large industries.</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box">
                  <BatteryCharging />
                </div>
                <div>
                  <h4>Reliable Power Backup</h4>
                  <p>Providing sustainable energy even off-grid.</p>
                </div>
              </div>
            </div>

            {/* Animated Stats */}
            
          </div>

          {/* Right Image Section */}
          <div className="about-image">
            <img src={install} alt="Solar installation" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
