import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <h1>VUTH</h1>

      {/* Navigation Links */}
      <nav>
        <a onClick={() => scrollToSection('hero')} href="#hero">Home</a>
        <a onClick={() => scrollToSection('about')} href="#about">About</a>
        <a onClick={() => scrollToSection('programs')} href="#programs">Programs</a>
        <a onClick={() => scrollToSection('faq')} href="#faq">FAQ</a>
        <a onClick={() => scrollToSection('media')} href="#media">Media</a>
        <a onClick={() => scrollToSection('contact')} href="#contact">Contact</a>
      </nav>
    </nav>
  );
}
