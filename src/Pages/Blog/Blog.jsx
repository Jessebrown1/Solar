import React, { useEffect } from "react";
import "./Blog.css";
import blogB from "../../assets/blogb.jpeg";
import solar1 from "../../assets/solar1.jpg";
import solar2 from "../../assets/solar2.jpg";
import solar3 from "../../assets/solar3.jpeg";

const Blog = () => {
  const posts = [
    {
      title: "Ghana Launches West Africa’s Largest Floating Solar Project",
      image: solar1,
      author: "Radarr Africa",
      date: "April 2025",
      excerpt:
        "Ghana has launched a 5 MW floating solar plant on the Black Volta River — the first of its kind in West Africa. The project aims to expand to 65 MW and power thousands of homes sustainably.",
      link: "https://radarr.africa/ghana-launches-west-africas-largest-floating-solar-project-to-boost-clean-energy/?utm_source=chatgpt.com",
    },
    {
      title: "Tema Factory Installs Massive 532 kWp Solar System",
      image: solar2,
      author: "Nexans Ghana",
      date: "May 2025",
      excerpt:
        "Nexans Kabelmetal Ghana Ltd has installed a new 532 kWp grid-tied solar system at its Tema plant, cutting energy costs and reducing carbon emissions by 11 tons each quarter.",
      link: "https://www.nexans.com.gh/en/newsroom/news/details/2025/05/Nexans-Kabelmetal-Ghana-Ltd-inaugurates-pioneering-solar-power-system.html?utm_source=chatgpt.com",
    },
    {
      title: "Africa Sees Record Imports of Chinese Solar Panels",
      image: solar3,
      author: "Wired News",
      date: "September 2025",
      excerpt:
        "Africa’s demand for Chinese solar panels is at a record high — signaling the continent’s rapid shift toward renewable energy and solar adoption.",
      link: "https://www.wired.com/story/african-imports-of-chinese-solar-panels-increase?utm_source=chatgpt.com",
    },
  ];

  // ✨ Animate cards on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");

    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="blog-page">
      {/* 🌞 Hero Section */}
      <div className="blog-hero" style={{ backgroundImage: `url(${blogB})` }}>
        <div className="overlay">
          <h1>Our Solar Blog</h1>
          <p>Insights, innovations, and stories that power your world.</p>
        </div>
      </div>

      {/* 📰 Blog Posts */}
      <h2 className="blog-title">Latest Solar News & Updates</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="image-container">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="meta">
                By <span>{post.author}</span> • {post.date}
              </p>
              <p className="excerpt">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
