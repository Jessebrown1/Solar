import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Gallery from "./Pages/Gallery/Gallery";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Solutions from "./Pages/Solutions/Solutions";

function App() {
  return (
    <>
      {/* ✅ Scroll Progress Bar + Scroll to Top Button */}
      <ScrollProgress />

      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-6 sm:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* ✅ Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
