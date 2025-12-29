import React, { useState } from "react";
import "./Gallery.css";

import galleryHero from "../../assets/galleryHero.jpeg";

import proj1 from "../../assets/proj1.jpeg"
import proj2 from "../../assets/proj2.jpeg"
import proj3 from "../../assets/proj3.jpg"
import him from "../../assets/him.jpeg"
import about from "../../assets/about.jpeg";
import batt from "../../assets/batt.jpeg"
import panel1 from "../../assets/panel1.jpeg"
import supp from "../../assets/supp.jpeg"
import inst1 from "../../assets/inst1.jpeg";
import contact from "../../assets/contact.jpeg";



import gallery1 from "../../assets/gallery1.jpeg";


import gallery4 from "../../assets/gallery4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";
import gallery7 from "../../assets/gallery7.jpeg";
import gallery8 from "../../assets/gallery8.jpeg";
import gallery9 from "../../assets/gallery9.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";
import gallery11 from "../../assets/gallery11.jpeg";
import gallery12 from "../../assets/gallery12.jpeg";
import gallery13 from "../../assets/gallery13.jpeg";
import gallery14 from "../../assets/gallery14.jpeg";
import gallery15 from "../../assets/gallery15.jpeg";
import gallery16 from "../../assets/gallery16.jpeg";
import gallery17 from "../../assets/gallery17.jpeg";
import gallery18 from "../../assets/gallery18.jpeg";
import gallery19 from "../../assets/gallery19.jpeg";
import gallery20 from "../../assets/gallery20.jpeg";
import gallery21 from "../../assets/gallery21.jpeg";
import gallery22 from "../../assets/gallery22.jpeg";
import gallery23 from "../../assets/gallery23.jpeg";
import gallery24 from "../../assets/gallery24.jpeg";
import gallery25 from "../../assets/gallery25.jpeg";
import gallery26 from "../../assets/gallery26.jpeg";
import gallery27 from "../../assets/gallery27.jpeg";


const Gallery = () => {
  const images = [
    him,
    inst1,
    proj1,
    proj2,
    proj3,
    about,
    batt,
    panel1,
    supp,
    galleryHero,
    contact,
    gallery1, 

 
    gallery4, 
    gallery5, 
    gallery6,
    gallery7, 
    gallery8, 
    gallery9,
    gallery10, 
    gallery11, 
    gallery12,
    gallery13, 
    gallery14, 
    gallery15,
    gallery16, 
    gallery17, 
    gallery18,
    gallery19, 
    gallery20, 
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,

  ];
  const [activeImage, setActiveImage] = useState(null);

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
          <button
            key={index}
            className="gallery-item"
            onClick={() => setActiveImage(image)}
            aria-label="View project image"
          >
            <img src={image} alt={`Solar project ${index + 1}`} />
            <div className="gallery-hover">
              <span>View Project</span>
            </div>
          </button>
        ))}
      </div>

      {/* 🔍 Lightbox Viewer */}
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage} alt="Solar installation full view" />
            <button
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
