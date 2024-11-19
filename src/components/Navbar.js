import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('programs')}>Programs</li>
        <li onClick={() => scrollToSection('faq')}>FAQ</li>
        <li onClick={() => scrollToSection('media')}>Media</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}
