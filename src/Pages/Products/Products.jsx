import React, { useState } from "react";
import "./Products.css";
import { Bolt, Sun, Cpu, Settings, BatteryCharging, ShieldCheck } from "lucide-react";

import prod from "../../assets/prod.jpg";

import avr from "../../assets/avr.jpg";
import avr1 from "../../assets/avr1.jpg";
import drive from "../../assets/drive.jpg";
import drive2 from "../../assets/drive2.jpg";
import drive1 from "../../assets/drive1.jpg";
import drive3 from "../../assets/drive3.jpg";

import stabilizer from "../../assets/stabilizer.jpg";

import resolution1 from "../../assets/resolution1.jpg";
import resolution2 from "../../assets/resolution2.jpg";
import resolution3 from "../../assets/resolution3.jpg"; 
import resolution4 from "../../assets/resolution4.jpg";
import resolution5 from "../../assets/resolution5.jpg";
import resolution6 from "../../assets/resolution6.jpg";
import resolution7 from "../../assets/resolution7.jpg";
import resolution8 from "../../assets/resolution8.jpg";
import resolution9 from "../../assets/resolution9.jpg";


import inverter1 from "../../assets/inverter1.jpg";
import inverter2 from "../../assets/inverter2.jpg";
import inverter3 from "../../assets/inverter3.jpg";
import inverter4 from "../../assets/inverter4.jpg";
import inverter5 from "../../assets/inverter5.jpg";
import inverter6 from "../../assets/inverter6.jpg";
import inverter7 from "../../assets/inverter7.jpg";
import inverter8 from "../../assets/inverter8.jpg";
import inverter9 from "../../assets/inverter9.jpg";
import inverter10 from "../../assets/inverter10.jpg";
import inverter11 from "../../assets/inverter11.jpg";
import inverter12 from "../../assets/inverter12.jpg";


import transformer from "../../assets/transformer.jpg";
import transformer2 from "../../assets/transformer2.jpg";


import ups1 from "../../assets/ups1.jpg";
import ups2 from "../../assets/ups2.jpg";
import ups3 from "../../assets/ups3.jpg";
import ups4 from "../../assets/ups4.jpg";




const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    {
      name: "AVR",
      group: "Power Control",
      icon: <ShieldCheck />,
      image: avr,
      slug: "avr",
      description:
        "Automatic Voltage Regulators for stable power and equipment protection.",
    },
    {
      name: "AVR",
      group: "Power Control",
      icon: <ShieldCheck />,
      image: avr1,
      slug: "avr",
      description:
        "Automatic Voltage Regulators for stable power and equipment protection.",
    },
    {
      name: "Frequency Drive",
      group: "Power Control",
      icon: <Settings />,
      image: drive,
      slug: "frequency-drive",
      description:
        "Advanced frequency drives for efficient motor speed control.",
    },
    {
      name: "Frequency Drive",
      group: "Power Control",
      icon: <Settings />,
      image: drive1,
      slug: "frequency-drive",
      description:
        "Advanced frequency drives for efficient motor speed control.",
    },
    {
      name: "Frequency Drive",
      group: "Power Control",
      icon: <Settings />,
      image: drive2,
      slug: "frequency-drive",
      description:
        "Advanced frequency drives for efficient motor speed control.",
    },
    {
      name: "Frequency Drive",
      group: "Power Control",
      icon: <Settings />,
      image: drive3,
      slug: "frequency-drive",
      description:
        "Advanced frequency drives for efficient motor speed control.",
    },


    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution1,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution2,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution3,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution4,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution5,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution6,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution7,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution8,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },
    {
      name: "High Resolution",
      group: "Industrial",
      icon: <Cpu />,
      image: resolution9,
      slug: "high-resolution",
      description:
        "High-precision power solutions for industrial applications.",
    },









    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter1,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter2,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter3,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter4,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter5,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter6,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter7,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter8,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter9,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter10,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter11,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },
    {
      name: "Solar Inverters & Batteries",
      group: "Renewable",
      icon: <Sun />,
      image: inverter12,
      slug: "solar-inverters-batteries",
      description:
        "Reliable solar inverters and energy storage systems.",
    },






    {
      name: "Transformers",
      group: "Industrial",
      icon: <Bolt />,
      image: transformer,
      slug: "transformers",
      description:
        "Durable transformers for safe voltage conversion.",
    },

    {
      name: "Transformers",
      group: "Industrial",
      icon: <Bolt />,
      image: transformer2,
      slug: "transformers",
      description:
        "Durable transformers for safe voltage conversion.",
    },




    {
      name: "UPS",
      group: "Backup Power",
      icon: <BatteryCharging />,
      image: ups1,
      slug: "ups",
      description:
        "Uninterruptible Power Supply systems for continuous power.",
    },
    {
      name: "UPS",
      group: "Backup Power",
      icon: <BatteryCharging />,
      image: ups2,
      slug: "ups",
      description:
        "Uninterruptible Power Supply systems for continuous power.",
    },
    {
      name: "UPS",
      group: "Backup Power",
      icon: <BatteryCharging />,
      image: ups3,
      slug: "ups",
      description:
        "Uninterruptible Power Supply systems for continuous power.",
    },
    {
      name: "UPS",
      group: "Backup Power",
      icon: <BatteryCharging />,
      image: ups4,
      slug: "ups",
      description:
        "Uninterruptible Power Supply systems for continuous power.",
    },




    {
      name: "Voltage Stabilizers",
      group: "Power Control",
      icon: <ShieldCheck />,
      image: stabilizer,
      slug: "voltage-stabilizers",
      description:
        "Voltage stabilizers protecting appliances from fluctuations.",
    },
  ];

  const filters = ["All", "Power Control", "Renewable", "Industrial", "Backup Power"];

  const filteredCategories =
    activeFilter === "All"
      ? categories
      : categories.filter((c) => c.group === activeFilter);

  return (
    <section className="products-page">
      {/* HERO */}
      <div className="products-hero" style={{ backgroundImage: `url(${prod})` }}>
        <div className="overlay">
          <h1>Power Solutions by Category</h1>
          <p>Browse clearly categorized power and renewable energy solutions.</p>
        </div>
      </div>

      <h1 className="products-main-title">Product Categories</h1>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* CATEGORY GRID */}
      <div className="products-grid">
        {filteredCategories.map((cat, index) => (
          <div className="product-card category-card" key={index}>
            <div className="card-icon">{cat.icon}</div>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;