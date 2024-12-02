import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Title Section */}
      <h1>Medical Massage</h1>
      <h2>Koh Phangan</h2>
      <div className="hero-image-container">
        <img
          src="../assets/hero/hero.png"
          alt="Hero Section"
          className="hero-image"
        />
      </div>

      {/* Call-to-Action */}
      {/* <div className="cta">
        <button
          onClick={() =>
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contact Us
        </button>
      </div> */}
    </section>
  );
}
