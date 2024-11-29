import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      {/* Logo as an image */}
      <img
        src="../assets/logo/mmkp.png"
        alt="MMKP Logo"
        className="navbar-logo" // Added class for styling
      />

      {/* Navigation Links */}
      <nav>
        <a onClick={() => scrollToSection('hero')} href="#hero">Home</a>
        <a onClick={() => scrollToSection('about')} href="#about">About</a>
        <a onClick={() => scrollToSection('programs')} href="#programs">Programs</a>
        <a onClick={() => scrollToSection('testimonials')} href="#testimonials">Testimonials</a>
        <a onClick={() => scrollToSection('media')} href="#media">Media</a>
        <a onClick={() => scrollToSection('contact')} href="#contact">Contact</a>
      </nav>
    </nav>
  );
}
