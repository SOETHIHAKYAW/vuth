import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Welcome to Vuth Medical Massage</h1>
      <p>
        Experience the ultimate rejuvenation with our deep tissue medical massage, 
        designed to improve blood flow, release muscle tension, and restore the energy flow of Chi.
      </p>
      <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        Book Now
      </button>
    </section>
  );
}
