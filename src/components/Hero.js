import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id='hero' className="hero">
      {/* Title moved to the top */}
      <h1>Medical Massage</h1>
      <h2> Koh Phangan</h2>
      <p>
        <em>Your gateway to wellness</em>
      </p>
      <div>
        {/* div means one row that has two column for image and hero text */}

          {/* Hero text aligned to the left */}
          <div className="hero-text">
            {['Diagnostic', 'Release', 'Move', 'Flow', 'Glow'].map((text, index) => (
              <div key={index} className="hero-card">
                <span>{text}</span>
              </div>
            ))}
          </div>
        <div className="hero-image-container">
          <img
            src="../assets/hero/hero.jpg"
            alt="Hero Section"
            className="hero-image"
          />
        </div>
        
      </div>
      
      {/* Call-to-action button */}
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
