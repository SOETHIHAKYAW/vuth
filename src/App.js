import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import NWC from './components/NWC';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <FAQ />
      <NWC />
      <Contact />
    </div>
  );
}

export default App;
