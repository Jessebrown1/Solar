import React, { useState } from "react";
import "./Products.css";
import {
  Bolt,
  Sun,
  BatteryCharging,
  Wind,
  Car
} from "lucide-react";

import prod from "../../assets/prod.jpeg";

/* =======================
   ASSETS
======================= */
import inverter1 from "../../assets/inverter1.jpg";
import inverter2 from "../../assets/inverter2.jpg";
import inverter4 from "../../assets/inverter4.jpg";
import inverter5 from "../../assets/inverter5.jpg";
import inverter6 from "../../assets/inverter6.jpg";
import inverter7 from "../../assets/inverter7.jpg";
import inverter8 from "../../assets/inverter8.jpg";
import inverter9 from "../../assets/inverter9.jpg";
import inverter10 from "../../assets/inverter10.jpg";
import inverter12 from "../../assets/inverter12.jpg";

import avr from "../../assets/avr.jpg";
import avr1 from "../../assets/avr1.jpg";

import ups1 from "../../assets/ups1.jpg";
import ups2 from "../../assets/ups2.jpg";
import ups3 from "../../assets/ups3.jpg";
import ups4 from "../../assets/ups4.jpg";

import stabilizer from "../../assets/stabilizer.jpg";

import drive from "../../assets/drive.jpg";
import drive1 from "../../assets/drive1.jpg";
import drive2 from "../../assets/drive2.jpg";
import drive3 from "../../assets/drive3.jpg";

import transformer from "../../assets/transformer.jpg";
import transformer2 from "../../assets/transformer2.jpg";

import resolution3 from "../../assets/resolution3.jpg";
import resolution5 from "../../assets/resolution5.jpg";
import resolution6 from "../../assets/resolution6.jpg";
import resolution7 from "../../assets/resolution7.jpg";
import resolution8 from "../../assets/resolution8.jpg";
import resolution9 from "../../assets/resolution9.jpg";


import solarr from "../../assets/solarrr.png"
import ev from "../../assets/ev.png"
import ev2 from "../../assets/ev2.png"

/* =======================
   DATA MODEL
======================= */
const productCategories = [
  {
    title: "Solar Systems",
    icon: Sun,
    description:
      "Complete solar energy solutions including inverters, panels, batteries, and hybrid systems.",
    image: solarr,
    items: [
      { name: "Solar Inverter", image: inverter1 },
      { name: "Solar Inverter", image: inverter2 },
      { name: "Solar Inverter", image: inverter4 },
      { name: "Solar Inverter", image: inverter5 },
      { name: "Solar Inverter", image: inverter6 },
      { name: "Solar Inverter", image: inverter7 },
      { name: "Solar Inverter", image: inverter8 },
      { name: "Solar Inverter", image: inverter9 },
      { name: "Solar Inverter", image: inverter10 },
      { name: "Solar Inverter", image: inverter12 },
      { name: "Automatic Voltage Regulator (AVR)", image: avr },
      { name: "Automatic Voltage Regulator (AVR)", image: avr1 }
    ]
  },
  {
    title: "Power Backup Systems",
    icon: BatteryCharging,
    description:
      "Reliable backup and power conditioning systems to ensure uninterrupted operations.",
    image: ups1,
    items: [
      { name: "UPS System", image: ups1 },
      { name: "UPS System", image: ups2 },
      { name: "UPS System", image: ups3 },
      { name: "UPS System", image: ups4 },
      { name: "Voltage Stabilizer", image: stabilizer },
      { name: "Frequency Drive", image: drive },
      { name: "Frequency Drive", image: drive1 },
      { name: "Frequency Drive", image: drive2 },
      { name: "Frequency Drive", image: drive3 }
    ]
  },
  {
    title: "AgricTech Solutions",
    icon: Wind,
    description:
      "Solar-powered systems designed for agriculture and rural electrification.",
    image: inverter2,
    items: [
      { name: "Solar Borehole Systems" },
      { name: "Solar Irrigation Systems" },
      { name: "Agricultural Power Solutions" }
    ]
  },
  {
    title: "Industrial Power Solutions",
    icon: Bolt,
    description:
      "Heavy-duty industrial power infrastructure and high-precision control systems.",
    image: transformer,
    items: [
      { name: "Power Transformer", image: transformer },
      { name: "Power Transformer", image: transformer2 },
      { name: "High Resolution Control System", image: resolution3 },
      { name: "High Resolution Control System", image: resolution5 },
      { name: "High Resolution Control System", image: resolution6 },
      { name: "High Resolution Control System", image: resolution7 },
      { name: "High Resolution Control System", image: resolution8 },
      { name: "High Resolution Control System", image: resolution9 }
    ]
  },
  {
    title: "Electric Vehicles (EVs)",
    icon: Car,
    description:
      "Electric mobility solutions and solar-compatible charging infrastructure.",
    image: ev2,
    items: [
      { name: "Electric Pickups", image: ev },
      { name: "Electric Sedans" },
      { name: "Electric SUVs" },
      { name: "EV Chargers (Solar / Grid)" }
    ]
  }
];

/* =======================
   MAIN COMPONENT
======================= */
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="products-page">
      {/* HERO */}
      <div
        className="products-hero"
        style={{ backgroundImage: `url(${prod})` }}
      >
        <div className="overlay">
          <h1>Power Solutions by Category</h1>
          <p>
            Engineered energy solutions for residential, commercial,
            and industrial applications.
          </p>
        </div>
      </div>

      {/* CATEGORY GRID */}
      {!selectedCategory ? (
        <div className="products-grid">
          {productCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="product-card clickable"
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="card-icon">
                  <Icon size={24} />
                </div>

                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                />

                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        /* CATEGORY ITEMS VIEW */
        <div className="category-detail">
          <button
            className="back-btn"
            onClick={() => setSelectedCategory(null)}
          >
            ← Back to Categories
          </button>

          <h2>{selectedCategory.title}</h2>
          <p>{selectedCategory.description}</p>

          <div className="products-grid">
            {selectedCategory.items.map((item, i) => (
              <div className="product-card" key={i}>
                <h4 className="item-name">{item.name}</h4>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
