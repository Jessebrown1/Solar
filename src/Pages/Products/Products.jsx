import React from "react";
import "./Products.css";
import panel1 from "../../assets/panel1.jpg";
import batt from "../../assets/batt.jpg";
import smart from "../../assets/smart.jpg";
import batt2 from "../../assets/batt2.jpg";
import chare from "../../assets/chare.jpeg";
import frame from "../../assets/frame.jpeg";
import prod from "../../assets/prod.jpg"; // 🌞 new background image

const Products = () => {
  const products = [
    {
      name: "Solar Panels",
      image: panel1,
      description: "High-efficiency solar panels for homes and businesses, built to withstand tough weather conditions.",
    },
    {
      name: "Inverters",
      image: smart,
      description: "Reliable inverters that convert solar energy into usable electricity with maximum efficiency.",
    },
    {
      name: "Batteries",
      image: batt2,
      description: "Long-lasting lithium and gel batteries for storing clean energy safely and efficiently.",
    },
    {
      name: "Charge Controllers",
      image: chare,
      description: "Advanced controllers that protect your solar setup and ensure optimal battery charging.",
    },
    {
      name: "Cables",
      image: batt,
      description: "Durable, weather-resistant cables for safe and efficient solar connections.",
    },
    {
      name: "Installation Kits",
      image: frame,
      description: "All-in-one mounting kits and accessories for professional solar installations.",
    },
  ];

  return (
    <section className="products-page">
      {/* 🌞 Header Section */}
      <div
        className="products-hero"
        style={{ backgroundImage: `url(${prod})` }}
      >
        <div className="overlay">
          <h1>⚡ Power the Future — One Product at a Time ⚡</h1>
          <p>Explore our range of durable and efficient solar energy solutions built for lasting performance.</p>
        </div>
      </div>

      <h1 className="products-main-title">
  ⚡ Discover Our Best-Selling Solar Gear ⚡
</h1>

<div className="products-grid">
  {products.map((product, index) => (
    <div className="product-card" key={index}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Products;
