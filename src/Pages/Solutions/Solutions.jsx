import React from "react";
import "./Solutions.css";
import heroBg from "../../assets/solutionsBg.jpeg";


const OurProfile = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
  className="profile-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="profile-overlay">
    <h1>Our Profile</h1>
    <p>
      Driving sustainable, reliable, and innovative renewable energy
      solutions across Ghana and beyond.
    </p>
  </div>
</section>


    </>
  );
};

export default OurProfile;
