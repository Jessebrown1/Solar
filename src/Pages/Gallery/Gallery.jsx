import React from "react";
import "./Gallery.css";

import galleryHero from "../../assets/galleryHero.jpeg";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="gallery-page">
      {/* 🔆 Hero Section */}
      <div
        className="gallery-hero"
        style={{ backgroundImage: `url(${galleryHero})` }}
      >
        <div className="overlay">
          <h1>Solar Brilliance in Action</h1>
          <p>Explore our projects and see how we bring clean energy to life.</p>
        </div>
      </div>

      {/* 🖼️ Gallery Grid */}
      <h2 className="gallery-title">Our Latest Solar Installations</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Solar project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
