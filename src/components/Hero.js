import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Title Section */}
      <h1>Medical Massage</h1>
      <h2>Koh Phangan</h2>
      <p>
        <em>Your gateway to wellness</em>
      </p>

      <div className="hero-container">
        {/* Left Hero Text */}
        <div className="hero-side">
          <div className="hero-text hero-top">Diagnosing</div>
          <div className="hero-text hero-bottom">Releasing</div>
        </div>

        {/* Center Image */}
        <div className="hero-image-container">
          <img
            src="../assets/hero/hero.jpg"
            alt="Hero Section"
            className="hero-image"
          />
        </div>

        {/* Right Hero Text */}
        <div className="hero-side">
          <div className="hero-text hero-top">Regenerating Blood flow</div>
          <div className="hero-text hero-bottom">Regenerate Flow of Chi Energy</div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="hero-content">
        <div className="cta">
          <button
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
